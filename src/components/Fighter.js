import React from 'react';
import { Container, Row, Col, Table } from 'react-bootstrap';
import NavBar from './NavBar';

export default class Fighter extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            details: {}
        }
    }

    componentDidMount() {
        
    }

    render() {
        return (
            <div>
                <NavBar />
                <Container>
                <Row>
                    <Col xs={9}>
                        <Table striped>
                            <tbody>
                                <tr>
                                    <td>Name: </td>
                                    <td>{this.state.details.firstName + " " + this.state.details.lastName}</td>
                                </tr>
                                <tr>
                                    <td>Height (inches): </td>
                                    <td>{this.state.details.height}</td>
                                </tr>
                                <tr>
                                    <td>Weight (pounds): </td>
                                    <td>{this.state.details.weight}</td>
                                </tr>
                            </tbody>
                        </Table>
                    </Col>
                </Row>
                </Container>
            </div>
        )
    }
}