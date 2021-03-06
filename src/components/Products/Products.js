import React ,{useState}from 'react';
import { Link } from 'react-router-dom';
import './Product.css';

const Products = ({product}) => {
    // console.log(product)
    const {name,imageURL,price} = product || {}
    return (
        <div class="" >
            <div class="">
            <img class="content" style={{height:'300px'}} src={imageURL} alt=""/>
            <h4 class="content">{name}</h4>

            <Link to={`/products/${name}`} class="btn btn-success">Buy Now</Link>
            <h4 class="content">Price: {price}$</h4>
            </div>
        </div>
    );
};

export default Products;