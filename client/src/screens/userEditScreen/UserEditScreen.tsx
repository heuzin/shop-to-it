import { useEffect, useState } from 'react';
import { Button, Col, Form, Row } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useLocation, useNavigate, useParams } from 'react-router-dom';
import FormContainer from '../../components/formContainer/FormContainer';
import { Loader } from '../../components/loader/Loader';
import Message from '../../components/message/Message';
import { RootState } from '../../redux/store';
import { getUserDetails, register } from '../../redux/user/userActions';

const UserEditScreen = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [isAdmin, setIsAdmin] = useState(false);

    const location = useLocation();
    const navigate = useNavigate();
    const params = useParams();
    const userId = params.id;

    const dispatch = useDispatch();

    const userDetails = useSelector((state: RootState) => state.userDetails);
    const { loading, error, user } = userDetails;

    useEffect(() => {
        if (!user?.name || user?._id !== userId) {
            dispatch(getUserDetails(userId!));
        } else {
            setName(user.name);
            setEmail(user.email);
            setIsAdmin(user.isAdmin);
        }
    }, [dispatch, user, userId]);

    const submitHandler = (e: any) => {
        e.preventDefault();
    };

    return (
        <>
            <Link to="/admin/userlist" className="btn btn-light my3">
                Go Back
            </Link>
            <FormContainer>
                <h1>Edit User</h1>
                {loading ? (
                    <Loader />
                ) : error ? (
                    <Message variant="danger">{error}</Message>
                ) : (
                    <Form onSubmit={submitHandler}>
                        <Form.Group controlId="name">
                            <Form.Label>Name</Form.Label>
                            <Form.Control
                                type="name"
                                placeholder="Enter name"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                            ></Form.Control>
                        </Form.Group>
                        <Form.Group className="pt-2" controlId="email">
                            <Form.Label>Email Address</Form.Label>
                            <Form.Control
                                type="email"
                                placeholder="Enter email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            ></Form.Control>
                        </Form.Group>
                        <Form.Group className="pt-2" controlId="isadmin">
                            <Form.Check
                                type="checkbox"
                                label="Is Admin"
                                checked={isAdmin}
                                onChange={(e) => setIsAdmin(e.target.checked)}
                            ></Form.Check>
                        </Form.Group>
                        <Button className="mt-3 btn-outline-primary" type="submit" variant="primary">
                            Update
                        </Button>
                    </Form>
                )}
            </FormContainer>
        </>
    );
};

export default UserEditScreen;
