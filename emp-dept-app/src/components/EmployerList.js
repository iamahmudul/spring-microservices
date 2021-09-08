import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { NavLink, useHistory } from "react-router-dom";
import EmployerService from "../services/EmployerService";

const EmployerList = () => {
    const [employerList, setEmployerList] = useState([]);
    const history = useHistory();

    useEffect(() => {
        EmployerService.getEmployerList().then((res) => {
            setEmployerList(res.data);
        })
    }, [])
    
    const editEmployer = (id) => {
        history.push(`/employer/edit/${id}`);
    }

    const deleteEmployer = (id) => {
        EmployerService.deleteEmployer(id).then(res => {
            setEmployerList(employerList.filter(employer => employer.id !== id));
        })
    }

    return (
        <Container className="mt-4">
            <h2>Employers</h2>
            <span>
                <NavLink to="/employer/add" className="link" exact>Add Employer</NavLink>
            </span>
            <div className="mt-2">
                <table className="table">
                    <thead>
                        <tr>
                            <th>Actions</th>
                            <th>Name</th>
                            <th>Code</th>
                            <th>Date of Birth</th>
                            <th>Gender</th>
                            <th>Mobile</th>
                            <th>Department</th>
                        </tr>
                    </thead>
                    <tbody>
                        {employerList.map((employer, key) => (
                            <tr key={key}>
                                <td>
                                    <button onClick={ () => editEmployer(employer.id) } className="btn btn-primary btn-sm">Edit</button>
                                    <button onClick={ () => deleteEmployer(employer.id) } className="btn btn-primary btn-sm ml-1">Delete</button>
                                </td>
                                <td>{employer.name}</td>
                                <td>{employer.code}</td>
                                <td>{employer.dob}</td>
                                <td>{employer.gender}</td>
                                <td>{employer.mobile}</td>
                                <td>{employer.deptId}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </Container>
    );
}

export default EmployerList;