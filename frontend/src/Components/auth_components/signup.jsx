import react from 'react';
import {Row, Col} from 'react-bootstrap';
import SignUpForm from './signup_form';

function SignUp(){
    return (
        <Row>
            <Col></Col>
            <Col>
                <SignUpForm />
            </Col>
            <Col></Col>
        </Row>
    );
}

export default SignUp;