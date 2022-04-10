import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../App';
import OrderedProduct from '../OrderedProduct/OrderedProduct';

const Orders = () => {
    const [loggedInUser,setLoggedInUser] = useContext(UserContext);
    const [orders,setOrders] = useState([]);
    const email = loggedInUser.email;
    // console.log(loggedInUser,orders,loggedInUser.email);

    useEffect(()=>{
        fetch(`http://localhost:4545/orders?${email}`,{

        }).then(res=>res.json())
        .then(data=>setOrders(data))
    })
    return (
        <div>
            <h2 class="text-center">Your Orders</h2>
            <h3 class="text-center">User Name: {loggedInUser.name}</h3>

            <table class="table w-75 m-auto table-dark">
  <thead>
    <tr>
      <th scope="col">Product Name</th>
      <th scope="col">Price</th>
      <th scope="col">Date</th>
    </tr>
  </thead>
</table>
{
    orders.map(order=><OrderedProduct order={order}></OrderedProduct>)
}

        </div>
    );
};

export default Orders;