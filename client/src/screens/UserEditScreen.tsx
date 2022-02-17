import { useEffect, useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate, useParams } from 'react-router-dom';
import FormContainer from '../components/FormContainer';
import { Loader } from '../components/Loader';
import Message from '../components/Message';
import { RootState } from '../redux/store';
import { getUserDetails, updateUser } from '../redux/user/userActions';
import { USER_UPDATE_RESET } from '../redux/user/userTypes';

const UserEditScreen = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [isAdmin, setIsAdmin] = useState(false);

    const navigate = useNavigate();
    const params = useParams();
    const userId = params.id;

    const dispatch = useDispatch();

    const userDetails = useSelector((state: RootState) => state.userDetails);
    const { loading, error, user } = userDetails;

    const userUpdate = useSelector((state: RootState) => state.userUpdate);
    const { loading: loadingUpdate, error: errorUpdate, success: successUpdate } = userUpdate;

    useEffect(() => {
        if (successUpdate) {
            dispatch({ type: USER_UPDATE_RESET });
            navigate('/admin/userlist');
        } else {
            if (!user?.name || user?._id !== userId) {
                dispatch(getUserDetails(userId!));
            } else {
                setName(user.name);
                setEmail(user.email);
                setIsAdmin(user.isAdmin);
            }
        }
    }, [dispatch, navigate, user, userId, successUpdate]);

    const submitHandler = (e: any) => {
        e.preventDefault();

        dispatch(updateUser({ _id: userId!, name, email, isAdmin }));
    };

    return (
        <>
            <Link to="/admin/userlist" className="btn btn-light my3">
                Go Back
            </Link>
            <FormContainer>
                <h1>Edit User</h1>
                {loadingUpdate && <Loader />}
                {errorUpdate && <Message variant="danger">{errorUpdate}</Message>}
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
                        <Button className="mt-3" type="submit" variant="primary">
                            Update
                        </Button>
                    </Form>
                )}
            </FormContainer>
        </>
    );
};

export default UserEditScreen;
