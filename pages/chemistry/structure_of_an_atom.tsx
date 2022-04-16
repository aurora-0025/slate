import React from "react";
import { useAuth } from "../../context/AuthContext";
import navBar from "../components/navBar";
import styles from "../../styles/chemCourse.module.css"

const StructureOfAnAtom = ()=>{
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
                <h1>Structure of an Atom</h1>
                <button>View Notes</button>
        </div>
        <div className={styles.para} >
            <p>Atomic structure refers to the structure of an atom comprising a nucleus (centre) in which the protons (positively charged) and neutrons (neutral) are present.<br></br><br></br>The negatively charged particles called electrons revolve around the centre of the nucleus.</p>
        <h2>Cathode Ray Experiment</h2>
        <div className={styles.ul} >
            <ul>
                <li> J. J. Thomson discovered the existence of electrons.</li>
                <li>He did this using a cathode ray tube, which is a vacuum-sealed tube with a cathode and anode on one end that created a beam of electrons travelling towards the other end of the tube.</li>
                <li>The air inside the chamber is subjected to high voltage and electricity flows through the air from the negative electrode to the positive electrode.</li>
                <li>The characteristics of cathode rays (electrons) do not depend upon the material of electrodes and the nature of the gas present in the cathode ray tube.</li>
                <li>The experiment showed that the atom was not a simple, indivisible particle and contained at least one subatomic particle – the electron.</li>
            </ul>
        </div>
        </div>
        <img src="/pages/chemistry/courses/structureOfAnAtom/soaa1.svg" className={styles.image} />
        <h2>Electrons</h2>
        <div className={styles.ul} >
            <ul>
                <li>Electrons are the negatively charged sub-atomic particles of an atom.</li>
                <li>The mass of an electron is considered to be negligible, and its charge is -1.</li>
                <li>The symbol for an electron is e–</li>
                <li>Electrons are extremely small.</li>
                <li>They are found outside the nucleus.</li>
            </ul>
        </div>
        <h2>Thomson’s model of an atom</h2>
        <div className={styles.ul}>
            <ul>
                <li>According to Thomson,(i) An atom consists of a positively charged sphere and the electrons are embedded in it. (ii) The negative and positive charges are equal in magnitude. So, the atom as a whole is electrically neutral</li>
                <li>The first model of an atom to be put forward and taken into consideration.</li>
                <li>He proposed a model of the atom be similar to that of a Christmas pudding/watermelon.</li>
                <li>The red edible part of the watermelon is compared with the positive charge in the atom.</li>
                <li>The black seeds in the watermelon are compared with the electrons which are embedded on it.</li>
            </ul>
        </div>
        <img src="/pages/chemistry/courses/structureOfAnAtom/soaa2.svg" className={styles.image} />
        <h2>Rutherford’s model of an atom</h2>
        <div className={styles.para}>
            Rutherford concluded the model of the atom from the α-particle scattering experiment as:
        </div>
        <div className={styles.ol}>
            <ol>
                <li>There is a positively charged centre in an atom called the nucleus. Nearly all the  mass of an atom resides in the nucleus.</li>
                <li>The electrons revolve around the nucleus in well-defined orbits.</li>
                <li> The size of the nucleus is very small as compared to the size of the atom.</li>
            </ol>
        </div>
        <img src="/pages/chemistry/courses/structureOfAnAtom/soaa3.svg" className={styles.image}/>
        <h2>Drawbacks of Rutherford’s model</h2>
        <div className={styles.ul}>
            <ul>
                <li>He explained that the electrons in an atom revolve around the nucleus in well-defined orbits. Particles in a circular orbit would experience acceleration.</li>
                <li>Thus, the revolving electron would lose energy and finally fall into the nucleus.</li>
                <li>But this cannot take place as the atom would be unstable and matter would not exist in the form we know.</li>
            </ul>
        </div>
        <div className={styles.sign}>
                <h3>Structure of an Atom</h3>
                <p>by Hipster16</p>
            </div>
        <div className={styles.end}>
                    <h2>You have reached the end of the course!</h2>
                    <button>Mark as done.</button>
        </div>
        </div>
    </>
  )}
export default StructureOfAnAtom;