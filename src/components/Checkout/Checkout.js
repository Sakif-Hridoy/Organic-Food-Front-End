import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { UserContext } from '../../App';

const Checkout = (props) => {
    const {name} = useParams();
    const [checkOut,setCheckOut] = useState({});
    console.log(checkOut)
    const [loggedInUser,setLoggedInUser] = useContext(UserContext);

    useEffect(()=>{
        fetch('https://gentle-hollows-84272.herokuapp.com/products/' + name)
        .then(res=>res.json())
    .then(data => setCheckOut(data[0]))
    },[name])
    

    // console.log(props.name)

    const handleCheckout = ()=>{
        const newOrder = {...checkOut, newDate: new Date()};

        fetch('https://gentle-hollows-84272.herokuapp.com/addOrder',{
            method:"POST",
            headers: {
                'Content-Type':'application/json'
            },
            body:JSON.stringify(newOrder)
        })
        .then(result=>{
            alert('Order Submitted')
        })
    }

    return (
        <div class="container">
            <h1 class="text-center bg-red">Check Out</h1>

            <table class="table">
  <thead class="thead-dark">
    <tr>
      <th scope="col">Description</th>
      <th scope="col">Quantity</th>
      <th scope="col">Price</th>
      
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">{checkOut.name}</th>
      <td>1</td>
      <td>{checkOut.price}$</td>
     
    </tr>
    <tr>
      <th scope="row">Total</th>
      <td></td>
      <td>{checkOut.price}$</td>
     
    </tr>
    <tr>
      <th scope="row"></th>
      <td></td>
      <td><input onClick={handleCheckout} type="submit" value="Checkout" class="btn btn-success" /></td>
      
    </tr>
  </tbody>
</table>

        </div>
    );
};

export default Checkout;