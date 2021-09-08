import axios from 'axios';
import { DEPT_API_URL } from '../constants/APIConstant';

class DepartmentService {
    getDepartmentList() {
        return axios.get(DEPT_API_URL);
    }

    getDepartmentById(departmentId){
        return axios.get(DEPT_API_URL + '/' + departmentId);
    }

    addDepartment(department) {
        return axios.post(DEPT_API_URL, department);
    }

    editDepartment(department, departmentId) {
        return axios.put(DEPT_API_URL + '/' + departmentId, department);
    }

    deleteDepartment(departmentId) {
        return axios.delete(DEPT_API_URL + '/' + departmentId);
    }
}

export default new DepartmentService();