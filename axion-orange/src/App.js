import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Router from './Routes/Router';

function App() {
  return (
    <BrowserRouter>
      <Router />
    </BrowserRouter>
  );
}

export default App;
