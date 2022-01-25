import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';
import { Row, Col, Image, ListGroup, Card, Button } from 'react-bootstrap';
import Rating from '../../components/rating/Rating';
import { Products } from '../../modals/Products';

const ProductScreen = () => {
    const params = useParams();
    const [product, setProduct] = useState<Products>();

    useEffect(() => {
        const fetchProduct = async () => {
            const { data } = await axios.get(`/api/products/${params.id}`);

            setProduct(data);
        };

        fetchProduct();
    }, [params.id]);

    return (
        <>
            <Link className="btn btn-light my-3" to="/">
                Go Back
            </Link>
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

                            <ListGroup.Item className="d-grid gap-2">
                                <Button
                                    className="btn btn-outline-primary"
                                    type="button"
                                    disabled={product && product.countInStock === 0}
                                >
                                    Add To Cart
                                </Button>
                            </ListGroup.Item>
                        </ListGroup>
                    </Card>
                </Col>
            </Row>
        </>
    );
};

export default ProductScreen;
