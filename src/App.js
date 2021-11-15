import React, {useEffect} from 'react';
import WOW from 'wowjs';
import {BrowserRouter} from 'react-router-dom';
import './App.css';
import Main from './components/MainComponent';

function App() {

    useEffect(() => {
        new WOW.WOW({
            live: false
        }).init();
    });

    return (
      <BrowserRouter>
          <div>
              <Main />
          </div>
      </BrowserRouter>
    );
}

export default App;
