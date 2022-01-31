import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Container } from 'react-bootstrap';

import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import HomeScreen from './screens/homeScreen/HomeScreen';
import ProductScreen from './screens/productScreen/ProductScreen';
import CartScreen from './screens/cartScreen/CartScreen';

const App = () => {
    return (
        <BrowserRouter>
            <Header />
            <main className="py-3">
                <Container>
                    <Routes>
                        <Route path="" element={<HomeScreen />} />
                        <Route path="/product/:id" element={<ProductScreen />} />
                        <Route path="/cart" element={<CartScreen />} />
                        <Route path="/cart/:id" element={<CartScreen />} />
                    </Routes>
                </Container>
            </main>
            <Footer />
        </BrowserRouter>
    );
};

export default App;
