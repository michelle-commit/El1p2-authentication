import React, { useContext } from "react";
import { AuthContext } from "./context/AuthContext";
import './App.css';
import Google from "./googlebutton";
import { SignInWithFacebook, SignInWithGithub, SignInWithGoogle } from "./firebase";
import Facebook from "./facebookButton";
import Github from "./githubButton";

function App() {
  const user= useContext(AuthContext)
  return (
    <>
      <div className="Mynavbar">
        <h3 className="welcome">Welcome</h3>
        <div>          
          <label htmlFor="">Email:</label>
          <input type="email" name="email" /><br />

          <label htmlFor="">Password:</label>
          <input type="text" name="" id="" /> <br />

          <Google log={SignInWithGoogle}  /> 
          <Facebook log={SignInWithFacebook}/>
          <Github log={SignInWithGithub}/>

        </div>
        
        
        
        

      </div>
      
    </>
  );
}

export default App;
