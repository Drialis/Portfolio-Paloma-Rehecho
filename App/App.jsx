import AppRoutes from '../routes/AppRoutes';
import Navigation from '../Components/Navigation/Navigation';
import Footer from '../Components/Footer/Footer';
import './App.css';
import { Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useTranslation } from 'react-i18next';

const App = () => {
    const { t, i18n } = useTranslation()
    return (
        <Container fluid className='App'>
            <Navigation />
            <AppRoutes />
            <Footer />
        </Container>
    );
};

export default App;