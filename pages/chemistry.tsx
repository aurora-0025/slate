import React from "react";
import { useAuth } from "../context/AuthContext";
import navBar from "./components/navBar";
import styles from "../styles/chemSubject.module.css"
import Link from "next/link";

const chemistry = ()=>{
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
            <h1>Chemistry</h1>
            <div className={styles.coursesContainer}>
                <Link href="/chemistry/structure_of_an_atom">
                <div className={styles.course}>
                    <div className={styles.shape}>Easy</div>
                    <div className={styles.cDesc}>
                        <h2>Structure of an Atom</h2>
                        <p>Atoms are the building blocks of matter. It is the smallest unit of matter that is composed of three sub-atomic particles: the proton, the neutron and the electron.</p>
                    </div>
                    <img src="/pages/chemistry/courses/structureOfAnAtom.svg" alt="" />
                </div>
                </Link>
                <Link href="/chemistry/intro_to_organic_chemistry">
                <div className={styles.course}>
                    <div className={styles.shape}>Medium</div>
                    <div className={styles.cDesc}>
                        <h2>Introduction to Organic Chemistry</h2>
                        <p>The area of a triangle is defined as the total region that is enclosed by the three sides of any particular triangle.</p>
                    </div>
                    <img src="/pages/chemistry/courses/introductionToOrganicChemistry.svg" alt="" />
                </div>
                </Link>
                <div className={styles.end}>
					<Link href="/quiz/chemistry"><button>Take A Quiz</button></Link>
                </div>
            </div>
        </div>

        </>
    )
}

export default chemistry;
