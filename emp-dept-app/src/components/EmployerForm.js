import React, { useState } from 'react';
import { Form, Button, Container } from 'react-bootstrap';

const EmployerForm = (props) => {
    const [employer, setEmployer] = useState({
        name: props.employer ? props.employer.name : '',
        active: props.active ? props.employer.active : false
    });

    const [errorMsg, setErrorMsg] = useState('');
    const {name, active} = employer;

    const handleOnSubmit = (event) => {
        event.preventDefault();
        const values = [name, active];
        let errorMsg = '';

        const allFieldsField = values.every((field) => {
            const value = `${field}`.trim();
            return value !== '' && value !== null;
        })

        if (allFieldsField) {
            const employer = {name, active};
            props.handleOnSubmit(employer);
        } else {
            errorMsg = 'Please fill out all the fields';
        }
        setErrorMsg(errorMsg);
    }

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        switch (name) {
            case 'name':
                if (value === '' || value === null) {
                    setEmployer((prevState) => ({
                        ...prevState,
                        [name]: value
                    }));
                }
                break;
            default:
                setEmployer((prevState) => ({
                    ...prevState,
                    [name]: value
                }));
        }
    }

    return (
        <Container className="mt-4">
            <h2>Employer Form</h2>
            {errorMsg && <p className="errorMsg">{errorMsg}</p>}
            <Form onSubmit={handleOnSubmit}>
                <Form.Group className="mb-3" controlId="name">
                    <Form.Label>Name</Form.Label>
                    <Form.Control
                        type="text"
                        name="name"
                        value="{name}"
                        placeholder="Ente employer name"
                        onChange={handleInputChange}></Form.Control>
                </Form.Group>
                <Button
                    variant="primary"
                    type="submit"
                    className="submit-btn">Submit</Button>
            </Form>
        </Container>
    );
}

export default EmployerForm;