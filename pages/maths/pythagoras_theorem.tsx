import { useAuth } from "../../context/AuthContext";
import navBar from "../components/navBar";
import styles from "../../styles/mathCourse.module.css"

const PythagorasTheorem = ()=>{
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
        <div className={styles.container}>
        <div className={styles.title}>
                <h1>Pythagoras Theorem</h1>
                <button>View Notes</button>
        </div>
                <div className={styles.para}>
                    Pythagoras Theorem explains the relation between the sides of a right-angled triangle.
                </div>
                <div className={styles.para}>
                    The sides of the right triangle are also called here Pythagorean triples.
                </div>
                <div className={styles.para}>
                    Pythagoras theorem states that “In a right-angled triangle,  the square of the hypotenuse side is equal to the sum of squares of the other two sides“
                </div>
                <div className={styles.para}>
                    The sides of this triangle have been named Perpendicular, Base and Hypotenuse.
                </div>
                <div className={styles.para}>
                    The hypotenuse is the longest side, as it is opposite to the angle 90°. The sides of a right triangle which have positive integer values, when squared, are put into an equation, also called a Pythagorean triple.
                </div>
                <div className={styles.para}>
                    According to the definition, the Pythagoras Theorem formula is given as:
                </div>
                <img className={styles.image} src="/pages/maths/courses/pythagorasTheorem/pt1.svg"/>
                <h2>Proof</h2>
                <img className={styles.image} src="/pages/maths/courses/pythagorasTheorem/pt2.svg"/>
                <div className={styles.para}>
                    We know, △ADB ~ △ABC
                </div>
                <div className={styles.para}>
                    Therefore,
                </div>
                <img src="" className={styles.image}/>
                <div className={styles.para}>
                    (corresponding sides of similar triangles)
                </div>
                <div className={styles.para}>
                    Or, BC^2= CD × AC ……………………………………..(2)
                </div>
                <div className={styles.para}>
                    Adding the equations (1) and (2) we get,
                </div>
                <div className={styles.para}>
                    AB^2 + BC^2 = AD × AC + CD × AC
                </div>
                <div className={styles.para}>
                    AB^2 + BC^2 = AC (AD + CD)
                </div>
                <div className={styles.para}>
                    Since, AD + CD = AC
                </div>
                <div className={styles.para}>
                    Therefore, AC^2 = AB^2 + BC^2
                </div>
                <div className={styles.para}>
                    Hence, the Pythagorean theorem is proved.
                </div>
                <div className={styles.para}>
                    Note: Pythagorean theorem is only applicable to Right-Angled triangle.
                </div>
                <div className={styles.sign}>
                    <h3>Pythagoras Theorem</h3>
                    <p>by Aurora0025</p>
                </div>
                <div className={styles.end}>
                    <h2>You have reached the end of the course!</h2>
                    <button>Mark as done.</button>
                </div>
            </div>
    </>
  )}
export default PythagorasTheorem;
