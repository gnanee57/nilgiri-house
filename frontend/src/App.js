import React, {useEffect, useState} from 'react';
import WOW from 'wowjs';
import {BrowserRouter} from 'react-router-dom';
import './App.css';
import Main from './MainComponent';
import { Provider } from 'react-redux';
import { ConfigureStore } from './redux/configureStore';

const store = ConfigureStore();

function App() {
    useEffect(() => {
        new WOW.WOW({
            live: false
        }).init();
    });

    return (
        <Provider store={store}>
            <BrowserRouter>
                <Main />
            </BrowserRouter>
        </Provider>
    );
}

export default App;
