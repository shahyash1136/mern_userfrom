import React from 'react';
import { Container, Row, Col } from "reactstrap";
import FromBox from '../Components/Form/FormBox';
import TableData from '../Components/Table/Table';

const Home = () => {
    return (
        <Container fluid>
            <Row>
                <Col xs="4">
                    <FromBox />
                </Col>
                <Col xs="8">
                    <TableData />
                </Col>
            </Row>

        </Container>
    )
}

export default Home;