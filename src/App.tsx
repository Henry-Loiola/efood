import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { GlobalCSS } from './styles';
import Rotas from './routes';

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <GlobalCSS />
      <Rotas />
    </BrowserRouter>
  );
}

export default App;
