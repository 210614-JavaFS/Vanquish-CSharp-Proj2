import React from 'react';
import './css/App.css';

import 'bootstrap/dist/css/bootstrap.min.css';
import AppRoutes from './routes/AppRoutes';
import { BrowserRouter } from 'react-router-dom';
import { Switch } from "react-router";
import { Footer } from './views/Footer';
import { NavBar } from './views/NavBar';


// import './default.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>

        <NavBar />
        <Switch>
          <header className="App-header relative">
            <AppRoutes />
          </header>

        </Switch>

        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
