import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button'
import Axios from 'axios';
import FormData from 'form-data';

function EditEmployeeForm(props) {
    const [validated, setValidated] = useState(false);
    console.log(props);

    const handleSubmit = (event) => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
        event.preventDefault();
        event.stopPropagation();
        }
        else {
            // event.preventDefault();
            let bodyFormData = new FormData();
            bodyFormData.append('name', event.target.name.value);
            bodyFormData.append('adress', event.target.adress.value);
            bodyFormData.append('email', event.target.email.value);
            bodyFormData.append('hire_date', event.target.hire_date.value);
            bodyFormData.append('salary', event.target.salary.value);
            bodyFormData.append('job_title', event.target.j_title.value);
            bodyFormData.append('project_id', event.target.p_id.value);

            var object = {};
            bodyFormData.forEach((value, key) => object[key] = value);
            var json = JSON.stringify(object);
            console.log(json);
            
            // var json = JSON.stringify(Object.fromEntries(bodyFormData));

            Axios({
                method: "put",
                url: "http://localhost:5000/" + props.id,
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
                <Form.Label>Name</Form.Label>
                <Form.Control required type="text" placeholder="Enter Name" name="name" defaultValue={props.name}/>
            </Form.Group>
            <Form.Group className="mb-3">
                <Form.Label>Adress</Form.Label>
                <Form.Control required type="text" placeholder="Enter Adress" name="adress" defaultValue={props.adress}/>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control required type="email" placeholder="Enter email" name="email" defaultValue={props.email}/>
            </Form.Group>
            <Form.Group className="mb-3">
                <Form.Label>Hire Date</Form.Label>
                <Form.Control required type="date" placeholder="Enter Hire Date" name="hire_date" defaultValue={props.hire_date}/>
            </Form.Group>
            <Form.Group className="mb-3">
                <Form.Label>Salary</Form.Label>
                <Form.Control required type="text" placeholder="Enter Salary" name="salary" defaultValue={props.salary}/>
            </Form.Group>
            <Form.Group className="mb-3">
                <Form.Label>Job Title</Form.Label>
                <Form.Control required type="text" placeholder="Enter Job Title" name="j_title" defaultValue={props.job_title}/>
            </Form.Group>
            <Form.Group className="mb-3">
                <Form.Label>Project id</Form.Label>
                <Form.Control required type="text" placeholder="Enter Project Id" name="p_id" defaultValue={props.project_id}/>
            </Form.Group>
            <Button variant="primary" type="submit">
                Submit
            </Button>
        </Form>
    );
}

export default EditEmployeeForm;