import { useEffect, useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import { Products } from '../../modals/Products';
import Product from '../../components/product/Product';
import axios from 'axios';

const HomeScreen = () => {
    const [products, setProducts] = useState<Products[]>([]);

    useEffect(() => {
        const fetchProducts = async () => {
            const { data } = await axios.get('/api/products');

            setProducts(data);
        };

        fetchProducts();
    }, []);

    return (
        <>
            <h1>Latest Products</h1>
            <Row>
                {products.map((product: Products) => (
                    <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
                        <Product product={product} />
                    </Col>
                ))}
            </Row>
        </>
    );
};

export default HomeScreen;
