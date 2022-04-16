import React from "react";
import { useAuth } from "../context/AuthContext";
import navBar from "./components/navBar";
import styles from "../styles/biologySubject.module.css"
import Link from "next/link";

const Biology = ()=>{
  const {user} = useAuth();

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
        <div className={styles.main}>
            <h1>biology</h1>
            <div className={styles.coursesContainer}>
                <Link href="/biology/cell">
                <div className={styles.course}>
                    <div className={styles.shape}>Easy</div>
                    <div className={styles.cDesc}>
                        <h2>Cell</h2>
                        <p>Cell, the smallest unit that can live on its own and that makes up all living organisms and the tissues of the body.Cells are called the building blocks of life.</p>
                    </div>
                    <img src="/pages/biology/courses/cell.svg" alt="" />
                </div>
                </Link>
                <Link href="/biology/human_body">
                <div className={styles.course}>
                    <div className={styles.shape}>Medium</div>
                    <div className={styles.cDesc}>
                        <h2>Human Body</h2>
                        <p>Human body parts comprise a head, neck and four limbs that are connected to a torso. Giving the body its shape is the skeleton, which is composed of cartilage and bone.</p>
                    </div>
                    <img src="/pages/biology/courses/HumanBody.svg" alt="" />
                </div>
                </Link>
                <div className={styles.end}>
					<Link href="/quiz/biology"><button>Take A Quiz</button></Link>
                </div>
            </div>
        </div>

        </>
    )
}

export default Biology;
