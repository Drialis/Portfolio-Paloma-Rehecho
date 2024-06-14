import AppRoutes from './routes/AppRoutes'
import Navigation from './Components/Navigation/Navigation'
import Footer from './Components/Footer/Footer'
import React from 'react'
import './App.css'

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