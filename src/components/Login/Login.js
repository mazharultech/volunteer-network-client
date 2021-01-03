import React from 'react';
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './firebase.config';
firebase.initializeApp(firebaseConfig);
const Login = () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    const handleSubmit = () => {
        firebase.auth().signInWithPopup(provider)
        .then(result => {
            const credential = result.credential;
            const token = credential.accessToken;
            const user = result.user;
            console.log(user);
        })
        .catch(error=> {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorMessage);
        });
    } 
    return (
        <div>
            <h2>This login page</h2>
            <button onClick={handleSubmit}>Google sign</button>
        </div>
    );
};

export default Login;