import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button'
import Axios from 'axios';
import FormData from 'form-data';

function ProjectForm() {
    const [validated, setValidated] = useState(false);

    const handleSubmit = (event) => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
        event.preventDefault();
        event.stopPropagation();
        }
        else {
            // event.preventDefault();
            let bodyFormData = new FormData();
            bodyFormData.append('project_name', event.target.project_name.value);
            bodyFormData.append('start_date', event.target.start_date.value);
            bodyFormData.append('planned_end_date', event.target.planned_end_date.value);
            bodyFormData.append('description', event.target.description.value);
            bodyFormData.append('project_code', event.target.project_code.value);

            var object = {};
            bodyFormData.forEach((value, key) => object[key] = value);
            var json = JSON.stringify(object);
            console.log(json);
            
            // var json = JSON.stringify(Object.fromEntries(bodyFormData));

            Axios({
                method: "post",
                url: "http://localhost:5000/projects",
                data: json,
                headers: {"Content-type": "application/json"},
            })
                .then(response => console.log(response))
                .catch(error => console.log(error));
            // Axios.post("http://localhost:5000",{bodyFormData}).then(response => console.log(response)).catch(error => console.log(error));
        }

        setValidated(true);
    };



    return(
        <Form noValidate validated={validated} onSubmit={handleSubmit}>
            <Form.Group className="mb-3">
                <Form.Label>Project Name</Form.Label>
                <Form.Control required type="text" placeholder="Enter Project Name" name="project_name"/>
            </Form.Group>
            <Form.Group className="mb-3">
                <Form.Label>Start Date</Form.Label>
                <Form.Control required type="date" placeholder="Enter Start Date" name="start_date"/>
            </Form.Group>
            <Form.Group className="mb-3">
                <Form.Label>Planned End Date</Form.Label>
                <Form.Control required type="date" placeholder="Enter End Date" name="planned_end_date"/>
            </Form.Group>
            <Form.Group className="mb-3">
                <Form.Label>Description</Form.Label>
                <Form.Control required type="text" placeholder="Enter Description" name="description"/>
            </Form.Group>
            <Form.Group className="mb-3">
                <Form.Label>Project Code</Form.Label>
                <Form.Control required type="text" placeholder="Enter Project Code" name="project_code"/>
            </Form.Group>
            <Button variant="primary" type="submit">
                Submit
            </Button>
        </Form>
    );
}

export default ProjectForm;