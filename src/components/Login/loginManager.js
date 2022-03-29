import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import firebaseConfig from './firebase.config';

export const initializeLoginFramework = () => {
    if(firebase.apps.length ===0){
      firebase.initializeApp(firebaseConfig);
    }
}

export const handleGoogleSignIn = ()=>{
    // console.log("sign in clikced")
const provider = new firebase.auth.GoogleAuthProvider();
return firebase.auth().signInWithPopup(provider)
    .then(res=>{
      const {displayName,photoURL,email}= res.user;
      const signedInUser = {
        isSignedIn: true,
        name:displayName,
        email:email,
        photo:photoURL,
        success:true
      }
       return signedInUser;
    })
    .catch(err=>{
      console.log(err);
      console.log(err.message);
    })
  }



export const handleGoogleSignOut=()=>{
    return  firebase.auth().signOut()
      .then(res=>{
          const signedOutUser = {
            newUser:false,
            isSignedIn:false,
            name:'',
            photo:'',
            email:'',
            error:'',
            success:false
          }
    return signedOutUser;
      })
      .catch(err =>{

      })
  }