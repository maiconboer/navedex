import React from 'react';
import {BrowserRouter} from 'react-router-dom';

import Routes from './routes';
import {UserAuth} from './contexts/UserContext';
import {Navers} from './contexts/NaversContext';
import './global.styles.css';

function App() {
  return (
    <BrowserRouter>
      <UserAuth>
        <Navers>
          <Routes />
        </Navers>
      </UserAuth>
    </BrowserRouter>
  );
}

export default App;
