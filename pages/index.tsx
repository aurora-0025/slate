import { useAuth } from '../context/AuthContext';
import styles from '../styles/Home.module.css'
import navBar from './components/navBar'
import AOS from 'aos';
import 'aos/dist/aos.css';
import Link from 'next/link';
// ..

export default function Home() {
  const {user} = useAuth();
  AOS.init();

  return (
    <>
    {user ? (
      <div>
        {navBar({buttonText:"go to dashboard"})}
        </div>
    ) : 
    <div>
      {navBar({buttonText:"login"})}
    </div>
    }
    <section className={styles.main}>
        <img src="/pages/home/photosynthesisfinal.gif" />
    </section>
    <section className={styles.riseToTop}>
      <h2>Rise To Top</h2>
      <div className={styles.slateDesc}>
          <img data-aos="slide-right" data-aos-once="true" src="/pages/home/riseToTop.svg" />
          <div className={styles.slateContent} data-aos="slide-left" data-aos-once="true">
            <h1>What is Slate?</h1>
            <p>
            Slate is an interactive learning platform designed to help students to learn easier and faster.Slate ensures that every student is clear of all his doubts by providing unlimited support in terms of simplified tutorials and teaching experts
            </p>
          </div>
        </div>
    </section>
    <section className={styles.courses}>
      <Link href={'/physics'}>
        <div className={styles.physics}>
        <h1>Physics</h1>
        <img className={styles.phy1} src="/pages/home/phy1.svg" />
        <img className={styles.phy2} src="/pages/home/phy2.svg" />
        <img className={styles.phy3} src="/pages/home/phy3.svg" />
      </div>
      </Link>
      <Link href={'/biology'}>
        <div className={styles.biology}>
          <h1>Biology</h1>
          <img className={styles.bio1} src="/pages/home/bio1.svg" />
          <img className={styles.bio2} src="/pages/home/bio2.svg" />
          <img className={styles.bio3} src="/pages/home/bio3.svg" />
        </div>
      </Link>
      <Link href={'/maths'}>
        <div className={styles.maths}>
          <h1>Maths</h1>
          <img className={styles.math1} src="/pages/home/math1.svg" />
          <img className={styles.math2} src="/pages/home/math2.svg" />
          <img className={styles.math3} src="/pages/home/math3.svg" />
        </div>
      </Link>
      <Link href={'/chemistry'}>
      <div className={styles.chemistry}>
        <h1>Chemistry</h1>
        <img className={styles.chem1} src="/pages/home/chem1.svg" />
        <img className={styles.chem2} src="/pages/home/chem2.svg" />
        <img className={styles.chem3} src="/pages/home/chem3.svg" />
      </div>
      </Link>
    </section>

    </>
  )
}
