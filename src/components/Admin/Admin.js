import React from 'react';
import './Admin.css'

const Admin = () => {
    return (
        <div className="wrapper">
	
 <nav id="sidebar">
 	
 	 <div class="sidebar-header">
 	 	<h3>Bootstrap Slider</h3>
 	 </div>
 	 <ul class="lisst-unstyled components">

 	 	<p>The Providers</p>
 	 	<li class="active">
 	 		<a href="#homeSubmenu" data-toggle="collapse" aria-expanded="false" class="dropdown-toggle">Home</a>
 	 	  <ul class="collapse list-unstyled" id="homeSubmenu">
 	 	  	<li>
 	 	  		<a href="#">Home 1</a>
 	 	  	</li>
 	 	  	<li>
 	 	  		<a href="#">Home 2</a>
 	 	  	</li>

 	 	  </ul>
 	 	</li>
 	 	<li>
 	 		<a href="#">About</a>
 	 	</li>
 	 	<li>
 	 		<a href="#pageSubmenu" data-toggle="collapse" aria-expanded="false" class="dropdown-toggle">Pages</a>
 	 		<ul class="collapse list-unstyled" id="pageSubmenu">
 	 			<li>
 	 				<a href="#">Page 1</a>
 	 			</li>
 	 			<li>
 	 				<a href="#">Page 2</a>
 	 			</li>
 	 			

 	 		</ul>
 	 	</li>

 	 	 	 	<li>
 	 				<a href="#">Policy</a>
 	 			</li>

         <li>
 	 				<a href="#">Contact Us</a>
 	 			</li>

 	 </ul>
 </nav>


<div id="content">
	

<br />
    <h2>Collapseible Sidebar using Bootstrap 4</h2>
    <p>
    	It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).
    	
    </p>
     <p>
    	It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).
    	
    </p>

  <div class="line"></div>
  <h3>Lorem Ipsum</h3>

   <p>
    	It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).
    	
    </p>








</div>


</div>
    );
};

export default Admin;