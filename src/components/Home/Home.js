import React, { useEffect, useState } from 'react';
import Products from '../Products/Products';
import './Home.css';

const Home = () => {
    const [products,setProducts] = useState([])


    useEffect(()=>{
        fetch('https://gentle-hollows-84272.herokuapp.com/products')
        .then(res=>res.json())
        .then(data=>setProducts(data))
    },[])
    return (
       
            

                <div class="container">
                    <div class="row">
                {
                products.map(product=><Products product={product}></Products>)
            }
            </div>
                </div>
               
                


            
            
       
    );
};

export default Home;