import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import DepartmentService from '../services/DepartmentService';
import EmployerService from '../services/EmployerService';
import EmployerForm from './EmployerForm';

const AddEmployer = () => {
    const history = useHistory();
    const [departmentList, setDepartmentList] = useState([]);
    useEffect(() => {
        DepartmentService.getDepartmentList().then((res) => {
            setDepartmentList(res.data);
        })
    }, [])
    
    const handleOnSubmit = (employer) => {
        EmployerService.addEmployer(employer).then((res) => {
            history.push("/employers");
        });
    };

    return (
        <React.Fragment>
            <EmployerForm handleOnSubmit={handleOnSubmit} departmentList={departmentList} />
        </React.Fragment>
    );
};

export default AddEmployer;