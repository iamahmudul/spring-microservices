import React from 'react';
import EmployerForm from './EmployerForm';

const AddEmployer = () => {
  const handleOnSubmit = (employer) => {
    console.log(employer);
  };

  return (
    <React.Fragment>
      <EmployerForm handleOnSubmit={handleOnSubmit} />
    </React.Fragment>
  );
};

export default AddEmployer;