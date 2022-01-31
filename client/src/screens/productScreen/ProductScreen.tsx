import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import { Row, Col, Image, ListGroup, Card, Button, Form } from 'react-bootstrap';
import Rating from '../../components/rating/Rating';
import { getProductDetails } from '../../redux/productDetails/productDetailsActions';
import {
    selectAllProductDetails,
    selectProductDetailsIsLoadding,
    selectProducttDetailsError,
} from '../../redux/productDetails/productDetailsSelector';
import { Loader } from '../../components/loader/Loader';
import Message from '../../components/message/Message';
import { useNavigate } from 'react-router-dom';

const ProductScreen = () => {
    const [qty, setQty] = useState(1);
    const dispatch = useDispatch();
    const params = useParams();
    const navigate = useNavigate();

    const isProductDetailsLoading = useSelector(selectProductDetailsIsLoadding);
    const product = useSelector(selectAllProductDetails);
    const productDetailsError = useSelector(selectProducttDetailsError);

    const id = params.id!;

    useEffect(() => {
        dispatch(getProductDetails(id));
    }, [dispatch, id]);

    const addToCartHandler = () => {
        navigate(`/cart/${params.id}?qty=${qty}`);
    };

    return (
        <>
            <Link className="btn btn-light my-3" to="/">
                Go Back
            </Link>
            {isProductDetailsLoading ? (
                <Loader />
            ) : productDetailsError ? (
                <Message variant="danger">{productDetailsError}</Message>
            ) : (
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
                                        <Col>{product && product.countInStock > 0 ? 'In Stock' : 'Out of Stock'}</Col>
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
                                        className="btn btn-outline-primary"
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
            )}
        </>
    );
};

export default ProductScreen;
