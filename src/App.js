import React, {useEffect, useState} from 'react';
import WOW from 'wowjs';
import {BrowserRouter as Router} from 'react-router-dom';
import './App.css';
import Main from './pages/RoutingPage';
import { Provider } from 'react-redux';
import { ConfigureStore } from './redux/configureStore';
import ScrollToTop from "./components/ScrollToTop";

const store = ConfigureStore();

function App() {
    useEffect(() => {
        new WOW.WOW({
            live: false
        }).init();
    });

    return (
        <Provider store={store}>
            <Router>

                <Main />
            </Router>
        </Provider>
    );
}

export default App;
