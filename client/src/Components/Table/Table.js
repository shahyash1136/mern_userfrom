import React, { useContext } from 'react';
import { Table, Spinner } from "reactstrap";
import { DataContext } from "../../Context/DataContext";
import { FaEdit, FaRegTrashAlt } from "react-icons/fa";

const TableData = () => {

    const { userData } = useContext(DataContext);
    const markup = userData.data === undefined ? <tr ><td colSpan="6" style={{ width: '100%', textAlign: 'center' }}><Spinner /></td></tr> : userData.data.formData.map(el => {
        return <tr key={el._id}>
            <td style={{ width: '16.66%', textAlign: 'center' }}>{el.firstName}</td>
            <td style={{ width: '16.66%', textAlign: 'center' }}>{el.lastName}</td>
            <td style={{ width: '16.66%', textAlign: 'center' }}>{el.email}</td>
            <td style={{ width: '16.66%', textAlign: 'center' }}>{el.password}</td>
            <td style={{ width: '16.66%', textAlign: 'center' }}>{el.gender}</td>
            <td style={{ width: '16.66%', textAlign: 'center' }}>
                <span style={{ marginRight: "10px" }}>
                    <FaEdit />
                </span>
                <span>
                    <FaRegTrashAlt />
                </span>
            </td>

        </tr>
    })


    return (
        <Table striped>
            <thead>
                <tr>
                    <th style={{ width: '16.66%', textAlign: 'center' }}>First Name</th>
                    <th style={{ width: '16.66%', textAlign: 'center' }}>Last Name</th>
                    <th style={{ width: '16.66%', textAlign: 'center' }}>Email</th>
                    <th style={{ width: '16.66%', textAlign: 'center' }}>Password</th>
                    <th style={{ width: '16.66%', textAlign: 'center' }}>Gender</th>
                    <th style={{ width: '16.66%', textAlign: 'center' }}></th>
                </tr>
            </thead>
            <tbody>
                {markup}
            </tbody>
        </Table>
    )
}

export default TableData;