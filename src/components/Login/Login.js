import React, { useContext, useState } from 'react';
import './Login.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import { faGoogle } from "@fortawesome/free-brands-svg-icons";
import { useHistory, useLocation } from 'react-router';
import { createUserWithEmailAndPassword, handleGoogleSignIn, handleGoogleSignOut, initializeLoginFramework, signInWithEmailAndPassword } from './LoginManager';
import { UserContext } from '../../App';


const Login = () => {
  
  const [newUser,setNewUser]=useState(false);


  const[user,setUser]= useState({
    isSignedIn: false,
    name:'',
    email:'',
    password:'',
    photo:'',
    error:''
  });
  initializeLoginFramework();
  const [loggedInUser,setLoggedInUser] = useContext(UserContext);
  const history = useHistory();
  const location = useLocation();
  let { from } = location.state || { from: { pathname: "/" } };

 
  const googleSignIn = ()=>{
    handleGoogleSignIn()
    .then(res=>{
      handleResponse(res, true);
    })
  }

  const googleSignOut = ()=>{
    handleGoogleSignOut()
    .then(res=>{
      handleResponse(res, false);
    })
  }

  const handleResponse = (res,redirect)=>{
      setUser(res);
      setLoggedInUser(res);
      if(redirect){
        history.replace(from);
      }
      
  }
    const handleBlur = (event)=>{
    console.log(event.target.name,event.target.value);
    let isFieldValid = true;
    if(event.target.name === 'email'){
      
      // eslint-disable-next-line no-unused-vars
      isFieldValid = /\S+@\S+\.\S+/.test(event.target.value);
      
    }

    if (event.target.name === 'password'){
        const isPasswordValid = event.target.value.length > 6;
        const passwordHasNumber = /\d{1}/.test(event.target.value);
        isFieldValid = isPasswordValid && passwordHasNumber;
    }

    if(isFieldValid){
        const newUserInfo = {...user};
        newUserInfo[event.target.name] = event.target.value;
        setUser(newUserInfo);
    }

    }
    const handleSubmit = (e)=>{
      console.log(user.email,user.password)
      if(newUser && user.email && user.password){
        createUserWithEmailAndPassword(user.name,user.email,user.password)
        .then(res=>{
          handleResponse(res, true);
        })
      }

      if(!newUser && user.email && user.password){
        signInWithEmailAndPassword(user.email,user.password)
        .then(res=>{
          handleResponse(res, true);
        })
      }
      e.preventDefault();
    }

    return (
        <div className="vh-100">
  <div className="container-fluid h-custom">
    <div className="row d-flex justify-content-center align-items-center h-100">
      <div className="col-md-9 col-lg-6 col-xl-5">
          
        <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp" className="img-fluid"
          alt="Sample image" />
      </div>
      <div className="col-md-8 col-lg-6 col-xl-4 offset-xl-1">
        <form>
          <div className="d-flex flex-row align-items-center justify-content-center justify-content-lg-start">
            <p className="lead fw-normal mb-0 me-3">Sign in with</p>
            <button type="button" className="btn btn-warning btn-floating mx-1">
            <FontAwesomeIcon icon={faGoogle} /> Google
            </button>

            <button type="button" className="btn btn-primary btn-floating mx-1">
            <FontAwesomeIcon icon={faFacebook} /> Facebook
            </button>
      {/* message */}
          </div>

          <div className="divider d-flex align-items-center my-4">
            <p className="text-center fw-bold mx-3 mb-0">Or</p>
          </div>

         
          <div className="form-outline mb-4">
            <input type="email" id="form3Example3" className="form-control form-control-lg"
              placeholder="Enter a valid email address" />
            <label className="form-label" htmlfor="form3Example3">Email address</label>
          </div>

          
          <div className="form-outline mb-3">
            <input type="password" id="form3Example4" className="form-control form-control-lg"
              placeholder="Enter password" />
            <label className="form-label" htmlfor="form3Example4">Password</label>
          </div>

          <div className="d-flex justify-content-between align-items-center">
           
            <div className="form-check mb-0">
              <input className="form-check-input me-2" type="checkbox" value="" id="form2Example3" />
              <label className="form-check-label" htmlfor="form2Example3">
                Remember me
              </label>
            </div>
            <a href="#!" className="text-body">Forgot password?</a>
          </div>

          <div className="text-center text-lg-start mt-4 pt-2">
            <button type="button" className="btn btn-primary btn-lg btnStyle"
              >Login</button>
            <p className="small fw-bold mt-2 pt-1 mb-0">Don't have an account? <a href="#!"
                className="link-danger">Register</a></p>
          </div>

        </form>
      </div>
    </div>
  </div>
  <div className="d-flex flex-column flex-md-row text-center text-md-start justify-content-between py-4 px-4 px-xl-5 bg-primary">
  
    <div className="text-white mb-3 mb-md-0">
      Copyright © 2020. All rights reserved.
    </div>
   
    <div>
      <a href="#!" className="text-white me-4">
        <i className="fab fa-facebook-f"></i>
      </a>
      <a href="#!" className="text-white me-4">
        <i className="fab fa-twitter"></i>
      </a>
      <a href="#!" className="text-white me-4">
        <i className="fab fa-google"></i>
      </a>
      <a href="#!" className="text-white">
        <i className="fab fa-linkedin-in"></i>
      </a>
    </div>
    
  </div>
</div>
    );
};

export default Login;