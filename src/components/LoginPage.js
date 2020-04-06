import React from 'react';
import { Form, Button, Card } from 'react-bootstrap';
import NavBar from "./NavBar";

export default class LoginPage extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
            <NavBar />
            <div className="cardDiv">
        <Card style={{marginTop: 50, marginBottom: 50, width: 400 }} className="loginCard" bg="dark" text="light" border="info">
            <Card.Body>
                <Card.Title>Sign in</Card.Title>
                <Form>
                    <Form.Group controlId="username">
                        <Form.Label>Username: </Form.Label>
                        <Form.Control type="username" placeholder="Enter username" />
                        {/* <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                        </Form.Text> */}
                    </Form.Group>

                    <Form.Group controlId="password">
                        <Form.Label>Password: </Form.Label>
                        <Form.Control type="password" placeholder="Enter password" />
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