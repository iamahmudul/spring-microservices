import React, { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import DepartmentService from '../services/DepartmentService';
import DepartmentForm from './DepartmentForm';

const EditDepartment = () => {
    const history = useHistory();
    const { id } = useParams();
    const [department, setDepartment] = useState({});
    
    useEffect(() => {
        console.log(id);
        DepartmentService.getDepartmentById(id).then((res) => {
            setDepartment(res.data);
        });
    }, []);

    const handleOnSubmit = (department) => {
        DepartmentService.editDepartment(department, id).then((response) => {
            history.push("/departments");
        });
    };

    return (
        <React.Fragment>
            <DepartmentForm handleOnSubmit={handleOnSubmit} department={department} />
        </React.Fragment>
    );
};

export default EditDepartment;