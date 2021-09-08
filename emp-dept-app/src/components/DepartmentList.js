import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { NavLink, useHistory } from "react-router-dom";
import DepartmentService from '../services/DepartmentService';

const DepartmentList =() => {
    const [departmentList, setDepartmentList] = useState([]);
    const history = useHistory();
    
    useEffect(() => {
        DepartmentService.getDepartmentList().then((res) => {
            setDepartmentList(res.data);
        });
    }, []);
    
    const addDepartment = () => {
        history.push('/department/add');
    }
    
    const editDepartment = (id) => {
        history.push(`/department/edit/${id}`);
    }

    const deleteDepartment = (id) => {
        DepartmentService.deleteDepartment(id).then(res => {
            setDepartmentList(departmentList.filter(department => department.id !== id));
        })
    }
    return (
        <Container className="mt-4">
            <h2>Departments</h2>
            <span>
                <NavLink to="/department/add" className="link" exact>Add Department</NavLink>
            </span>
            <div className="mt-2">
                <table className="table">
                    <thead>
                        <tr>
                            <th>Actions</th>
                            <th>Name</th>
                            <th>Active</th>
                        </tr>
                    </thead>
                    <tbody>
                        {departmentList.map((department, key) => (
                            <tr key={key}>
                                <td>
                                    <button onClick={ () => editDepartment(department.id) } className="btn btn-primary btn-sm">Edit</button>
                                    <button onClick={ () => deleteDepartment(department.id) } className="btn btn-primary btn-sm ml-1">Delete</button>
                                </td>
                                <td>{department.name}</td>
                                <td>{department.active ? 'Active' : 'Disabled'}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </Container>
    );
}

export default DepartmentList;