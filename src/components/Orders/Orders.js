import React, { useContext, useState } from 'react';
import { UserContext } from '../../App';

const Orders = () => {
    const [loggedInUser,setLoggedInUser] = useContext(UserContext);
    const [orders,setOrders] = useState([]);
    const email = loggedInUser.email;
    console.log(loggedInUser,orders,loggedInUser.email)
    return (
        <div>
            <h1>This is Orders</h1>
        </div>
    );
};

export default Orders;