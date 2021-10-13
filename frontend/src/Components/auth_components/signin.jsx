import react from 'react';
import {Row, Col} from 'react-bootstrap';
import SignInForm from './signin_form';

function SignUp(){
    return (
        <Row>
            <Col></Col>
            <Col>
                <SignInForm />
            </Col>
            <Col></Col>
        </Row>
    );
}

export default SignUp;