import React from 'react';
import { Form, Button, Card } from 'react-bootstrap';
import NavBar from "./NavBar";

export default class FighterAppPage extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <NavBar />
                <div className="cardDiv">
            <Card style={{marginTop: 50, marginBottom: 50, width: 400 }} className="fighterAppCard" bg="dark" text="light" border="info">
                <Card.Body>
                    <Card.Title>Enter fighter information here</Card.Title>
                    <Form>
                        <Form.Group controlId="formFirstName">
                            <Form.Label>First Name: </Form.Label>
                            <Form.Control type="text" placeholder="Enter first name" />
                            {/* <Form.Text className="text-muted">
                            We'll never share your email with anyone else.
                            </Form.Text> */}
                        </Form.Group>

                        <Form.Group controlId="formLastName">
                            <Form.Label>Last Name: </Form.Label>
                            <Form.Control type="text" placeholder="Enter last name" />
                        </Form.Group>

                        <Form.Group controlId="formHeight">
                            <Form.Label>Height: </Form.Label>
                            <Form.Control type="number" placeholder="Enter height" />
                        </Form.Group>

                        <Form.Group controlId="formWeight">
                            <Form.Label>Weight: </Form.Label>
                            <Form.Control type="number" placeholder="Enter weight" />
                        </Form.Group>

                        <Button variant="primary" type="submit">
                            Submit
                        </Button>
                    </Form>
                </Card.Body>
            </Card>
            </div>
            </div>
        )
    }
}