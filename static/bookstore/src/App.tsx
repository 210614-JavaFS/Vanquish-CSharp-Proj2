import React from 'react';
import './css/App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import AppRoutes from './routes/AppRoutes';
import { BrowserRouter } from 'react-router-dom';
import { Switch } from "react-router";
import { Footer } from './views/Footer';
import { Provider, useSelector } from 'react-redux';
import store from './store';
import Login from './components/register-login/Login';
import { selectUser } from './features/userSlice';
import Bookstore from './components/main/Bookstore';

// import './default.css';

function App() {
  
  return (
    <div className="App">
      <Provider store={store}>

        <BrowserRouter>
          
          <Bookstore/>
        </BrowserRouter>

      </Provider>
    </div>
  );
}

export default App;
