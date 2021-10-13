import React, { useState } from 'react';
import Axios from 'axios';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button'
import FormData from 'form-data';

import { connect } from 'react-redux';
import * as repositoryActions from '../../actions/repositoryActions';

function SignInForm(props) {
    const [validated, setValidated] = useState(false);

    const handleSubmit = (event) => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
        event.preventDefault();
        event.stopPropagation();
        }
        else {
            event.preventDefault();
            let bodyFormData = new FormData();
            bodyFormData.append('username', event.target.username.value);
            bodyFormData.append('password', event.target.password.value);

            var object = {};
            bodyFormData.forEach((value, key) => object[key] = value);
            var json = JSON.stringify(object);
            console.log(json);
            
            Axios({
                method: "post",
                url: "http://localhost:5000/auth/signin",
                data: json,
                headers: {"Content-type": "application/json"},
            })
                .then(response => console.log(response.data.accessToken))
                .catch(error => alert('Username sau parola invalide!'));

            // let url = 'http://localhost:5000/auth/signin';
            // props.onPostData(url, json, { ...props });
        }

        setValidated(true);
    };



    return(
        <Form noValidate validated={validated} onSubmit={handleSubmit}>
            <Form.Group className="mb-3">
                <Form.Label>Username</Form.Label>
                <Form.Control required type="text" placeholder="Enter username" name="username"/>
            </Form.Group>
            <Form.Group className="mb-3">
                <Form.Label>Password</Form.Label>
                <Form.Control required type="password" placeholder="Enter Password" name="password"/>
            </Form.Group>
            <Button variant="primary" type="submit">
                Submit
            </Button>
        </Form>
    );
}

const mapStateToProps = (state) => {     
    return {  
       data: state.data     
    } 
}
const mapDispatchToProps = (dispatch) => {
     return {
         onPostData: (url, obj ,props) => dispatch(repositoryActions.postData(url, obj, props))
    } 
} 
export default connect(mapStateToProps, mapDispatchToProps)(SignInForm);