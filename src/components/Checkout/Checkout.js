import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { UserContext } from '../../App';

const Checkout = (props) => {
    const {name} = useParams();
    const [checkOut,setCheckOut] = useState();
    console.log(checkOut)
    const [loggedInUser,setLoggedInUser] = useContext(UserContext);

    useEffect(()=>{
        fetch('http://localhost:4545/products/' + name)
        .then(res=>res.json())
    .then(data => console.log(data))
    },[name])
    

    // console.log(props.name)
    return (
        <div>
            <h1>This is Check Out</h1>
        </div>
    );
};

export default Checkout;