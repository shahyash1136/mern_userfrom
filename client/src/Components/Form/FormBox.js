import React, { useState, useContext, useEffect } from "react";
import { dataUrl } from "../../api/index";
import axios from "axios";
import { ADD__DATA, UPDATE__DATA } from "../../Context/action.type";
import { DataContext } from "../../Context/DataContext";
import { Form, FormGroup, Label, Input, Button, } from "reactstrap";
import { toast } from "react-toastify";

const FromBox = () => {

    const { dispatch } = useContext(DataContext);

    const [firstName, setFirstName] = useState('');
    const [lastName, setlastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [gender, setGender] = useState('');


    const addData = async () => {
        const data = {
            firstName,
            lastName,
            email,
            password,
            gender
        }

        await axios.post(dataUrl, data).then(res => {
            console.log(res);
        })
        dispatch({
            type: ADD__DATA,
            payload: data,
        })

        console.log(data)
    }




    const handelSubmit = (e) => {
        e.preventDefault();
        if (firstName === '' || lastName === '' || email === '' || password === '' || gender === '') {
            toast(`Please Enter All The Field's`, {
                type: 'error',
                position: "top-left",
            })
        } else {
            addData();
            toast(`Data added successfully`, {
                type: 'success',
                position: "top-left",
            })
            setFirstName('');
            setlastName('');
            setEmail('');
            setPassword('');
            setGender('');
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
