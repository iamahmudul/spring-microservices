import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Header from '../components/Header';
import AddDepartment from '../components/AddDepartment';
import DepartmentList from '../components/DepartmentList';
import EmployerList from '../components/EmployerList';
import AddEmployer from '../components/AddEmployer';
import EditDepartment from '../components/EditDepartment';

const AppRouter =() => {
    return (
        <BrowserRouter>
            <div>
                <Header/>
                <div className="main-content">
                    <Switch>
                        <Route
                            component={DepartmentList}
                            path="/departments"
                            exact={true}
                        />
                        <Route component={AddDepartment} path="/department/add" exact={true} />
                        <Route
                            render={(props) => (
                                <EditDepartment {...props} />
                            )}
                            path="/department/edit/:id"
                        />

                        <Route component={EmployerList} path="/employers" exact={true} />
                        <Route component={AddEmployer} path="/employer/add" exact={true} />
                    </Switch>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default AppRouter;