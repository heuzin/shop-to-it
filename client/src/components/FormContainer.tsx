import { Col, Container, Row } from 'react-bootstrap';

type Props = {
    childen?: React.ReactNode;
};

const FormContainer: React.FC<Props> = ({ children }) => {
    return (
        <Container>
            <Row className="justify-content-md-center">
                <Col xs={12} md={6}>
                    {children}
                </Col>
            </Row>
        </Container>
    );
};

export default FormContainer;
