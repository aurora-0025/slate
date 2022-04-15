import Link from 'next/link';
import React, { useState } from 'react'
import { useAuth } from '../../context/AuthContext';
import styles from '../../styles/navbar.module.css'


function navBar({ buttonText }) {
const {logOut} = useAuth();

  return (
    <div className={styles.navbar}>
        <Link href="/"><h1>Slate</h1></Link>
        <div className={styles.buttonContainer}>
        {buttonText == "login" &&
        <a href="/login">{buttonText}</a>
        }
      { buttonText != "login" && <>
        <a href="/dashboard">{buttonText}</a>
        <a href="/login" onClick={()=>logOut()}>logout</a>
      </>
      }
      </div>
        
    </div>
  )
}


export default navBar