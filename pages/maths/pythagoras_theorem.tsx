import React, { useEffect, useState } from "react";
import { useAuth } from "../../context/AuthContext";
import navBar from "../components/navBar";
import styles from "../../styles/mathCourse.module.css"
import { collection, doc, onSnapshot, setDoc } from "firebase/firestore";
import { db } from "../../firebase/clientApp";
import Image  from "next/image";

const PythagorasTheorem = ()=>{
    const {user} = useAuth();

    const [User, setUser] = useState<any>({userData: null, id:"initial"})
      
    const markDone = async()=>{
       User.userData.courses.maths.pythagoras_theorem = true;
       User.userData.courses.maths.completed += 1;
       User.userData.courses.maths.incomplete -= 1;
       if(User.userData.progress1 != "maths"){
        User.userData.progress2 = User.userData.progress1;
        User.userData.progress1 = "maths";
       }
       
      await setDoc(doc(db, "users", User.id), User.userData);
    }
    const markNotDone = async()=>{
       User.userData.courses.maths.pythagoras_theorem = false;
       User.userData.courses.maths.completed -= 1;
       User.userData.courses.maths.incomplete += 1;
       if(User.userData.progress1 != "maths"){
        User.userData.progress2 = User.userData.progress1;
        User.userData.progress1 = "maths";
       }
  
      await setDoc(doc(db, "users", User.id), User.userData);
    }
  
    useEffect(()=> onSnapshot(collection(db, "users"), (snapshot)=> {
      if(user){
          snapshot.docs.map(doc => {if(doc.data().uid == user.uid)
          setUser({ userData: doc.data(), id: (doc.id)});      
          })
      }
  }) , [user])  
  
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
                <img alt="" className={styles.image} src="/pages/maths/courses/pythagorasTheorem/pt1.svg"/>
                <h2>Proof</h2>
                <img alt="" className={styles.image} src="/pages/maths/courses/pythagorasTheorem/pt2.svg"/>
                <div className={styles.para}>
                    We know, △ADB ~ △ABC
                </div>
                <div className={styles.para}>
                    Therefore,
                </div>
                <img alt="" src="" className={styles.image}/>
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
                <h2 className={styles.subhead}>You have reached the end of the course!</h2>
                {!User.userData.courses.maths.pythagoras_theorem?(
                <button onClick={()=>markDone()}>Mark as Done</button>
                ):(<button onClick={()=>markNotDone()}>Mark as Incomplete</button>)}
            </div>
        </div>
        </div>
        ):<div>Loading</div>
        }
        </>
    )}
export default PythagorasTheorem;
