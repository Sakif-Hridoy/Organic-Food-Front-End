import React, { useState } from 'react';
import './Admin.css';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { UserContext } from '../../App';
import AdminHeader from '../AdminHeader/AdminHeader';
import PrivateRoute from '../PrivateRoute/PrivateRoute';
import ManageProduct from '../ManageProduct/ManageProduct';
import AddProduct from '../AddProduct/AddProduct';
import EditProduct from '../EditProduct/EditProduct';

const Admin = () => {
	const  [loggedInUser,setLoggedInUser]=useState({});
    return (
		
		<UserContext.Provider value={[loggedInUser,setLoggedInUser]}>
			<div class="wrapper">
		<Router>
			<div id="sidebar">
			<AdminHeader></AdminHeader>
			</div>
		  
		  
			  {/* A <Switch> looks through its children <Route>s and
				renders the first one that matches the current URL. */}
			<Switch>

				<Route path="/editProduct">
					<EditProduct></EditProduct>
				</Route>

				<Route path="/addProduct">
					<AddProduct></AddProduct>
				</Route>

			<Route path="/">
				<ManageProduct></ManageProduct>
			  </Route>
	
		
			</Switch>
		  
		</Router>
		</div>
		</UserContext.Provider>
		
    );
};

export default Admin;