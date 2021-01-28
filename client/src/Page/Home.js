import React from 'react';
import { Container } from "reactstrap";
import FromBox from '../Components/Form/FormBox';
import TableData from '../Components/Table/Table';

const Home = () => {
    return (
        <Container>
            <FromBox />
            <TableData />

        </Container>
    )
}

export default Home;