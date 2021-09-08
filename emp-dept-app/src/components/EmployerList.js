import React from "react";
import { Container } from "react-bootstrap";
import { NavLink } from "react-router-dom";

const EmployerList = () => {
    return (
        <Container className="mt-4">
            <h2>Employers</h2>
            <span>
                <NavLink to="/employer/add" className="link" exact>Add Employer</NavLink>
            </span>
        </Container>
    );
}

export default EmployerList;