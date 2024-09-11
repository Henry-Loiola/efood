import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { GlobalCSS } from './styles';
import Rotas from './routes';
import { Provider } from 'react-redux'
import { store } from './store'

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <GlobalCSS />
        <Rotas />
      </BrowserRouter>
    </Provider>
  );
}

export default App;
