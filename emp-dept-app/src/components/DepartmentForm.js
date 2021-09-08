import React, { useState } from 'react';
import { Form, Button, Container } from 'react-bootstrap';

const DepartmentForm = ({ department = {}, handleOnSubmit }) => {
    const { name: departmentName = '', active: departmentActive = department.active === true } = department;
    const [name, setName] = useState(departmentName);
    const [active, setActive] = useState(departmentActive);

    const [errorMsg, setErrorMsg] = useState('');

    const onSubmit = (event) => {
        event.preventDefault();
        const values = [name, active];
        let errorMsg = '';

        const allFieldsField = values.every((field) => {
            const value = `${field}`.trim();
            return value !== '' && value !== null;
        })

        if (allFieldsField) {
            const department = {name, active};
            handleOnSubmit(department);
        } else {
            errorMsg = 'Please fill out all the fields';
        }
        setErrorMsg(errorMsg);
    }
    console.log(':::::::::: ', name, active);
    return (
        <Container className="mt-4">
            <h2>Department Form</h2>
            {errorMsg && <p className="errorMsg">{errorMsg}</p>}
            <Form onSubmit={onSubmit}>
                <Form.Group className="mb-3" controlId="name">
                    <Form.Label>Name</Form.Label>
                    <Form.Control
                        type="text"
                        name="name"
                        value={name}
                        placeholder="Ente department name"
                        onChange={(e) => setName(e.target.value)}></Form.Control>
                </Form.Group>
                <Form.Group controlId="active">
                    <Form.Check
                        label="Active"
                        name="active"
                        value={active}
                        checked={active}
                        onChange={(e) => setActive(!active)}></Form.Check>
                </Form.Group>
                <Button
                    variant="primary"
                    type="submit"
                    className="submit-btn">Submit</Button>
            </Form>
        </Container>
    );
}

export default DepartmentForm;