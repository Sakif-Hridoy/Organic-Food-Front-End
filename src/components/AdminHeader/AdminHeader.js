import React from 'react';
import { Link } from 'react-router-dom';

const AdminHeader = () => {
    return (
        <div>
            
<nav id="sidebar">
 	
     <div className="sidebar-header">
         <h3></h3>
     </div>
     <ul className="lisst-unstyled components">

         <p>Organic Food</p>
         <li>
             <Link to="/manageProduct" href="#">Manage Product</Link>
         </li>
         <li>
             <Link to="/addProduct" href="#">Add Product</Link>
         </li>
         <li>
             <Link href="/editProduct" >Edit Product</Link>
         </li>

                   

     </ul>
</nav>
        </div>
    );
};

export default AdminHeader;