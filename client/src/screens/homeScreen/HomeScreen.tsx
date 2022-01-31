import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Col, Row } from 'react-bootstrap';
import { Products } from '../../modals/Products';
import { getAllProducts } from '../../redux/productList/productListActions';
import Product from '../../components/product/Product';
import {
    selectAllProductsList,
    selectProductsListIsLoadding,
    selectProductstListError,
} from '../../redux/productList/producstListSelectors';
import Message from '../../components/message/Message';
import { Loader } from '../../components/loader/Loader';

const HomeScreen = () => {
    const dispatch = useDispatch();

    const productsList = useSelector(selectAllProductsList);
    const isProductsLoading = useSelector(selectProductsListIsLoadding);
    const productListError = useSelector(selectProductstListError);

    useEffect(() => {
        dispatch(getAllProducts());
    }, [dispatch]);

    return (
        <>
            <h1>Latest Products</h1>
            {isProductsLoading ? (
                <Loader />
            ) : productListError ? (
                <Message variant="danger">{productListError}</Message>
            ) : (
                <Row>
                    {productsList.map((product: Products) => (
                        <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
                            <Product product={product} />
                        </Col>
                    ))}
                </Row>
            )}
        </>
    );
};

export default HomeScreen;
