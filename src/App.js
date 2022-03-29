import logo from './logo.svg';
import './App.css';
import '../node_modules/bootstrap-4-react/dist/bootstrap-4-react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


import React from "react";
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


export default function App() {
  return (
    <Router>
      <Header></Header>
      <div>
          {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
        <Route path="/login">
            <Login />
          </Route>

        <Route path="/deals">
            <Deals />
          </Route>

          <Route path="/admin">
            <Admin />
          </Route>
          <Route path="/orders">
            <Orders />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
