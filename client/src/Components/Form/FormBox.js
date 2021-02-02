import React, { useState, useContext, useEffect } from "react";
import { dataUrl } from "../../api/index";
import axios from "axios";
import { ADD__DATA, UPDATE__DATA } from "../../Context/action.type";
import { DataContext } from "../../Context/DataContext";
import { Form, FormGroup, Input, Button, } from "reactstrap";
import { toast } from "react-toastify";

const FromBox = ({ currentId, setCurrentId }) => {

    const { userData, dispatch } = useContext(DataContext);
    const udapteUserData = userData.find(el => el._id === currentId);
    const [firstName, setFirstName] = useState('');
    const [lastName, setlastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [gender, setGender] = useState('');


    const data = {
        firstName,
        lastName,
        email,
        password,
        gender
    }


    useEffect(() => {
        if (udapteUserData) {
            setFirstName(udapteUserData.firstName);
            setlastName(udapteUserData.lastName);
            setEmail(udapteUserData.email);
            setPassword(udapteUserData.password);
            setGender(udapteUserData.gender);
        }
    }, [udapteUserData])

    const addData = async () => {

        await axios.post(dataUrl, data).then(res => {
            try {
                const { data } = res;
                dispatch({
                    type: ADD__DATA,
                    payload: data,
                })

            } catch (error) {
                console.log(error)
            }
        });

        toast(`Data added successfully`, {
            type: 'success',
            position: "bottom-left",
        })
    }

    const updateData = async (currentId) => {

        try {
            await axios.patch(`${dataUrl}/${currentId}`, data).then(res => {
                const { data } = res;
                dispatch({
                    type: UPDATE__DATA,
                    payload: data,
                })
            });
        } catch (error) {
            console.log(error)
        }

        toast(`Data updated successfully`, {
            type: 'success',
            position: "bottom-left",
        })
    }


    const clear = () => {
        setCurrentId(0);
        setFirstName('');
        setlastName('');
        setEmail('');
        setPassword('');
        setGender('');
    }

    const handelSubmit = (e) => {
        e.preventDefault();
        /* if (firstName === '' || lastName === '' || email === '' || password === '' || gender === '') {
            toast(`Please Enter All The Field's`, {
                type: 'error',
                position: "top-left",
            })
        } */
        if (Number(currentId) === 0) {
            addData();
            clear();
        } else {
            updateData(currentId);
            clear();
        }
    }

    return (
        <Form style={{ margin: "20px 0px" }} onSubmit={handelSubmit}>
            <FormGroup>
                <Input type="text" name="firstName" id="firstName" placeholder="First Name" value={firstName} onChange={e => setFirstName(e.target.value)} />
            </FormGroup>
            <FormGroup>
                <Input type="text" name="lastName" id="lastName" placeholder="Last Name" value={lastName} onChange={e => setlastName(e.target.value)} />
            </FormGroup>
            <FormGroup>
                <Input type="email" name="email" id="email" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} />
            </FormGroup>
            <FormGroup>
                <Input type="password" name="password" id="password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} />
            </FormGroup>
            <FormGroup>
                <Input type="select" name="select" id="gender" value={gender} onChange={e => setGender(e.target.value)}>
                    <option value='Select Gender'>Select Gender</option>
                    <option value='Male'>Male</option>
                    <option value='Female'>Female</option>
                    <option value='Others'>Others</option>
                </Input>
            </FormGroup>
            <Button>Submit</Button>
        </Form>
    )
}

export default FromBox;
