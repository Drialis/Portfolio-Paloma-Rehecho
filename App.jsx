import AppRoutes from './routes/AppRoutes';
import Navigation from './Components/Navigation/Navigation';
import Footer from './Components/Footer/Footer';
import React from 'react';
import './App.css';
import { Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
    return (
        <div className="App">
            <Navigation />
            <Container fluid className="main-container">
                <AppRoutes />
            </Container>
            <Footer />
        </div>
    );
};

export default App;
