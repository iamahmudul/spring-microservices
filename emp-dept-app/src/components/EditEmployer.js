import React, { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import EmployerService from '../services/EmployerService';
import EmployerForm from './EmployerForm';

const EditEmployer = () => {
    const history = useHistory();
    const { id } = useParams();
    const [employer, setEmployer] = useState({});
    
    useEffect(() => {
        console.log(id);
        EmployerService.getEmployerById(id).then((res) => {
            setEmployer(res.data);
        });
    }, []);

    const handleOnSubmit = (employer) => {
        EmployerService.editEmployer(employer, id).then((response) => {
            history.push("/employers");
        });
    };

    return (
        <React.Fragment>
            <EmployerForm handleOnSubmit={handleOnSubmit} employer={employer} />
        </React.Fragment>
    );
};

export default EditEmployer;