import React ,{useState}from 'react';
import './Product.css';

const Products = ({product}) => {
    
    return (
        <div class="" >
            <div class="">
            <img class="content" style={{height:'300px'}} src={product.imageURL} alt=""/>
            <h4 class="content">{product.name}</h4>
            <button class="content">Buy Now</button>
            <h4 class="content">Price: {product.price}</h4>
            </div>
        </div>
    );
};

export default Products;