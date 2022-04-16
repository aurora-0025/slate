import { createUserWithEmailAndPassword } from 'firebase/auth';
import { addDoc, collection, onSnapshot } from 'firebase/firestore';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { auth, db } from '../firebase/clientApp';
import styles from '../styles/Signup.module.css';
import {ArrowLeft} from '@carbon/icons-react'
import Link from 'next/link';




const SignUp = () =>{

    const { user, signUp } = useAuth()
    const [errorMessage, setErrorMessage] = useState("");

    const [email, setEmail] = useState("")
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")

    const router = useRouter();


    const handleSignUp = async (e: any) => {
        let displayName = username;
        e.preventDefault();
        createUserWithEmailAndPassword(auth, email, password).then(async(userCredential) => {
            const user = userCredential.user;
            console.log(user);
            const collectionRef = collection(db, "users");
            const payload = {
              uid: user.uid,
              displayName: displayName,
              email: user.email,
              photoURL: user.photoURL,
              quiz: {
                physics: {
                  done: false,
                  marks: 0,
                  course1Marks: 0,
                  course2Marks: 0,
                },
                chemistry: {
                  done: false,
                  marks: 0,
                  course1Marks: 0,
                  course2Marks: 0,
                },
                biology: {
                  done: false,
                  marks: 0,
                  course1Marks: 0,
                  course2Marks: 0,
                },
                maths: {
                  done: false,
                  marks: 0,
                  course1Marks: 0,
                  course2Marks: 0,
                }
              },
              progress1:"physics",
              progress2:"chemistry",
              courses: {
                maths:{
                  completed: 0,
                  incomplete: 2,
                  pythagoras_theorem: false,
                  area_of_triangles: false,
                },
                physics:{
                  completed: 0,
                  incomplete: 2,
                  reflection_of_light: false,
                  ray_optics: false,
                },
                chemistry:{
                  completed: 0,
                  incomplete: 2,
                  structure_of_atom: false,
                  intro_to_organic_chemistry: false,
                },
                biology:{
                  completed: 0,
                  incomplete: 2,
                  cell: false,
                  human_body: false,
                }
              }
            }
            router.push('/dashboard')
            await addDoc(collectionRef, payload)

          }).catch((error)=>{
            let errorMsg = ''
            switch (error.code) {
              case 'auth/email-already-in-use':
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
        <div className={styles.signUpForm}>
        <Link href="/"><ArrowLeft size={32} className={styles.backButton} /></Link>
        <h2>SignUp</h2>
        <p>Register an account to get the Slate Experience.</p>
        <form onSubmit={handleSignUp}>
        <div className={styles.inputContainer}>
            <label>Username </label>
            <input type="text" onChange={(e)=>{setUsername(e.target.value);;
            }} name="username" required />
            <label>E-mail </label>
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
          <div className={styles.signUpContainer}>
            <input type="submit" value="SignUp" />
          </div>
        </form>
      </div>
    )
}

export default SignUp;

