import { useAuth } from "../context/AuthContext";
import navBar from "./components/navBar";
import styles from "../styles/subject.module.css"

const physics = ()=>{
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
            <h1>Physics</h1>
            <div className={styles.coursesContainer}>
                <div className={styles.course}>
                    <div className={styles.shape}>Easy</div>
                    <div className={styles.cDesc}>
                        <h2>Reflection Of Light</h2>
                        <p>Reflection is when light bounces off an object. If the surface is smooth and shiny, like glass, water or polished metal, the light will reflect at the same angle as it hit the surface.</p>
                    </div>
                    <img src="/pages/physics/courses/reflectionOfLight.svg" alt="" />
                </div>
                
                <div className={styles.course}>
                    <div className={styles.shape}>Medium</div>
                    <div className={styles.cDesc}>
                        <h2>Ray Optics</h2>
                        <p>Reflection is when light bounces off an object. If the surface is smooth and shiny, like glass, water or polished metal, the light will reflect at the same angle as it hit the surface.</p>
                    </div>
                    <img src="/pages/physics/courses/reflectionOfLight.svg" alt="" />
                </div>
            </div>
        </div>

        </>
    )
}

export default physics;
