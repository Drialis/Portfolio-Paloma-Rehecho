import AppRoutes from './routes/AppRoutes'
import './App.css'
import Navigation from './components/Navigation/Navigation'
import Footer from './Components/Footer/Footer'

const App = () => {

    return (
        <div className='App'>

            <Navigation />

            <AppRoutes />

            <Footer />

        </div>
    )
}

export default App