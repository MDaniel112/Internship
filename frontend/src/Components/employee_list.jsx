import React, {Component} from 'react';
import Axios from 'axios';
import Button from 'react-bootstrap/Button';
import EditEmployeeModal from './edit_employee_modal';

import { connect } from 'react-redux';
import * as repositoryActions from '../actions/repositoryActions';


class EmployeesList extends Component {
    constructor(props) {
        super(props)
        this.state = {
            employees: []
        }
        this.edStade ={
            edEmployee: []
        }
    }

    // componentDidMount(){
    //     Axios.get('http://localhost:5000')
    //         .then(response => {
    //             console.log(response)
    //             this.setState({employees: response.data})
    //         })
    //         .catch(error => {
    //             console.log(error);
    //         })
    // }

    componentDidMount(){
        // this.setState = getData("http://localhost:5000/", this.props);
        let url = 'http://localhost:5000/';
        this.props.onGetData(url, { ...this.props });
    }

    // deleteEmployee(id){
    //     Axios.delete("http://localhost:5000/" + id)
    //         .then(function (response) {
    //             console.log(response);
    //             window.location.reload();
    //         })
    //         .catch(function (error) {
    //             console.log(error);
    //         })
    // }

    deleteEmployee(id){
        let url = 'http://localhost:5000/' + id;
        this.props.onDeleteData(url, { ...this.props });
        window.location.reload();
    }

    render() {
        // const {employees} = this.state
        // console.log(this.props.data)
        const employees = this.props.data
        // console.log(employees)
        
        return (
            <tbody>
                {
                    employees.length ? employees.map(employee => 
                    <tr key={employee.id}>
                        <td >{employee.id}</td>
                        <td >{employee.name}</td>
                        <td >{employee.adress}</td>
                        <td >{employee.email}</td>
                        <td >{employee.hire_date}</td>
                        <td >{employee.salary}</td>
                        <td >{employee.job_title}</td>
                        <td >{employee.project_id}</td>
                        <td><EditEmployeeModal e_employee={employee}/></td>
                        <td><Button onClick={() => this.deleteEmployee(employee.id)}>Delete</Button></td>
                    </tr>
                    ) : null
                }
            </tbody>
        )
    }
}

const mapStateToProps = (state) => {     
    return {  
       data: state.data     
    } 
}
const mapDispatchToProps = (dispatch) => {
     return {
         onGetData: (url, props) => dispatch(repositoryActions.getData(url, props)),
         onDeleteData: (url, props) => dispatch(repositoryActions.deleteData(url, props))      
    } 
} 
export default connect(mapStateToProps, mapDispatchToProps)(EmployeesList);

// export default EmployeesList;