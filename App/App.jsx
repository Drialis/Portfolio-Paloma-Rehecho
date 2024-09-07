import AppRoutes from '../routes/AppRoutes';
import Navigation from '../Components/Navigation/Navigation';
import Footer from '../Components/Footer/Footer';
import React from 'react';
import './App.css';
import { Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
    return (
        <Container fluid className='App'>
            <Navigation />
            <AppRoutes />
            <Footer />
        </Container>
    );
};

export default App;
