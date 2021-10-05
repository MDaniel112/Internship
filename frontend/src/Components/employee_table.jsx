import React, { useState } from "react";
import {Table, Button, Modal} from "react-bootstrap";
import EmployeeForm from "./employee_form";
import EmployeesList from "./employee_list";

function EmployeeModal() {
    const [show, setShow] = useState(false);
  
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  
    return (
      <>
        <Button variant="primary" onClick={handleShow}>
          Add employee
        </Button>
  
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Add Employee</Modal.Title>
          </Modal.Header>
          <Modal.Body><EmployeeForm /></Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }

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