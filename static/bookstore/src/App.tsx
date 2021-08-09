import React from 'react';
import './css/App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import AppRoutes from './routes/AppRoutes';
import { BrowserRouter } from 'react-router-dom';
import { Switch } from "react-router";
import { Footer } from './views/Footer';
import { NavBar } from './views/NavBar';
import { Provider } from 'react-redux';
import store from './store';
import Login from './components/register-login/Login';

// import './default.css';

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <BrowserRouter>

          {/* 
          
          <NavBar />

          
          <Switch>
            <header className="App-header relative">
              <AppRoutes />
            </header>
          </Switch>
          
          */}
          
          <Login/>

          {/* NOTE. Footer */}
          <Footer />
        </BrowserRouter>
        
      </Provider>
    </div>
  );
}

export default App;
