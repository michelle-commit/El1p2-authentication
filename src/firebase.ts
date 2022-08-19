import { FacebookAuthProvider, GithubAuthProvider, GoogleAuthProvider, signInWithEmailLink, signInWithPopup } from 'firebase/auth';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyAkZ1Am0tBAo2NQfuwLc9MsvYpE6uqrWL0",
  authDomain: "react-auth-f4119.firebaseapp.com",
  projectId: "react-auth-f4119",
  storageBucket: "react-auth-f4119.appspot.com",
  messagingSenderId: "155097968263",
  appId: "1:155097968263:web:2e41e663c4ee8f2a1b5222"
};


firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
const googleProvider = new GoogleAuthProvider;
const facebookProvider = new FacebookAuthProvider;
const githubProvider = new GithubAuthProvider





 export const SignInWithGoogle = () =>{
  signInWithPopup(auth, googleProvider)
  .then((res)=>{
    console.log(res);
    
  })
  .catch((err)=>{
    console.log(err);
    
  });
}  
  export function SignInWithFacebook(){
    signInWithPopup(auth, facebookProvider)
    .then((res)=>{
      console.log(res);
    })
    .catch((err)=>{
      console.log(err);
      
    })
}
export const SignInWithGithub = () => {
  signInWithPopup(auth, githubProvider)
  .then((res)=>{
    console.log(res);
    
  })
  .catch((err)=>{
    console.log(err);
  })
}  


