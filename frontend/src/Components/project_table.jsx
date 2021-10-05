import React, {useState} from "react";
import {Table, Button, Modal} from "react-bootstrap";
import ProjectForm from "./project_form";
import ProjectsList from "./project_list";


function ProjectModal() {
    const [show, setShow] = useState(false);
  
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  
    return (
      <>
        <Button variant="primary" onClick={handleShow}>
          Add project
        </Button>
  
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Add Employee</Modal.Title>
          </Modal.Header>
          <Modal.Body><ProjectForm /></Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
}

function TabelProjects() {

    return(
        <div>
            <ProjectModal />
            <Table striped bordered hover>
                <thead>
                    <tr>
                    <th>Id</th>
                    <th>Project Name</th>
                    <th>Start Date</th>
                    <th>Planned End Date</th>
                    <th>Description</th>
                    <th>Project Code</th>
                    <th>Edit</th>
                    <th>Delete</th>
                    </tr>
                </thead>
                <ProjectsList />
            </Table>
        </div>
    );
}

export default TabelProjects;