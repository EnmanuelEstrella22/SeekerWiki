//Native Component
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
//Component
import Routes from './routes/Routes';

function App() {
  return (
    <BrowserRouter>
      <div>
        <Routes />
      </div>
    </BrowserRouter>
  );
}

export default App;
