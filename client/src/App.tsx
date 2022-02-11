import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Container } from 'react-bootstrap';

import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import HomeScreen from './screens/homeScreen/HomeScreen';
import ProductScreen from './screens/productScreen/ProductScreen';
import CartScreen from './screens/cartScreen/CartScreen';
import LoginScreen from './screens/loginScreen/LoginScreen';
import RegisterScreen from './screens/registerScreen/RegisterScreen';
import ProfileScreen from './screens/profileScreen/ProfileScreen';
import ShippingScreen from './screens/shippingScreen/ShippingScreen';
import PaymentScreen from './screens/paymentScreen/PaymentScreen';
import PlaceOrderScreen from './screens/placeOrderScreen/PlaceOrderScreen';
import OrderScreen from './screens/orderScreen/OrderScreen';

const App = () => {
    return (
        <BrowserRouter>
            <Header />
            <main className="py-3">
                <Container>
                    <Routes>
                        <Route path="/order/:id" element={<OrderScreen />} />
                        <Route path="/shipping" element={<ShippingScreen />} />
                        <Route path="/payment" element={<PaymentScreen />} />
                        <Route path="/placeorder" element={<PlaceOrderScreen />} />
                        <Route path="/login" element={<LoginScreen />} />
                        <Route path="/register" element={<RegisterScreen />} />
                        <Route path="/profile" element={<ProfileScreen />} />
                        <Route path="/product/:id" element={<ProductScreen />} />
                        <Route path="/cart" element={<CartScreen />} />
                        <Route path="/cart/:id" element={<CartScreen />} />
                        <Route path="/" element={<HomeScreen />} />
                    </Routes>
                </Container>
            </main>
            <Footer />
        </BrowserRouter>
    );
};

export default App;
