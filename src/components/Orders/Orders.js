import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../App';

const Orders = () => {
    const [loggedInUser,setLoggedInUser] = useContext(UserContext);
    const [orders,setOrders] = useState([]);
    const email = loggedInUser.email;
    console.log(loggedInUser,orders,loggedInUser.email);

    useEffect(()=>{
        fetch(`http://localhost:4545/orders?${email}`,{

        }).then(res=>res.json())
        .then(data=>setOrders(data))
    })
    return (
        <div>
            <h2>Your Orders</h2>
            <h3>User Name: {loggedInUser.name}</h3>

            <table class="table table-dark">
  <thead>
    <tr>
      <th scope="col">Product Name</th>
      <th scope="col">Price</th>
      <th scope="col">Date</th>
    </tr>
  </thead>
</table>


        </div>
    );
};

export default Orders;