import React, {useState} from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal'
import EditProjectForm from './edit_project_form';

function EditProjectModal(props) {
    const [show, setShow] = useState(false);
  
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    // console.log(props);
    let enabled = false;

    if(sessionStorage.getItem('roles').search("ROLE_ADMIN") === -1) {
      enabled = true;
    }
  
    return (
      <>
        <Button variant="primary" onClick={handleShow} disabled={enabled}>
          Edit
        </Button>
  
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Edit Project</Modal.Title>
          </Modal.Header>
          <Modal.Body><EditProjectForm
            id={props.e_project.id}
            project_name={props.e_project.project_name}
            start_date={props.e_project.start_date}
            planned_end_date={props.e_project.planned_end_date}
            description={props.e_project.description}
            project_code={props.e_project.project_code}
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

  export default EditProjectModal;