import React from 'react';
import { BrowserRouter, Route, Switch} from 'react-router-dom';
import './App.css';
import Nav from './Nav';
import Home from './Home';
import Contact from './Contact';

function App() {
  return (
    <div className="App">
        <BrowserRouter>
        <Nav />
          <Switch>
              <Route path="/" exact component={Home}>
                <Home />
              </Route>
              <Route path="/home" component={Home}>
                <Home />
              </Route>
              <Route path="/contact" component={Contact}>
                <Contact />
              </Route>
          </Switch>
        </BrowserRouter>
    </div>
  );
}

export default App;