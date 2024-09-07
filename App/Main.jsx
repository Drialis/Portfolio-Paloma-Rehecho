import React from 'react';
import ReactDOM from 'react-dom/client';
import App from '../App/App';
import { BrowserRouter as Router } from 'react-router-dom';
import '../src/Localization/locales/i18n';

ReactDOM.createRoot(document.getElementById('root')).render(
    <Router>
        <React.StrictMode>
            <App />
        </React.StrictMode>
    </Router>
);
