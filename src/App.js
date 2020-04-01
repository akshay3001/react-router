import React from 'react';
import { BrowserRouter, Route, Switch} from 'react-router-dom';
import './App.css';
import Nav from './Nav';
import Home from './Home';
import Contact from './Contact';
import User from './User';
import Posts from './Posts';
import PostDetails from './PostDetails';

export const UserContext = React.createContext();

function App() {
  return (
    <div className="App">
        <BrowserRouter>
        <Nav />
          <Switch>
              <Route path="/" exact component={Home}>
                <UserContext.Provider value={'Akshay'}>
                  <Home />
                </UserContext.Provider>
              </Route>
              <Route path="/home" component={Home}>
                <UserContext.Provider value={'Akshay'}>
                  <Home />
                </UserContext.Provider>
              </Route>
              <Route path="/contact" component={Contact}>
                <Contact />
              </Route>
              <Route path="/user" component={User}>
                <User />
              </Route>
              <Route path="/posts" exact component={Posts}>
                <Posts />
              </Route>
              <Route path="/posts/details/:id" component={PostDetails}>
                <PostDetails />
              </Route>
          </Switch>
        </BrowserRouter>
    </div>
  );
}

export default App;