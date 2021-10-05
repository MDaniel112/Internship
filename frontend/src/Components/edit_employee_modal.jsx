import React, {Component, useState} from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal'
import EditEmployeeForm from './edit_employee_form';

function EditEmployeeModal(props) {
    const [show, setShow] = useState(false);
  
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    console.log(props);
  
    return (
      <>
        <Button variant="primary" onClick={handleShow}>
          Edit
        </Button>
  
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Edit Employee</Modal.Title>
          </Modal.Header>
          <Modal.Body><EditEmployeeForm
            id={props.e_employee.id}
            name={props.e_employee.name}
            adress={props.e_employee.adress}
            email={props.e_employee.email}
            hire_date={props.e_employee.hire_date}
            salary={props.e_employee.salary}
            job_title={props.e_employee.job_title}
            project_id={props.e_employee.project_id}
         /></Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }

  export default EditEmployeeModal;