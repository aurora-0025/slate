import {signInWithEmailAndPassword } from 'firebase/auth';
import { useRouter } from 'next/router';
import React, { useState } from 'react';
import { auth } from '../firebase/clientApp';
import styles from '../styles/Login.module.css'
import {ArrowLeft} from '@carbon/icons-react'
import Link from 'next/link';


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
          console.log(error.code);
          let errorMsg = ''
          switch (error.code) {
            case 'auth/email-already-exists':
              errorMsg = "An Account Already Exists with that email"
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
            case 'auth/user-not-found':
              errorMsg = "User not found"
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
        <Link href="/" passHref><ArrowLeft size={32} className={styles.backButton} /></Link>
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
        <p>Not Registred Yet? <Link href='/signup' passHref><div className={styles.Link}>Create an account.</div></Link></p>
      </div>
    )
}

export default Login;

