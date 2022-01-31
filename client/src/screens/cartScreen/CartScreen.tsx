import React, { useEffect } from 'react';
import { Button, Card, Col, Form, Image, ListGroup, Row } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import Message from '../../components/message/Message';
import { addToCart, removeFromCart } from '../../redux/cart/cartActions';
import { RootState } from '../../redux/store';

const CartScreen = () => {
    const params = useParams();
    const location = useLocation();
    const navigate = useNavigate();

    const producstId = params.id;
    const qty = location.search ? Number(location.search.split('=')[1]) : 1;

    const dispatch = useDispatch();

    const cart = useSelector((state: RootState) => state.cart);
    const { cartItems } = cart;

    useEffect(() => {
        if (producstId) {
            dispatch(addToCart(producstId, qty));
        }
    }, [dispatch, producstId, qty]);

    const removeFromCartHandler = (id: string) => {
        dispatch(removeFromCart(id));
    };

    const checkoutHandler = () => {
        navigate('/login?redirect=shipping');
    };

    return (
        <Row>
            <Col md={8}>
                <h1>Shopping Cart</h1>
                {cartItems?.length === 0 ? (
                    <Message>
                        Your cart is empty <Link to="/">Go back</Link>
                    </Message>
                ) : (
                    <ListGroup variant="flush">
                        {cartItems?.map((item) => (
                            <ListGroup.Item key={item.product}>
                                <Row>
                                    <Col md={2}>
                                        <Image src={item.image} alt={item.name} fluid rounded />
                                    </Col>
                                    <Col md={3}>
                                        <Link to={`/product/${item.product}`}>{item.name}</Link>
                                    </Col>
                                    <Col md={2}>${item.price}</Col>
                                    <Col md={2}>
                                        <Form.Control
                                            as="select"
                                            value={item.qty}
                                            onChange={(e) => dispatch(addToCart(item.product, Number(e.target.value)))}
                                        >
                                            {Array.from(Array(item.countInStock).keys()).map((x) => (
                                                <option key={x + 1} value={x + 1}>
                                                    {x + 1}
                                                </option>
                                            ))}
                                        </Form.Control>
                                    </Col>
                                    <Col md={2}>
                                        <Button
                                            type="button"
                                            variant="light"
                                            onClick={() => removeFromCartHandler(item.product)}
                                        >
                                            <i className="fas fa-trash"></i>
                                        </Button>
                                    </Col>
                                </Row>
                            </ListGroup.Item>
                        ))}
                    </ListGroup>
                )}
            </Col>
            <Col md={4}>
                <Card>
                    <ListGroup variant="flush">
                        <ListGroup.Item>
                            <h2>Subtotal ({cartItems.reduce((acc, cur) => acc + cur.qty, 0)}) items</h2>$
                            {cartItems.reduce((acc, cur) => acc + cur.qty * cur.price, 0).toFixed(2)}
                        </ListGroup.Item>
                        <ListGroup.Item className="d-grid gap-2">
                            <Button
                                type="button"
                                className="btn btn-outline-primary"
                                disabled={cartItems.length === 0}
                                onClick={checkoutHandler}
                            >
                                Proceed To Checkout
                            </Button>
                        </ListGroup.Item>
                    </ListGroup>
                </Card>
            </Col>
        </Row>
    );
};

export default CartScreen;
