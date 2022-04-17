import React, { useEffect, useState } from "react";
import { useAuth } from "../../context/AuthContext";
import navBar from "../components/navBar";
import styles from "../../styles/chemCourse.module.css"
import { collection, doc, onSnapshot, setDoc } from "firebase/firestore";
import { db } from "../../firebase/clientApp";

const IntroToOrganicChemistry = ()=>{
  const {user} = useAuth();

  const [User, setUser] = useState<any>({userData: null, id:"initial"})
    
  const markDone = async()=>{
     User.userData.courses.chemistry.intro_to_organic_chemistry = true;
     User.userData.courses.chemistry.completed += 1;
     User.userData.courses.chemistry.incomplete -= 1;
     if(User.userData.progress1 != "chemistry"){
      User.userData.progress2 = User.userData.progress1;
      User.userData.progress1 = "chemistry";
     }
     
    await setDoc(doc(db, "users", User.id), User.userData);
  }
  const markNotDone = async()=>{
     User.userData.courses.chemistry.intro_to_organic_chemistry = false;
     User.userData.courses.chemistry.completed -= 1;
     User.userData.courses.chemistry.incomplete += 1;
     if(User.userData.progress1 != "chemistry"){
      User.userData.progress2 = User.userData.progress1;
      User.userData.progress1 = "chemistry";
     }

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
          <div className={styles.title}>
                  <h1>Introduction To Organic Chemistry</h1>
                  <button>View Notes</button>
          </div>
          <div>
            <p>
              Organic chemistry is the study of carbon compounds that always contain carbon and it is limited to other elements.<br></br><br></br>Compounds obtained from plants and animals were termed organic to indicate their ultimate source was a living organism.<br></br><br></br>Organic chemistry is one of the most important disciplines of science which deals with the study of carbon compounds especially hydrocarbons and their derivatives.
            </p>
          </div>
          <h2>Tetravalency of Carbon Shapes</h2>
          <div className={styles.ol}>
            <ol>
              <li>Catenation – Catenation can be defined as the self-linking of atoms of an element to form chains and rings. This definition can be extended to include the formation of layers (two-dimensional catenation) and space lattices (three-dimensional catenation).</li>
              <li>Tetravalency and small size – Carbon exhibits’ tetravalency. The tetravalency of carbon can be satisfied by forming bonds with carbon, hydrogen or other atoms. The carbon atom has 4 electrons in its valence shell. In order to account tetravalency it is believed during the process of bond formation which is energy-releasing process the two electrons in the 2s orbital get unpaired and out of them, one is promoted to empty orbital.</li>
            </ol>
          </div>
          <img src="/pages/chemistry/courses/introductionToOrganicChemistry/ioc1.svg" className={styles.image} />
          <h2>Structural Representations of Organic Compounds</h2>
          <div className={styles.ol}>
            <ol>
              <li>Complete Structural Formula – Full structural equations show all the atoms in a molecule, the types of bonds that bind them, and how they are interconnected.</li>
              <li>Condensed Structural Formula – The Condensed structural formula is used to save space, structural formulas are conveniently abbreviated as condensed structural formulas.</li>
              <li>Bond Line Structural Formula – A bond-line structure is a less cluttered drawing than a condensed structural formula. However, to understand the simplified bond-line structure, the reader has to mentally add many more features to comprehend the overall structure.</li>
            </ol>
          </div>
          <h2>Classification of Organic Compounds</h2>
          <div className={styles.ol}>
              <ol>
                  <li>Acyclic or Open Chain Compounds & Alicyclic or Closed Chain or Ring Compounds – Organic compounds are classified as open-chain compounds and closed chain compounds in terms of the carbon chain. Also termed as Organic Compounds Acyclic or Open Chain or Aliphatic Compounds Cyclic or Closed Chain or Ring Compounds Alkanes Alkenes Alkynes</li>
                  <li>Aromatic Compounds – Plants and micro-organisms have an exclusive route to benzene-ring compounds. The great majority of aromatic compounds in nature, therefore, are produced by plants and microorganisms, and animals are dependent upon plants for many aromatic compounds either directly or Indirectly.</li>
                  <li>Heterocyclic Aromatic Compounds – In the twentieth century it is witnessed that the first inorganic heteroaromatic compound produced in the laboratory. Some of these heterocyclic aromatic compounds are very important in biochemical processes, drugs, and agrochemicals.</li>
              </ol>
          </div>
          <img src="/pages/chemistry/courses/introductionToOrganicChemistry/ioc2.svg" className={styles.image} />
         <h2>Nomenclature of Organic Compounds</h2>
          <div className={styles.ol}>
            <ol>
              <li>IUPAC Rules – Nomenclature of Organic Compounds follows recommendations of IUPAC in naming organic compounds, carbocations, etc. The International Union of Pure and Applied Chemistry (IUPAC) formulated rules for naming organic compounds.</li>
              <li>Types of Chemical Nomenclature – Chemical nomenclature is based primarily on naming a presumed geometrical arrangement of atoms. The International Union of Pure and Applied Chemistry(IUPAC) maintains several commissions that deal with the naming of chemical substances. In general, the approach of IUPAC is to present rules for arriving at names systematically.</li>
            </ol>
          </div>
          <h2>Isomerism</h2>
          <div className={styles.ol}>
            <ol>
              <li>Structural Isomerism – Structural Isomerism arises due to different arrangement of atoms within the molecule. Two molecules are structural isomers if they share the same molecular formula.</li>
              <li>Stereoisomerism – Stereo-isomers are isomeric molecules having the same molecular formula and the same sequence of bonded atoms, but are only different in the 3D orientations of their atoms in space. Stereoisomerism may be of two types viz. geometrical (or c\s-trans) isomerism and optical (or d-1 or mirror-image) isomerism.</li>
            </ol>
          </div>
          <h2>Fundamental Concepts in Organic Reaction Mechanism</h2>
          <div className={styles.ol}>
            <ol>
              <li>The Shapes of Carbon Compounds – Tetravalent carbon atom is the building block of structural organic chemistry. The four hydrogen atoms, with four carbon atoms, form a structure known as a tetrahedron.</li>
              <li>Functional Groups – Functional groups were introduced as a useful method for organizing this vast number of compounds because chemical reactions occur at the functional group and compounds with the same functional group undergo similar reactions</li>
              <li>Homologous Series – A series of organic compounds in which every succeeding member differs from the previous one called Homologous Series.</li>
            </ol>
          </div> 
        <div className={styles.sign}>
                <h3>Introduction to Organic Chemistry</h3>
                <p>by Hipster16</p>
            </div>
        <div className={styles.end}>
                <h2 className={styles.subhead}>You have reached the end of the course!</h2>
                {!User.userData.courses.chemistry.intro_to_organic_chemistry?(
                <button onClick={()=>markDone()}>Mark as Done</button>
                ):(<button onClick={()=>markNotDone()}>Mark as Incomplete</button>)}
            </div>
        </div>
        </div>
        ):<div>Loading</div>
        }
        </>
          )}
    export default IntroToOrganicChemistry;