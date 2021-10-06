import React from "react";
import {Table} from "react-bootstrap";
import EmployeesList from "./employee_list";
import EmployeeModal from "./employee_modal";

function TabelEmployees() {

    return(
        <div>
            <EmployeeModal />
            <Table striped bordered hover>
                <thead>
                    <tr>
                    <th>Id</th>
                    <th>Name</th>
                    <th>Adress</th>
                    <th>Email</th>
                    <th>Hire Date</th>
                    <th>Salary</th>
                    <th>Job Title</th>
                    <th>Project Id</th>
                    <th>Edit</th>
                    <th>Delete</th>
                    </tr>
                </thead>
                <EmployeesList />
                
            </Table>
        </div>
    );
}

export default TabelEmployees;