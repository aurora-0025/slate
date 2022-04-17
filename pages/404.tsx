import React from "react";
import Link from 'next/link'
import styles from '../styles/404.module.css'
import {ArrowLeft} from '@carbon/icons-react'


export default function FourOhFour() {
  return <>
    <div className={styles.container}>
    <Link href="/" passHref><div className={styles.backButton}><ArrowLeft size={32} /> Back to Home</div></Link>
      <img alt="" src="/pages/404/404_3.svg" className={styles.image} />
      <div className={styles.imageContainer}>
        <img alt="" src="/pages/404/404_1.svg" className={styles.image1} />
        <img alt="" src="/pages/404/404_2.svg" className={styles.image2} />
      </div>
    </div>
  </>
}