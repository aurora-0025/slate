import React from "react";
import { useAuth } from "../../context/AuthContext";
import navBar from "../components/navBar";
import styles from "../../styles/bioCourse.module.css"
import { collection, doc, onSnapshot, setDoc } from "firebase/firestore";
import { db } from "../../firebase/clientApp";
import { useEffect, useState } from "react";
import Image from "next/image";


const Cell = ()=>{
    const {user} = useAuth();

    const [User, setUser] = useState<any>({userData: null, id:"initial"})
      
    const markDone = async()=>{
       User.userData.courses.biology.cell = true;
       User.userData.courses.biology.completed += 1;
       User.userData.courses.biology.incomplete -= 1;
       if(User.userData.progress1 != "biology"){
        User.userData.progress2 = User.userData.progress1;
        User.userData.progress1 = "biology";
       }
       
      await setDoc(doc(db, "users", User.id), User.userData);
    }
    const markNotDone = async()=>{
       User.userData.courses.biology.cell = false;
       User.userData.courses.biology.completed -= 1;
       User.userData.courses.biology.incomplete += 1;
       if(User.userData.progress1 != "biology"){
        User.userData.progress2 = User.userData.progress1;
        User.userData.progress1 = "biology";
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
                  <h1>Cell</h1>
                  <button>View Notes</button>
          </div>
          <div className={styles.para}>
            <p>
             All plants and animals are made of the building blocks we call cells.<br></br><br></br>Many living things consist of vast numbers of cells working in concert with one another.<br></br><br></br>Other forms of life, however, are made of only a single cell, such as the many species of bacteria and protozoa.<br></br><br></br>Cells share many common features, yet they can look wildly different. In fact, cells have adapted over billions of years to a wide array of environments and functional roles.<br></br><br></br>Still, as different as these cells are, they all rely on the same basic strategies to keep the outside out, allow necessary substances in and permit others to leave, maintain their health, and replicate themselves. In fact, these traits are precisely what make a cell a cell.
            </p>
          </div>
          <img alt="" src="/pages/biology/courses/cell/c1.svg" className={styles.image} />
          <h2>What defines a cell?</h2>
          <div className={styles.para}>
            <p>
             All cells are surrounded by a structure called the cell membrane — which, much like the walls of a house, serves as a clear boundary between the cell&#39;s internal and external environments.<br></br><br></br>The cell membrane is sometimes also referred to as the plasma membrane.<br></br><br></br>Cell membranes are based on a framework of fat-based molecules called phospholipids, which physically prevent water-loving, or hydrophilic, substances from entering or escaping the cell.<br></br><br></br>These membranes are also studded with proteins that serve various functions. Some of these proteins act as gatekeepers, determining what substances can and cannot cross the membrane.<br></br><br></br>Nucleic acids are the molecules that contain and help express a cell&#39;s genetic code.<br></br><br></br>There are two major classes of nucleic acids: deoxyribonucleic acid (DNA) and ribonucleic acid (RNA).<br></br><br></br>DNA is the molecule that contains all of the information required to build and maintain the cell<br></br><br></br>RNA has several roles associated with expression of the information stored in DNA.<br></br><br></br>Proteins are a second type of intracellular organic molecule.<br></br><br></br>These substances are made from chains of smaller molecules called amino acids, and they serve a variety of functions in the cell, both catalytic and structural.<br></br><br></br>Carbohydrates, the starches and sugars in cells, are another important type of organic molecule.<br></br><br></br>Simple carbohydrates are used for the cell&#39;s immediate energy demands, whereas complex carbohydrates serve as intracellular energy stores. 
            </p>
          </div>
          <h2>What are the different categories of Cells?</h2>
          <div className={styles.para}>
            <p>
             If the DNA within a cell is not separated from the cytoplasm, then that cell is a prokaryote.<br></br><br></br>All known prokaryotes, such as bacteria and archaea, are single cells.<br></br><br></br>In contrast, if the DNA is partitioned off in its own membrane-bound room called the nucleus, then that cell is a eukaryote.<br></br><br></br>Some eukaryotes, like amoebae, are free-living, single-celled entities. 
            </p>
          </div>
          <h2>How did Cells originate?</h2>
          <div className={styles.para}>
            <p>
            This original cell was likely little more than a sac of small organic molecules and RNA-like material that had both informational and catalytic functions.<br></br><br></br>Over time, the more stable DNA molecule evolved to take over the information storage function, whereas proteins, with a greater variety of structures than nucleic acids, took over the catalytic functions. 
            </p>
          </div>
          <img alt="" src="/pages/biology/courses/cell/c2.svg" className={styles.image} />
          <div className={styles.para}>
            <p>
            Of course, prokaryotic cells have continued to evolve as well.<br></br><br></br>Different species of bacteria and archaea have adapted to specific environments, and these prokaryotes not only survive but thrive without having their genetic material in its own compartment.<br /><br />For example, certain bacterial species that live in thermal vents along the ocean floor can withstand higher temperatures than any other organisms on Earth.
            </p>
          </div>

          <div className={styles.sign}>
                <h3>Cell</h3>
                <p>by Rhogerald.</p>
            </div>
          
          <div className={styles.end}>
                    <h2 className={styles.subhead}>You have reached the end of the course!</h2>
                    {!User.userData.courses.biology.cell?(
                    <button onClick={()=>markDone()}>Mark as Done</button>
                    ):(<button onClick={()=>markNotDone()}>Mark as Incomplete</button>)}
                </div>
            </div>
        </div>
        ):<div>Loading</div>
        }
        </>
          )}
          export default Cell;