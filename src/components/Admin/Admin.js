import React from 'react';
import './Admin.css';
import { Link } from 'react-router-dom';

const Admin = () => {
    return (
        <div className="wrapper">
	
 <nav id="sidebar">
 	
 	 <div className="sidebar-header">
 	 	<h3></h3>
 	 </div>
 	 <ul className="lisst-unstyled components">

 	 	<p>Organic Food</p>
 	 	<li>
 	 		<Link to="/manageProduct" href="#">Manage Product</Link>
 	 	</li>
 	 	<li>
 	 		<Link to="/addProduct" href="#">Add Product</Link>
 	 	</li>
 	 	<li>
 	 		<Link href="/editProduct" >Edit Product</Link>
 	 	</li>

 	 	 	 	

 	 </ul>
 </nav>


<div id="content">
	

<br />
    

<form className='d-flex'>
  <div class="form-group form-margin">
    <label htmlfor="exampleInputEmail1">Product Name</label>
    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter Product Name" />
  </div>
  <div class="form-group">
    <label htmlfor="exampleInputPassword1">Add Price</label>
    <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Add Price" />
  </div>

</form>

<form className='d-flex'>
  <div class="form-group form-margin">
    <label htmlfor="exampleInputEmail1">Product Quantity</label>
    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Product Quantity" />
  
  </div>

  
  <button type="submit" class="btn btn-primary button2">Upload Image</button>
</form>

<form action="">
<button type="submit" class="btn btn-success button2">Save</button>
</form>

</div>


</div>
    );
};

export default Admin;