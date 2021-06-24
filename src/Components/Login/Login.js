import React, { useContext, useState } from 'react';
import Google from '../../images/Google.png';
import './Login.css'
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './firebase.config';
import { UserContext } from '../../App';
import { useHistory, useLocation } from 'react-router-dom';





const Login = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext)



    if(firebase.apps.length === 0){
        firebase.initializeApp(firebaseConfig);
    }

    const [user, setUser] = useState({
        isSignedIn: false,
        name: '',
        email: '',
    })
    

    const handleLogin = (e) =>{
        var provider = new firebase.auth.GoogleAuthProvider();
            firebase.auth()
            .signInWithPopup(provider)
            .then((result) => {
            const {displayName, email} = result.user;
            const newUser = {
                isSignedIn: true,
                name: displayName,
                email: email,
            }
            
            setUser(newUser)
            setLoggedInUser(email)
            console.log(newUser, typeof(newUser))
            }).catch((error) => {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            console.log(errorCode, errorMessage)
            });
    }
    // console.log(user)
    
    return (
        <div className="fullLogin">
        <div className="Container">
            <div className="position-absolute top-50 start-50">
                <div>
                    <img src={Google} alt="" />
                    <br /><br />
                </div>
                
                <div>
                    <button style={{backgroundColor:"red"}} onClick={()=>handleLogin()}>Google Sign In</button>
                </div>
            </div>
            
            </div>
            
        </div>
    );
};

export default Login;