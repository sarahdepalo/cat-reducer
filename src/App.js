import React from 'react';
import CatApp from './components/CatApp';
import { Provider } from 'react-redux';
import { store } from './store';
import './App.css';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <CatApp />
      </div>
    </Provider>
  );
}

export default App;
