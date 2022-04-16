import Link from 'next/link'
import styles from '../styles/404.module.css'

export default function FourOhFour() {
  return <>
    <div className={styles.container}>
      <Link href={'/'}><button>Back to Home</button></Link>
      <img src="/pages/404/404_3.svg" className={styles.image} />
      <div className={styles.imageContainer}>
        <img src="/pages/404/404_1.svg" className={styles.image1} />
        <img src="/pages/404/404_2.svg" className={styles.image2} />
      </div>
    </div>
  </>
}