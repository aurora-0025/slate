import { useAuth } from "../../context/AuthContext";
import navBar from "../components/navBar";
import styles from "../../styles/phyCourse.module.css"
import ReflectionInteractive from "../components/interactive/reflection";
import { useEffect, useState } from "react";
import { collection, doc, onSnapshot, setDoc } from "firebase/firestore";
import { db } from "../../firebase/clientApp";

const reflectionOfLight = ()=>{
  const {user} = useAuth();

  const [User, setUser] = useState<any>({userData: null, id:"initial"})
    
  const markDone = async()=>{
     User.userData.courses.physics.reflection_of_light = true;
     User.userData.courses.physics.completed += 1;
     User.userData.courses.physics.incomplete -= 1;
     User.userData.progress2 = User.userData.progress1;
     User.userData.progress1 = "physics";
     
    await setDoc(doc(db, "users", User.id), User.userData);
  }
  const markNotDone = async()=>{
     User.userData.courses.physics.reflection_of_light = false;
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
                <div className={styles.title}>
                    <h1>Reflection Of Light</h1>
                    <button>View Notes</button>
                </div>
                <div className={styles.para}>
                    <b>Light</b> is a form of <b>energy</b> which enables us to see objects and the straight line along which it travels is called <b>ray of light</b>.
                </div>
                <div className={styles.para}>
                    Reflection of Light is the process of sending back the light rays which falls on the surface of an object
                </div>
                <img className={styles.image} src="/pages/physics/courses/reflectionOfLight/rol1.svg" style={{width: "500px", height: "500px"}}/>
                <h2 className={styles.subhead}>Reflection of Light from plane mirror</h2>
                <div className={styles.para}>
                    Before understanding the laws of reflection of light, lets understand the meaning of some important terms such as, <b>incident ray, reflected ray, point of incidence, <b>normal</b> (at the point of incidence)</b>, <b>angle of incidence and angle of reflection.</b>
                </div>
                <div className={styles.para}>
                    <b>Incident ray:</b> The ray of light falling on the surface of a mirror is called incident ray.
                </div>
                <div className={styles.para}>
                    <b>Point of incidence:</b> The point at which the incident ray falls on the mirror surface is called point of incidence
                </div>
                <div className={styles.para}>
                    <b>Reflected ray:</b> The ray of light which is sent back by the mirror from the point of incidence is called reflected ray.
                </div>
                <div className={styles.para}>
                    <b>Normal:</b> A line perpendicular or at the right angle to the mirror surface at the point of incidence is called normal.
                </div>
                <div className={styles.para}>
                    <b>Angle of incidence:</b> The angle made by the incident ray with the normal is called angle of incidence.
                </div>
                <h2 className={styles.subhead}>Laws of reflection of light</h2>
                <div className={styles.para}>
                    The laws of reflection of light apply to both plane mirror as well as spherical mirror. In this article we will discuss about the images formed by the plane mirror
                </div>
                <div className={styles.para}>
                    <b>First law of reflection:</b> According to the first law, the incident ray, reflected ray and normal, all lie in the same plane.
                </div>

                <div className={styles.para}>
                    <b>Second law of reflection:</b> According to the second law, the angle of reflection is always equal to the angle of incidence.            
                </div>

                <ReflectionInteractive />


                <h2 className={styles.subhead}>Objects and Images</h2>
                <div className={styles.para}>Anything which gives out light with off its own of reflected by it is called an <b>object</b>. For example, a bulb, a candle, a tree etc.</div>
                <div className={styles.para}>When the light rays coming from an object are reflected from a mirror then an optical appearance which is produced is called an image. For example, when we look into the mirror, we see the <b>image</b> of our face. Images are of two types, <b>real</b> image and <b>virtual</b> image.</div>

                <h2 className={styles.subhead}>Lateral Inversion</h2>
                <div className={styles.para}>When we stand in front of a mirror and lift our right hand than the image formed will lift its left hand. Therefore the right side of our body becomes the left side in its image and the left side of our body becomes the right side in its image in mirror.</div>
                <div className={styles.para}>The change of sides of an object in its mirror image is called <b>lateral inversion</b>. It happens due to reflection of light.</div>

                <h2 className={styles.subhead}>Formation of image in a plane mirror</h2>
                <img className={styles.image} src="/pages/physics/courses/reflectionOfLight/rol3.svg" style={{width: "500px", height: "500px"}}/>
                <div className={styles.para}>The nature of image formed by a plane mirror is:</div>
                <div className={styles.ul}>
                    <ul>
                        <li>Virtual and erect.</li>
                        <li>Size of image formed is equal to the size of object.</li>
                        <li>Image is at same distance behind the mirror as the object is in front of the mirror.</li>
                        <li>Image formed in plane mirror is laterally inverted.</li>
                    </ul>
                </div>
                <div className={styles.para}>Uses of plane mirror:</div>
                <div className={styles.ul}>
                    <ul>
                        <li>Mirrors on our dressing table and bathrooms are plane mirrors and are used to see ourselves.</li>
                        <li>They are fixed on the inside walls of jewellery shops to make them look big.</li>
                        <li>They are fitted at blind turns on the roads so that the driver can see the vehicles coming from other side.</li>
                        <li>Used in making periscopes.</li>
                    </ul>
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
    )
}

export default reflectionOfLight;