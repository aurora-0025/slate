import { useAuth } from "../../context/AuthContext";
import navBar from "../components/navBar";
import styles from "../../styles/bioCourse.module.css"
import { collection, doc, onSnapshot, setDoc } from "firebase/firestore";
import { db } from "../../firebase/clientApp";
import { useEffect, useState } from "react";

const HumanBody = ()=>{
    const {user} = useAuth();

    const [User, setUser] = useState<any>({userData: null, id:"initial"})
      
    const markDone = async()=>{
       User.userData.courses.biology.cell = true;
       User.userData.courses.biology.completed += 1;
       User.userData.courses.biology.incomplete -= 1;
       User.userData.progress2 = User.userData.progress1;
       User.userData.progress1 = "biology";
       
      await setDoc(doc(db, "users", User.id), User.userData);
    }
    const markNotDone = async()=>{
       User.userData.courses.biology.cell = false;
       User.userData.courses.biology.completed -= 1;
       User.userData.courses.biology.incomplete += 1;
       User.userData.progress2 = User.userData.progress1;
       User.userData.progress1 = "biology";
  
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
                    <li>Cell</li>
                </ul>   
            </div>
        <div className={styles.title}>
                  <h1>The Human Body</h1>
                  <button>View Notes</button>
          </div>
          <div className={styles.para}>
            <p>
            If we were to “break apart” the human body at the microscopic level, then the cell would constitute its most basic unit.<br></br><br></br>The average adult has somewhere between 30 – 40 trillion cells, and an estimated 242 billion new cells are produced every day. When a select group of cells with similar functions come together, it forms a tissue.<br></br><br></br>Tissues cumulate into organs, group of organs form organ systems and eventually, a complete organism.
            </p>
          </div>
          <img src="src=/pages/biology/courses/cell/hb1.svg" className={styles.image} />
        
            <h2>Skeleton</h2>
          <div className={styles.para}>
            <p>
             The human body exhibits a variety of movements from walking and running to crawling, jumping and climbing. <br></br><br></br>The framework that enables us to do all these activities is the skeleton. Humans have as much as 300 bones at birth. <br></br><br></br>However, the bones start to fuse with age. At adulthood, the total number of bones is reduced to 206.
            </p>
          </div>

          <h2>Muscles</h2>
          <div className={styles.para}>
            <p>
             Muscles are specialised tissues which assist the bones in locomotion. Muscles are attached to the bones through tendons.<br></br><br></br>Movement of limbs happens due to the contraction and relaxation of the corresponding muscles present in that region.<br></br><br></br>Joints help in the flexibility of bones, but a bone cannot be bent or stretched until a muscle acts on it.<br></br><br></br>In other words, the muscles attached to that bone pulls it to the direction of movement.<br></br><br></br>Furthermore, most movement involves muscles that work as a pair. For example, when we bend our arm, muscles in that region contract, become shorter and stiffer and pull the bones to the direction of movement.<br></br><br></br>For relaxation (stretching), muscles in the opposite direction have to pull the bones towards it.
            </p>
          </div>
        <h2>Circulatory System</h2>
        <div className={styles.para}>
            <p>
                The circulatory system is also referred to as the cardiovascular system. <br></br><br></br>It comprises the heart and all the blood vessels: arteries, capillaries, and veins. There are essentially two components of circulation, namely:
            </p>
        </div>
        <div className={styles.ul}>
            <ul>
                <li>Systemic circulation</li>
                <li>Pulmonary circulation</li>
            </ul>
        </div>
        <div className={styles.para}>
            <p>
                Besides these two, there is a third type of circulation called Coronary circulation. <br></br><br></br>Because blood is the body’s connective tissue, it helps to transport essential nutrients and minerals to the cells and waste byproducts away from it.
            </p>
        </div>
        <h2>Digestive system</h2>
        <div className={styles.para}>
            <p>
                The digestive system breaks down food and assimilates nutrients into the body, which the body then uses for growth and cell repair.<br></br><br></br>The major components of the digestive system are:
            </p>
        </div>
        <div className={styles.ul}>
            <ul>
                <li>Mouth</li>
                <li>Teeth</li>
                <li>Tongue</li>
                <li>Oesophagus</li>
                <li>Stomach</li>
                <li>Liver</li>
                <li>Pancreas</li>
                <li>Gastrointestinal tract</li>
                <li>Small and large intestines</li>
                <li>Rectum</li>
            </ul>
        </div>
        <div className={styles.para}>
            <p>
                The process of digestion starts with mastication (chewing food). Then, the saliva mixes with food and forms a bolus, a small rounded mass that can be easily swallowed. Once swallowed, the food travels down the oesophagus and into the stomach. The stomach secretes strong acids and powerful enzymes that break the food down into a paste.<br></br>It then moves into the small intestine where the food is broken down even more because of the bile secreted by the liver and powerful, digestive enzymes from the pancreas. This is the stage at which nutrients are absorbed from the food.<br></br>The leftover materials (stool) then move on to the large intestine where it transforms from liquid to solid, as water is removed. Finally, it gets pushed into the rectum, ready to be eliminated from the body.
            </p>
        </div>
        <h2>Reproductive System</h2>
        <div className={styles.para}>
            <p>
                The human reproductive system is also known as the genital system that comprises internal and external organs that help in reproduction.<br></br><br></br>It varies for both males and females. Hormones, fluids, and pheromones are all connective accessories for the reproductive organs to function.
            </p>
        </div>
        <h2>Respiratory System</h2>
        <div className={styles.para}>
            <p>
                The respiratory process involves the intake of oxygen, and the exhale of carbon dioxide from the body. <br></br><br></br>This system is also known as the ventilatory system, gas exchange system or respiratory apparatus. Vertebrates like human beings possess lungs for respiration.<br></br><br></br>The process of respiration starts with the cycle of inhalation and exhalation.<br></br><br></br>Inhalation results in the oxygen entering into the body and exhalation results in carbon dioxide exiting from the body.<br></br><br></br>Anatomically, the respiratory system comprises the following organs:
            </p>
        </div>
        <div className={styles.ul}>
            <ul>
                <li>Trachea</li>
                <li>Bronchi</li>
                <li>Bronchioles</li>
                <li>Lungs</li>
                <li>Diaphragm</li>
            </ul>
        </div>
        <div className={styles.sign}>
                <h3>The Human Body</h3>
                <p>by Rhogerald.</p>
            </div>

        <div className={styles.end}>
                    <h2 className={styles.subhead}>You have reached the end of the course!</h2>
                    {!User.userData.courses.biology.reflection_of_light?(
                    <button onClick={()=>markDone()}>Mark as Done</button>
                    ):(<button onClick={()=>markNotDone()}>Mark as Incomplete</button>)}
                </div>
            </div>
        </div>
        ) :<div>Loading</div>
        }
        </>
        )}
        export default HumanBody;