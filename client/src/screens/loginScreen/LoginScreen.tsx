import { useEffect, useState } from 'react';
import { Button, Col, Form, Row } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import FormContainer from '../../components/formContainer/FormContainer';
import Message from '../../components/message/Message';
import { RootState } from '../../redux/store';
import { login } from '../../redux/user/userActions';

const LoginScreen = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const location = useLocation();
    const navigate = useNavigate();

    const dispatch = useDispatch();

    const user = useSelector((state: RootState) => state.user);
    const { loading, error, userInfo } = user;

    const redirect = location.search ? `/${location.search.split('=')[1]}` : '/';
    console.log(location.search);
    console.log(redirect);

    useEffect(() => {
        if (userInfo) {
            navigate(`${redirect}`);
        }
    }, [navigate, userInfo, redirect]);

    const submitHandler = (e: any) => {
        e.preventDefault();

        dispatch(login(email, password));
    };

    return (
        <FormContainer>
            <h1>Sign In</h1>
            {error && <Message variant="danger">{error}</Message>}
            {loading && loading}
            <Form onSubmit={submitHandler}>
                <Form.Group controlId="email">
                    <Form.Label>Email Address</Form.Label>
                    <Form.Control
                        type="email"
                        placeholder="Enter email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    ></Form.Control>
                </Form.Group>
                <Form.Group className="py-3" controlId="password">
                    <Form.Label>Password Address</Form.Label>
                    <Form.Control
                        type="password"
                        placeholder="Enter password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    ></Form.Control>
                </Form.Group>

                <Button className="my-3 btn-outline-primary" type="submit" variant="primary">
                    Sign In
                </Button>
            </Form>

            <Row className="py-3">
                <Col>
                    New Customer? <Link to={redirect ? `/register?redirect=${redirect}` : '/register'}>Register</Link>
                </Col>
            </Row>
        </FormContainer>
    );
};

export default LoginScreen;
