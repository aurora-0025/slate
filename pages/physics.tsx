import React from "react";
import { useAuth } from "../context/AuthContext";
import navBar from "./components/navBar";
import styles from "../styles/physicsSubject.module.css"
import Link from "next/link";
import { useEffect, useState } from "react";
import { collection, onSnapshot } from "firebase/firestore";
import { db } from "../firebase/clientApp";

const Physics = ()=>{
  const {user} = useAuth();

  const [User, setUser] = useState<any>({userData: null, id:"initial"})

  useEffect(()=> onSnapshot(collection(db, "users"), (snapshot)=> {
    if(user){
        snapshot.docs.map(doc => {if(doc.data().uid == user.uid)
        setUser({ userData: doc.data(), id: (doc.id)});      
        })
    }
}) , [])  

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
                <Link href="/physics/reflection_of_light">
                <div className={styles.course}>
                    <div className={styles.shape}>Easy</div>
                    <div className={styles.cDesc}>
                        <h2>Reflection Of Light</h2>
                        <p>Reflection is when light bounces off an object. If the surface is smooth and shiny, like glass, water or polished metal, the light will reflect at the same angle as it hit the surface.</p>
                    </div>
                    <img src="/pages/physics/courses/reflectionOfLight.svg" />
                </div>
                </Link>
                <Link href="/physics/ray_optics">
                <div className={styles.course}>
                    <div className={styles.shape}>Medium</div>
                    <div className={styles.cDesc}>
                        <h2>Ray Optics</h2>
                        <p>Using the basic laws of reflection and refraction, we shall study the image formation by plane and spherical reflecting and refracting surfaces.</p>
                    </div>
                    <img src="/pages/physics/courses/rayOptics.svg" />
                </div>
                </Link>
                {user && User.userData ?(
                    <div>
                    {!User.userData.quiz.physics.done?
                    <div className={styles.end}>
                        <Link href="/quiz/physics"><button>Take A Quiz</button></Link>
                    </div>
                    : 
                    <div className={styles.completed}>
                        <button>Quiz Completed</button>
                    </div>
                    }
                    </div>
                ):
                null
                }

            </div>
        </div>

        </>
    )
}

export default Physics;
