import React, { useEffect, useState } from "react";
import { useAuth } from "../context/AuthContext";
import navBar from "./components/navBar";
import styles from "../styles/analytics.module.css"
import { collection, onSnapshot } from "firebase/firestore";
import { db } from "../firebase/clientApp";
import { DonutChart } from "./components/Chart";


const Analytics = ()=>{
  const {user} = useAuth();

  const [User, setUser] = useState<any>({userData: null, id:"initial"})
  const [Test, setTest] = useState(null)
  


  useEffect(() => {
    if(User.userData){    
      let tests = []
      
      if(User.userData.quiz.physics.done){      
        tests.push({
          name:"physics",
          course1:{
            name: "Reflection Of Light",
            marks: +User.userData.quiz.physics.course1Marks
          },
          course2:{
            name: "Ray Optics",
            marks: +User.userData.quiz.physics.course2Marks
          }
        })
      }
      if(User.userData.quiz.chemistry.done){
        tests.push({
          name:"chemistry",
          course1:{
            name: "Structure Of An Atom",
            marks: +User.userData.quiz.chemistry.course1Marks
          },
          course2:{
            name: "Introduction To Organic Chemistry",
            marks: +User.userData.quiz.chemistry.course2Marks
          }
        })
      }
      if(User.userData.quiz.maths.done){
        tests.push({
          name:"maths",
          course1:{
            name: "Area Of Triangles",
            marks: +User.userData.quiz.maths.course1Marks
          },
          course2:{
            name: "Pythagoras Theorem",
            marks: +User.userData.quiz.maths.course2Marks
          }
        })
      }
      if(User.userData.quiz.biology.done){
        tests.push({
          name:"biology",
          course1:{
            name: "Cell",
            marks: +User.userData.quiz.biology.course1Marks
          },
          course2:{
            name: "Human Body",
            marks: +User.userData.quiz.biology.course2Marks
          }
        })
      }
    if(tests.length > 0) setTest(tests);
    }
  }, [User])  
  
  

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
      {User ? (            
      <div>
          {navBar({buttonText:"go to dashboard"})}
          </div>
      ) : 
      <div>
      {navBar({buttonText:"login"})}
      </div>
      }
        <div className={styles.container}>
          <h1>Analytics</h1>
          {Test ?(
            <div>
            {Test.map((quiz)=>{
             return <div className={styles.chartData}>
               <h2>{quiz.name}</h2>
                {DonutChart({quizData: quiz})}
               </div>
            })}
          </div>
          ): <h2>Attempt a quiz to get the respective analytics.</h2>}
          </div>
        </div>
        ):<div>Loading</div>
        }
        </>
          )}
    export default Analytics;