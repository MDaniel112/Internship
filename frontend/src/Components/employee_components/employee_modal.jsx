import React, { useState } from "react";
import {Button, Modal} from "react-bootstrap";
import EmployeeForm from "./employee_form";

function EmployeeModal() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    let enabled = false;

    if(sessionStorage.getItem('roles').search("ROLE_ADMIN") === -1) {
      enabled = true;
    }
  
    return (
      <>
        <Button variant="primary" onClick={handleShow} disabled={enabled}>
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

export default EmployeeModal;