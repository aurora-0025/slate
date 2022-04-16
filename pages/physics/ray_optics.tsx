import React from "react";
import { useAuth } from "../../context/AuthContext";
import navBar from "../components/navBar";
import styles from "../../styles/phyCourse.module.css"
import { useEffect, useState } from "react";
import { collection, doc, onSnapshot, setDoc } from "firebase/firestore";
import { db } from "../../firebase/clientApp";

const rayOptics = ()=>{

    const {user} = useAuth();

    const [User, setUser] = useState<any>({userData: null, id:"initial"})
      
    const markDone = async()=>{
       User.userData.courses.physics.ray_optics = true;
       User.userData.courses.physics.completed += 1;
       User.userData.courses.physics.incomplete -= 1;
       User.userData.progress2 = User.userData.progress1;
       User.userData.progress1 = "physics";
       
      await setDoc(doc(db, "users", User.id), User.userData);
    }
    const markNotDone = async()=>{
       User.userData.courses.physics.ray_optics = false;
       User.userData.courses.physics.completed -= 1;
       User.userData.courses.physics.incomplete += 1;
       User.userData.progress2 = User.userData.progress1;
       User.userData.progress1 = "physics";
  
      await setDoc(doc(db, "users", User.id), User.userData);
    }
  
    useEffect(()=> onSnapshot(collection(db, "users"), (snapshot)=> {
      if(user){
          snapshot.docs.map(doc => {if(doc.data().uid == user.uid)
          setUser({ userData: doc.data(), id: (doc.id)});      
          })
      }
  }) , [])  

  return (
    <>
    {User.userData ? (
    <div>
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
            <div className={styles.prereq}>
                <p>This is an <b>advanced</b> course, We recommended you to <b>complete</b> these courses before proceeding with the current selected course:</p>
                <ul>
                    <li>Reflection Of Light 1 & 2</li>
                </ul>   
            </div>
            <div className={styles.title}>
                <h1>Ray Optics</h1>
                <button>View Notes</button>
            </div>
            <h2 className={styles.subhead}>Refraction of Light</h2>
            <div className={styles.para}>
                Refraction is the bending of a wave when it enters a medium where its speed is different.
            </div>
            <div className={styles.para}>
                The refraction of light when it passes from a rarer medium to a denser medium bends the light ray toward the normal to the boundary between the two media.
            </div>
            <div className={styles.para}>
                The amount of bending depends on the indices of refraction of the two media and is described quantitatively by Snell's Law.
            </div>
            <img className={styles.image} src="/pages/physics/courses/rayOptics/ro1.svg" style={{width: "700px", height: "700px"}}/>
            <h2 className={styles.subhead}>Index of Refraction</h2>
            <div className={styles.para}>
                The index of refraction is defined as the speed of light in vacuum divided by the speed of light in the medium.
            </div>
            <div className={styles.para}>
                It is derived from the given formula below:
            </div>
            <img className={styles.image} src="/pages/physics/courses/rayOptics/ro1_2.svg" style={{width: "150px", height:"150px"}}/>
            <div className={styles.para}>
                The indices of refraction of some common substances are given below.
            </div>
            <div className={styles.para}>
                The values given are approximate and do not account for the small variation of index with light wavelength which is called dispersion.
            </div>
            
            

            <h2 className={styles.subhead}>Snell's Law</h2>
            <div className={styles.para}>
                Snell's Law relates the indices of refraction n of the two media to the directions of propagation in terms of the angles to the normal.
            </div>
            <div className={styles.para}>
                Snell's law can be derived from Fermat's Principle or from the Fresnel Equations.
            </div>
            <img className={styles.image} src="/pages/physics/courses/rayOptics/ro2.svg" style={{ width: "100", height: "100"}}/>

            <h2 className={styles.subhead}>Laws of Refraction</h2>
            <div className={styles.para}>
                Two laws of refraction are given as below:
            </div>
            <div className={styles.ol}>
                <ol type="i">
                    <li>The incident ray, refracted ray and the normal to the refracting surface at the point of incidence lie in the same plane.</li>
                <   li>The ratio of the sine of the angle of incidence to the sine of the angle of refraction is constant for the two given media. This constant is denoted by n and is called the relative refractive index.</li>
                </ol>
            </div>
            <h2 className={styles.subhead}>Critical Angle</h2>
            <div className={styles.para}>
                Total internal reflection is a complete reflection of a ray of light within a medium such as water or glass from the surrounding surfaces back into the medium. It only occurs when both of the following two conditions are met:
            </div>
            <div className={styles.ul}>
                <ul>
                    <li>A light ray is in the more dense medium and approaching the less dense medium.</li>
                    <li>The angle of incidence for the light ray is greater than the so-called critical angle.</li>
                </ul>
            </div>
            <div className={styles.para}>
                The critical angle is the angle of incidence, for which the angle of refraction is 90°.  If light enters a denser medium from a comparatively rarer medium, then the direction of light changes and the light ray bends towards the normal.
            </div>

            <h2 className={styles.subhead}>Total Internal Reflection</h2>
            <img className={styles.image} src="/pages/physics/courses/rayOptics/ro3.svg"/>
            <div className={styles.para}>
                When a ray of light travelling from denser medium to rarer medium is incident at the interface of two medium at an angle greater than the critical angle for the two media, the ray is totally reflected back to denser medium.
            </div>
            <div className={styles.para}>
                This phenomenon is called Total Internal Reflection. It occurs only when angle of incidence in denser medium is greater and not equal than critical angle.
            </div>
            <div className={styles.sign}>
                <h3>Reflection of Light</h3>
                <p>by bluberri.</p>
            </div>
            <div className={styles.end}>
                    <h2 className={styles.subhead}>You have reached the end of the course!</h2>
                    {!User.userData.courses.physics.reflection_of_light?(
                    <button onClick={()=>markDone()}>Mark as Done</button>
                    ):(<button onClick={()=>markNotDone()}>Mark as Incomplete</button>)}
                </div>
            </div>
        </div>
        ):<div>Loading</div>
        }</>
  )}
export default rayOptics;