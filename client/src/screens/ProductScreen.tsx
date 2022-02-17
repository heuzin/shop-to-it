import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import { Row, Col, Image, ListGroup, Card, Button, Form } from 'react-bootstrap';
import Rating from '../components/Rating';
import { createProductReview, getProductDetails } from '../redux/product/productActions';
import { Loader } from '../components/Loader';
import Message from '../components/Message';
import { useNavigate } from 'react-router-dom';
import { RootState } from '../redux/store';
import { PRODUCT_CREATE_REVIEW_RESET } from '../redux/product/productTypes';
import Meta from '../components/Meta';

const ProductScreen = () => {
    const [qty, setQty] = useState(1);
    const [rating, setRating] = useState(0);
    const [comment, setComment] = useState('');

    const dispatch = useDispatch();
    const params = useParams();
    const navigate = useNavigate();

    const productId = params.id;

    const user = useSelector((state: RootState) => state.user);
    const { userInfo } = user;

    const productDetails = useSelector((state: RootState) => state.productDetails);
    const { loading, error, product } = productDetails;

    const productCreateReview = useSelector((state: RootState) => state.productCreateReview);
    const { error: errorCreateReview, success: successCreateReview } = productCreateReview;

    const id = params.id!;

    useEffect(() => {
        if (successCreateReview) {
            alert('Review Submitted!');
            setRating(0);
            setComment('');
            dispatch({ type: PRODUCT_CREATE_REVIEW_RESET });
        }
        dispatch(getProductDetails(id));
    }, [dispatch, id, successCreateReview]);

    const addToCartHandler = () => {
        navigate(`/cart/${params.id}?qty=${qty}`);
    };

    const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        dispatch(
            createProductReview(productId!, {
                rating,
                comment,
            }),
        );
    };

    return (
        <>
            <Link className="btn btn-primary my-3" to="/">
                Go Back
            </Link>
            {loading ? (
                <Loader />
            ) : error ? (
                <Message variant="danger">{error}</Message>
            ) : (
                <>
                    <Meta title={product?.name} />
                    <Row>
                        <Col md={6}>
                            <Image src={product?.image} alt={product?.name} fluid />
                        </Col>
                        <Col md={3}>
                            <ListGroup variant="flush">
                                <ListGroup.Item>
                                    <h3>{product?.name}</h3>
                                </ListGroup.Item>
                            </ListGroup>
                            <ListGroup.Item>
                                <Rating value={product ? product.rating : 0} text={`${product?.numReviews} reviews`} />
                            </ListGroup.Item>
                            <ListGroup.Item>Price: ${product?.price}</ListGroup.Item>
                            <ListGroup.Item>Description: {product?.description}</ListGroup.Item>
                        </Col>
                        <Col md={3}>
                            <Card>
                                <ListGroup variant="flush">
                                    <ListGroup.Item>
                                        <Row>
                                            <Col>Price:</Col>
                                            <Col>
                                                <strong>${product?.price}</strong>
                                            </Col>
                                        </Row>
                                    </ListGroup.Item>
                                </ListGroup>

                                <ListGroup variant="flush">
                                    <ListGroup.Item>
                                        <Row>
                                            <Col>Status:</Col>
                                            <Col>
                                                {product && product.countInStock > 0 ? 'In Stock' : 'Out of Stock'}
                                            </Col>
                                        </Row>
                                    </ListGroup.Item>

                                    {product && product.countInStock > 0 && (
                                        <ListGroup.Item>
                                            <Row>
                                                <Col>Qty</Col>
                                                <Col>
                                                    <Form.Control
                                                        as="select"
                                                        value={qty}
                                                        onChange={(e) => setQty(parseInt(e.target.value))}
                                                    >
                                                        {Array.from(Array(product.countInStock).keys()).map((x) => (
                                                            <option key={x + 1} value={x + 1}>
                                                                {x + 1}
                                                            </option>
                                                        ))}
                                                    </Form.Control>
                                                </Col>
                                            </Row>
                                        </ListGroup.Item>
                                    )}

                                    <ListGroup.Item className="d-grid gap-2">
                                        <Button
                                            onClick={addToCartHandler}
                                            className="btn"
                                            type="button"
                                            disabled={product! && product.countInStock === 0}
                                        >
                                            Add To Cart
                                        </Button>
                                    </ListGroup.Item>
                                </ListGroup>
                            </Card>
                        </Col>
                    </Row>
                    <Row>
                        <Col md={6}>
                            <h2>Reviews</h2>
                            {product?.reviews.length === 0 && <Message variant="primary">No Reviews</Message>}
                            <ListGroup variant="flush">
                                {product?.reviews.map((review) => (
                                    <ListGroup.Item key={review._id}>
                                        <strong>{review.name}</strong>
                                        <Rating text="" value={review.rating} />
                                        <p>{review.createdAt.toString().substring(0, 10)}</p>
                                        <p>{review.comment}</p>
                                    </ListGroup.Item>
                                ))}
                                <ListGroup.Item>
                                    <h2>Write a Customer Review</h2>
                                    {errorCreateReview && <Message variant="danger">{errorCreateReview}</Message>}
                                    {userInfo ? (
                                        <Form onSubmit={submitHandler}>
                                            <Form.Group controlId="rating">
                                                <Form.Label>Rating</Form.Label>
                                                <Form.Control
                                                    as="select"
                                                    value={rating}
                                                    onChange={(e) => setRating(Number(e.target.value))}
                                                >
                                                    <option value={''}>Select...</option>
                                                    <option value={1}>1 - Poor</option>
                                                    <option value={2}>2 - Fair</option>
                                                    <option value={3}>3 - Good</option>
                                                    <option value={4}>4 - Very Good</option>
                                                    <option value={5}>5 - Excellent</option>
                                                </Form.Control>
                                            </Form.Group>
                                            <Form.Group controlId="comment">
                                                <Form.Label>Comment</Form.Label>
                                                <Form.Control
                                                    as="textarea"
                                                    rows={3}
                                                    value={comment}
                                                    onChange={(e) => setComment(e.target.value)}
                                                ></Form.Control>
                                            </Form.Group>
                                            <Button type="submit" className="mt-3" variant="primary">
                                                Submit
                                            </Button>
                                        </Form>
                                    ) : (
                                        <Message variant="primary">
                                            Please <Link to="/login">sign in</Link> to write a review
                                        </Message>
                                    )}
                                </ListGroup.Item>
                            </ListGroup>
                        </Col>
                    </Row>
                </>
            )}
        </>
    );
};

export default ProductScreen;
