import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import { Provider } from 'react-redux';
import store from './store';

function App() {
  return (
    <div className="App">
      <Provider store ={store}>
        <BrowserRouter>
        
        </BrowserRouter>
     </Provider>
    </div>
  );
}

export default App;
