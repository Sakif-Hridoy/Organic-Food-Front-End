import React from 'react';
import { Link } from 'react-router-dom';
import './AddProduct.css';
const AddProduct = () => {
    return (


        <div id='content'>
            <form class="form-display">
  <div class="form-group form-margin">
    <label for="exampleInputEmail1">Product Name</label>
    <input type="text" class="form-control"  placeholder="Enter Product Name" />
   
  </div>
  <div class="form-group form-margin">
    <label for="exampleInputEmail1">Product Price</label>
    <input type="number" class="form-control"  placeholder="Enter Product Price" />
   
  </div>
  <div class="form-group form-margin">
    <label for="exampleInputPassword1">Weight</label>
    <input type="number" class="form-control"  placeholder="Enter Weight" />
  </div>
  <button type="submit" class="btn btn-primary button1">Upload Image</button>
</form>

<form action="">
<button type="submit" class="btn btn-primary button2">Save</button>
</form>

        </div>


        
    );
};

export default AddProduct;