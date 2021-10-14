import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button'
import FormData from 'form-data';
// import { Link } from "react-router-dom";

import { connect } from 'react-redux';
import * as repositoryActions from '../../actions/repositoryActions';


function SignUpForm(props) {
    const [validated, setValidated] = useState(false);

    const handleSubmit = (event) => {
        const form = event.currentTarget;
        if (form.checkValidity() === false || (!event.target.admin_chk.checked && !event.target.user_chk.checked)) {
        event.preventDefault();
        event.stopPropagation();
        if (!event.target.admin_chk.checked && !event.target.user_chk.checked){
            alert("Alegeti cel putin un rol!");
        }
        }
        else {
            event.preventDefault();
            let bodyFormData = new FormData();
            bodyFormData.append('username', event.target.username.value);
            bodyFormData.append('email', event.target.email.value);
            bodyFormData.append('password', event.target.password.value);
            var roles = [];
            if(event.target.admin_chk.checked) roles.push(event.target.admin_chk.value);
            if(event.target.user_chk.checked) roles.push(event.target.user_chk.value);
            bodyFormData.append('roles[]', JSON.stringify(roles));
            // for(let i = 0; i < roles.length; i++) {
            //     bodyFormData.append("roles[]", roles[i]);
            // }

            var object = {};
            bodyFormData.forEach((value, key) => object[key] = value);
            var json = JSON.stringify(object);
            console.log(json);
            
            let url = 'http://localhost:5000/auth/signup';
            props.onPostUserRegisterData(url, json, { ...props });
            
        }

        setValidated(true);
    };



    return(
        <Form noValidate validated={validated} onSubmit={handleSubmit}>
            <Form.Group className="mb-3">
                <Form.Label>Username</Form.Label>
                <Form.Control required type="text" placeholder="Enter username" name="username"/>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control required type="email" placeholder="Enter email" name="email"/>
            </Form.Group>
            <Form.Group className="mb-3">
                <Form.Label>Password</Form.Label>
                <Form.Control required type="password" placeholder="Enter Password" name="password"/>
            </Form.Group>
            <Form.Group className="mb-3">
                <Form.Label>Roles</Form.Label>
                <br/>
                <label><input type="checkbox" name="admin_chk" value="admin"/>Admin</label>
                <br/>
                <label><input type="checkbox" name="user_chk" value="user"/>User</label>
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
         onPostUserRegisterData: (url, obj ,props) => dispatch(repositoryActions.postUserRegisterData(url, obj, props))
    } 
} 
export default connect(mapStateToProps, mapDispatchToProps)(SignUpForm);