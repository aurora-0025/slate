import React, { useEffect, useState } from "react";
import { useAuth } from "../../context/AuthContext";
import navBar from "../components/navBar";
import styles from "../../styles/mathCourse.module.css"
import { collection, doc, onSnapshot, setDoc } from "firebase/firestore";
import { db } from "../../firebase/clientApp";


const AreaOfTriangle = ()=>{
    const {user} = useAuth();

    const [User, setUser] = useState<any>({userData: null, id:"initial"})
      
    const markDone = async()=>{
       User.userData.courses.maths.area_of_triangles = true;
       User.userData.courses.maths.completed += 1;
       User.userData.courses.maths.incomplete -= 1;
       if(User.userData.progress1 != "maths"){
        User.userData.progress2 = User.userData.progress1;
        User.userData.progress1 = "maths";
       }
       
      await setDoc(doc(db, "users", User.id), User.userData);
    }
    const markNotDone = async()=>{
       User.userData.courses.maths.area_of_triangles = false;
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
        <div className={styles.prereq}>
                <p>This is an <b>advanced</b> course, We recommended you to <b>complete</b> these courses before proceeding with the current selected course:</p>
                <ul>
                    <li>Pythagoras Theorem</li>
                </ul>   
            </div>
        <div className={styles.title}>
                <h1>Area of Triangles</h1>
                <button>View Notes</button>
        </div>
        <div className={styles.para} >
            The area of a triangle is defined as the total region that is enclosed by the three sides of any particular triangle.
        </div>
        <div>
            The general formula to find the area of the triangle is given by half of the product of its base and height.
        </div>
        <img alt="" src="/pages/maths/courses/areaOfTriangles/aot1.svg" className={styles.image} />
        <div>
            However this is only applicable to right angled triangles
        </div>
        <h2>Equilateral Triangle</h2>
        <div>
            An equilateral triangle is a triangle where all sides are equal and all angles are equal to 60°.
        </div>
        <img alt="" src="/pages/maths/courses/areaOfTriangles/aot2.svg" className={styles.image} />
        <h2>Isosceles Triangle</h2>
        <div>
            An isosceles triangle has two of its sides equal and also the angles opposite the equal sides are equal.
        </div>
        <img alt="" src="/pages/maths/courses/areaOfTriangles/aot3.svg" className={styles.image} />
        <h2>Scalene Triangle (Heron’s Formula)</h2>
        <div>
            <p>
                The area of a triangle with 3 sides of different measures can be found using Heron’s formula.<br></br><br></br>Heron’s formula includes two important steps. The first step is to find the semi perimeter of a triangle by adding all the three sides of a triangle and dividing it by 2.<br></br><br></br>The next step is that, apply the semi-perimeter of triangle value in the main formula called “Heron’s Formula” to find the area of a triangle.
            </p>
        </div>
        <img alt="" src="/pages/maths/courses/areaOfTriangles/aot4.svg" className={styles.image} />
        <div className={styles.sign}>
                <h3>Area of Triangles</h3>
                <p>by Aurora0025</p>
            </div>
            <div className={styles.end}>
                <h2 className={styles.subhead}>You have reached the end of the course!</h2>
                {!User.userData.courses.maths.area_of_triangles?(
                <button onClick={()=>markDone()}>Mark as Done</button>
                ):(<button onClick={()=>markNotDone()}>Mark as Incomplete</button>)}
            </div>
        </div>
        </div>
        ):<div>Loading</div>
        }
        </>
          )}
export default AreaOfTriangle;