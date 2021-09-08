import React, { useState } from 'react';
import { Button, Container, Form } from 'react-bootstrap';

const EmployerForm = ({ employer = {}, handleOnSubmit, departmentList }) => {
    const [name, setName] = useState(employer.name || '');
    const [code, setCode] = useState(employer.code || '');
    const [dob, setDob] = useState(employer.dob || '');
    const [gender, setGender] = useState(employer.gender || '');
    const [mobile, setMobile] = useState(employer.mobile || '');
    const [deptId, setDeptId] = useState(employer.deptId || '');

    const [errorMsg, setErrorMsg] = useState('');

    const onSubmit = (event) => {
        event.preventDefault();
        const values = [name, code, dob, gender, mobile, deptId];
        let errorMsg = '';

        const allFieldsField = values.every((field) => {
            const value = `${field}`.trim();
            return value !== '' && value !== null;
        })

        if (allFieldsField) {
            const employer = {name, code, dob, gender, mobile, deptId};
            handleOnSubmit(employer);
        } else {
            errorMsg = 'Please fill out all the fields';
        }
        setErrorMsg(errorMsg);
    }
    
    return (
        <Container className="mt-4">
            <h2>Employer Form</h2>
            {errorMsg && <p className="errorMsg">{errorMsg}</p>}
            <Form onSubmit={onSubmit}>
                <Form.Group className="mb-3" controlId="name">
                    <Form.Label>Name</Form.Label>
                    <Form.Control
                        type="text"
                        name="name"
                        value={name}
                        placeholder="Enter employer name"
                        onChange={(e) => setName(e.target.value)}></Form.Control>
                </Form.Group>
                <Form.Group className="mb-3" controlId="code">
                    <Form.Label>Code</Form.Label>
                    <Form.Control
                        type="text"
                        name="code"
                        value={code}
                        placeholder="Enter employer code"
                        onChange={(e) => setCode(e.target.value)}></Form.Control>
                </Form.Group>
                <Form.Group className="mb-3" controlId="dob">
                    <Form.Label>Date of Birth</Form.Label>
                    <Form.Control
                        type="date"
                        name="dob"
                        min="1997-01-01"
                        max="2050-12-31"
                        value={dob}
                        placeholder="Enter employer date of birth"
                        onChange={(e) => setDob(e.target.value)}></Form.Control>
                </Form.Group>
                <Form.Group className="mb-3" controlId="gender">
                    <Form.Label>Gender</Form.Label>
                    <Form.Control
                        type="text"
                        name="gender"
                        value={gender}
                        placeholder="Enter employer gender"
                        onChange={(e) => setGender(e.target.value)}></Form.Control>
                </Form.Group>
                <Form.Group className="mb-3" controlId="mobile">
                    <Form.Label>Mobile</Form.Label>
                    <Form.Control
                        type="text"
                        name="mobile"
                        value={mobile}
                        placeholder="Enter employer mobile"
                        onChange={(e) => setMobile(e.target.value)}></Form.Control>
                </Form.Group>
                <Form.Group className="mb-3" controlId="deptId">
                    <Form.Label>Department</Form.Label>
                    <Form.Control
                        type="text"
                        name="deptId"
                        value={deptId}
                        placeholder="Enter employer department"
                        onChange={(e) => setDeptId(e.target.value)}></Form.Control>
                    {/* <Form.Select
                        name="deptId"
                        onChange={(e) => setDeptId(e.target.value)}>
                        <option>Select Department</option>
                        {departmentList.map((department, key) => (
                            <option key={key} value={department.id}>{department.name}</option>
                        ))}
                    </Form.Select> */}
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