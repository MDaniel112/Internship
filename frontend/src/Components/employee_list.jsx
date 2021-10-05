import React, {Component, useState} from 'react';
import Axios from 'axios';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal'
import EditEmployeeForm from './edit_employee_form';
import EditEmployeeModal from './edit_employee_modal';



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

    componentDidMount(){
        Axios.get('http://localhost:5000')
            .then(response => {
                console.log(response)
                this.setState({employees: response.data})
            })
            .catch(error => {
                console.log(error);
            })
    }

    deleteEmployee(id){
        Axios.delete("http://localhost:5000/" + id)
            .then(function (response) {
                console.log(response);
                window.location.reload();
            })
            .catch(function (error) {
                console.log(error);
            })
    }

    // editEmployee(name){
    //     Axios.get('http://localhost:5000/employee/'+ name)
    //         .then(response => {
    //             console.log(response)
    //             this.setState({edEmployee: response.data})
    //         })
    //         .catch(error => {
    //             console.log(error);
    //         })
    // }

    render() {
        const {employees} = this.state
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
                        {/* <td><Button id={employee.id} onClick={() => this.editEmployee(employee.name)}>Edit</Button></td> */}
                        <td><EditEmployeeModal e_employee={employee}/></td>
                        <td><Button onClick={() => this.deleteEmployee(employee.id)}>Delete</Button></td>
                    </tr>
                    ) : null
                }
            </tbody>
        )
    }
}

export default EmployeesList;