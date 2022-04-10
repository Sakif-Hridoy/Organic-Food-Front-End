import './App.css';
import '../node_modules/bootstrap-4-react/dist/bootstrap-4-react';
import React, { createContext, useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './components/Home/Home';
import Orders from './components/Orders/Orders';
import Admin from './components/Admin/Admin';
import Deals from './components/Deals/Deals';
import Login from './components/Login/Login';
import Header from './components/Header/Header';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import Checkout from './components/Checkout/Checkout';

export const UserContext = createContext();
export default function App() {
  const  [loggedInUser,setLoggedInUser]=useState({});
  return (
    <UserContext.Provider value={[loggedInUser,setLoggedInUser]}>
    <Router>
      <Header></Header>
      
          {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>

        <Route exact path="/">
            <Home />
          </Route>

        <Route path="/home">
            <Home />
          </Route>

        <Route path="/login">
            <Login />
          </Route>

        <Route path="/deals">
            <Deals />
          </Route>

            {/* <Route path="/admin">
            <Admin></Admin>
            </Route> */}

        <PrivateRoute path="/admin">
        <Admin />
          </PrivateRoute>  
            
        <PrivateRoute path="/orders">
        <Orders />
          </PrivateRoute> 

          {/* <Route path="/orders">
          <Orders />
          </Route> */}
          
          <Route path="/products/:name">
            <Checkout></Checkout>
          </Route>

          

          
        </Switch>
      
    </Router>
    </UserContext.Provider>
  );
}
