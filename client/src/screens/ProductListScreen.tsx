import { useEffect } from 'react';
import { Button, Col, Row, Table } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { LinkContainer } from 'react-router-bootstrap';
import { useNavigate, useParams } from 'react-router-dom';
import { Loader } from '../components/Loader';
import Message from '../components/Message';
import Paginate from '../components/Paginate';
import { createProduct, deleteProduct, getAllProducts } from '../redux/product/productActions';
import { PRODUCT_CREATE_RESET } from '../redux/product/productTypes';
import { RootState } from '../redux/store';

const ProductListScreen = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const params = useParams();

    const pageNumber = Number(params.pageNumber);

    const productList = useSelector((state: RootState) => state.productList);
    const { products, loading, error, page, pages } = productList;

    const productDelete = useSelector((state: RootState) => state.productDelete);
    const { success: successDelete, loading: loadingDelete, error: errorDelete } = productDelete;

    const productCreate = useSelector((state: RootState) => state.productCreate);
    const {
        success: successCreate,
        loading: loadingCreate,
        error: errorCreate,
        product: createdProduct,
    } = productCreate;

    const user = useSelector((state: RootState) => state.user);
    const { userInfo } = user;

    useEffect(() => {
        dispatch({ type: PRODUCT_CREATE_RESET });

        if (!userInfo?.isAdmin) {
            navigate('/login');
        }

        if (successCreate) {
            navigate(`/admin/product/${createdProduct!._id}/edit`);
        } else {
            dispatch(getAllProducts('', pageNumber));
        }
    }, [dispatch, navigate, userInfo, successDelete, successCreate, createdProduct, pageNumber]);

    const createProductHandler = () => {
        dispatch(createProduct());
    };

    const deleteHandler = (id: string) => {
        if (window.confirm('Are you sure?')) {
            dispatch(deleteProduct(id));
        }
    };

    return (
        <>
            <Row className="align-items-center">
                <Col>
                    <h1>Products</h1>
                </Col>
                <Col className="text-end">
                    <Button className="my-3" onClick={createProductHandler}>
                        <i className="fas fa-plus"></i> Create Product
                    </Button>
                </Col>
            </Row>
            {loadingDelete && <Loader />}
            {errorDelete && <Message variant="danger">{errorDelete}</Message>}
            {loadingCreate && <Loader />}
            {errorCreate && <Message variant="danger">{errorCreate}</Message>}
            {loading ? (
                <Loader />
            ) : error ? (
                <Message variant="danger">{error}</Message>
            ) : (
                <>
                    <Table striped bordered hover responsive className="table-sm">
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>NAME</th>
                                <th>PRICE</th>
                                <th>CATEGORY</th>
                                <th>BRAND</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            {products.map((product) => (
                                <tr key={product._id}>
                                    <td>{product._id}</td>
                                    <td>{product.name}</td>
                                    <td>${product.price}</td>
                                    <td>{product.category}</td>
                                    <td>{product.brand}</td>
                                    <td>
                                        <LinkContainer to={`/admin/product/${product._id}/edit`}>
                                            <Button variant="primary" className="btn-sm">
                                                <i className="fas fa-edit"></i>
                                            </Button>
                                        </LinkContainer>
                                        <Button
                                            variant="danger"
                                            className="btn-sm"
                                            onClick={() => deleteHandler(product._id)}
                                        >
                                            <i className="fas fa-trash"></i>
                                        </Button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </Table>
                    <Paginate pages={pages} page={page} isAdmin={true} />
                </>
            )}
        </>
    );
};

export default ProductListScreen;
