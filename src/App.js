import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import Routes from './routes';

// context
import { UserAuth } from './contexts/UserContext';

import './global.styles.css';

function App() {
  return (
    <BrowserRouter>
      <UserAuth>    
        <Routes />
      </UserAuth>
    </BrowserRouter>
  );
}

export default App;
