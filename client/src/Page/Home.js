import React, { useState } from 'react';
import { Container, Row, Col } from "reactstrap";
import FromBox from '../Components/Form/FormBox';
import TableData from '../Components/Table/Table';

const Home = () => {
    const [currentId, setCurrentId] = useState(0);
    return (
        <Container fluid>
            <Row>
                <Col xs="4">
                    <FromBox currentId={currentId} setCurrentId={setCurrentId} />
                </Col>
                <Col xs="8">
                    <TableData setCurrentId={setCurrentId} />
                </Col>
            </Row>

        </Container>
    )
}

export default Home;