import {signInWithEmailAndPassword } from 'firebase/auth';
import { useRouter } from 'next/router';
import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { auth } from '../firebase/clientApp';
import styles from '../styles/Login.module.css'
import {ArrowLeft} from '@carbon/icons-react'


const Login = () =>{

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const [errorMessage, setErrorMessage] = useState("");

    const router = useRouter();


    const handleLogin = async (e: any) => {
        e.preventDefault();
        signInWithEmailAndPassword(auth, email, password).then((userCredential) => {
          const user = userCredential.user;
          router.push('/dashboard')
        }).catch((error)=>{
          let errorMsg = ''
          switch (error.code) {
            case 'auth/email-already-exists':
              errorMsg = "Account Already Exists with that email"
              break;
            case 'auth/internal-error':
              errorMsg = "Internal Error"
              break;
            case 'auth/invalid-email':
              errorMsg = "Invalid Email"
              break;
            case 'auth/invalid-password':
              errorMsg = "Invalid Password"
              break;
            case 'auth/wrong-password':
              errorMsg = "Wrong Password"
              break;
            default:
              errorMsg = "error"
              console.log(error.message);
              break;
          }
          setErrorMessage(errorMsg);
        })
      }


    return (
      <div className={styles.loginForm}>
        <a href="/"><ArrowLeft size={32} className={styles.backButton} /></a>
        <h2>Login</h2>
        <p>Login to access all features of Slate.</p>
        <form onSubmit={handleLogin}>
          <div className={styles.inputContainer}>
            <label>Email </label>
            <input type="text" onChange={(e)=>{setEmail(e.target.value);;
            }} name="email" required />
          </div>
          <div className={styles.inputContainer}>
            <label>Password </label>
            <input type="password" onChange={(e)=>{setPassword(e.target.value)}} name="pass" required />
          </div>
          <div className={styles.errorMsg}>
           {errorMessage ? errorMessage : null}
          </div>
          <div className={styles.loginContainer}>
            <input type="submit" value="Login" />
          </div>
        </form>
        <p>Not Registred Yet? <a className={styles.Link} href='/signup'>Create an account.</a></p>
      </div>
    )
}

export default Login;

