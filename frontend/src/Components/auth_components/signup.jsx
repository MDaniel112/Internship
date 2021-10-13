import {Row, Col} from 'react-bootstrap';
import SignUpForm from './signup_form';

function SignUp(){
    return (
        <Row>
            <Col></Col>
            <Col>
                <SignUpForm />
                <a href="/signin">Sign In</a>
            </Col>
            <Col></Col>
        </Row>
    );
}

export default SignUp;