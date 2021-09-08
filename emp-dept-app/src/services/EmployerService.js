import axios from 'axios';
import { EMP_API_URL } from '../constants/APIConstant';

class EmployerService {
    getEmployerList() {
        return axios.get(EMP_API_URL);
    }

    getEmployerById(employerId){
        return axios.get(EMP_API_URL + '/' + employerId);
    }

    addEmployer(employer) {
        return axios.post(EMP_API_URL, employer);
    }

    editEmployer(employer, employerId) {
        return axios.put(EMP_API_URL + '/' + employerId, employer);
    }

    deleteEmployer(employerId) {
        return axios.delete(EMP_API_URL + '/' + employerId);
    }
}

export default new EmployerService();