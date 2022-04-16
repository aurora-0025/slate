import React from "react";
import { useAuth } from "../context/AuthContext";
import navBar from "./components/navBar";
import styles from "../styles/mathSubject.module.css"
import Link from "next/link";

const maths = ()=>{
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
            <h1>Mathematics</h1>
            <div className={styles.coursesContainer}>
                <Link href="/maths/pythagoras_theorem">
                <div className={styles.course}>
                    <div className={styles.shape}>Medium</div>
                    <div className={styles.cDesc}>
                        <h2>Pythagoras Theorem</h2>
                        <p>Pythagoras theorem states that “In a right-angled triangle, the square of the hypotenuse side is equal to the sum of squares of the other two sides“.</p>
                    </div>
                    <img src="/pages/maths/courses/areaOfTriangles.svg" />
                </div>
                </Link>
                <Link href="/maths/area_of_triangles">
                <div className={styles.course}>
                    <div className={styles.shape}>Medium</div>
                    <div className={styles.cDesc}>
                        <h2>Area of Triangles</h2>
                        <p>The area of a triangle is defined as the total region that is enclosed by the three sides of any particular triangle.</p>
                    </div>
                    <img src="/pages/maths/courses/pythagorasTheorem.svg" />
                </div>
                </Link>
                <div className={styles.end}>
					<Link href="/quiz/maths"><button>Take A Quiz</button></Link>
                </div>
            </div>
        </div>

        </>
    )
}

export default maths;
