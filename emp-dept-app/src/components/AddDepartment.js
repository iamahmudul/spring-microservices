import React from 'react';
import { useHistory } from 'react-router-dom';
import DepartmentService from '../services/DepartmentService';
import DepartmentForm from './DepartmentForm';

const AddDepartment = () => {
    const history = useHistory();
    const handleOnSubmit = (department) => {
        DepartmentService.addDepartment(department).then((response) => {
            history.push("/departments");
        });
    };

    return (
        <React.Fragment>
            <DepartmentForm handleOnSubmit={handleOnSubmit} />
        </React.Fragment>
    );
};

export default AddDepartment;