import React, { useEffect, useState } from 'react';
import ManageProduct from '../ManageProduct/ManageProduct';

const Manage = () => {
    const[manage,setManage] = useState([]);
    useEffect(()=>{
        const url =   `https://gentle-hollows-84272.herokuapp.com/products`
        fetch(url)
        .then(res=>res.json())
        .then(data=>setManage(data))
    },[])
    return (
        <div>
            <table class="table w-75 m-auto table-bordered">
  <thead>
    <tr>
      <th scope="col">Product Name</th>
      <th scope="col">Price</th>
      <th scope="col">Action</th>
    </tr>
  </thead>
 
</table>

{
    manage.map(pd=><ManageProduct pd={pd}></ManageProduct>)
}

        </div>
    );
};

export default Manage;