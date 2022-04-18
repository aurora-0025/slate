import { collection, onSnapshot } from 'firebase/firestore';
import React, { useEffect, useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { db } from '../firebase/clientApp';
import styles from '../styles/Dashboard.module.css';
import Search from './components/search';
import initialDetails from '../lib/searchDetails';
import {Settings} from '@carbon/icons-react'
import Link from 'next/link';
import {Logout} from '@carbon/icons-react'
import barChart from './components/Chart';
import { useRouter } from 'next/router';



const Dashboard = () =>{
    const {user, logOut} = useAuth();

    const [User, setUser] = useState<any>({userData: null, id:"initial"})

    function camelize(str) {
        return (str.charAt(0).toUpperCase() + str.slice(1))
      }
  
    useEffect(()=> onSnapshot(collection(db, "users"), (snapshot)=> {
      if(user){
          snapshot.docs.map(doc => {if(doc.data().uid == user.uid)
          setUser({ userData: doc.data(), id: (doc.id)});      
          })
      }
  }) , [])    
    return(
        <>
        {User.userData ? (
        <div className={styles.mainContainer}>
        <div className={styles.dash}>
        <div className={styles.sideBar}>
            <Link passHref href="/"><h1>Slate</h1></Link>
            <div className={styles.sideBarContainer}>
                <div className={styles.profilePic}>
                    <img src={User.userData.photoURL} />
                </div>
                <p>{User.userData.displayName}</p>
                <p className={styles.email}>{User.userData.email}</p>
                <div className={styles.sideBarLinks}>
                    <Link passHref href="/physics"><p>Physics</p></Link>
                    <Link passHref href="/chemistry"><p>Chemistry</p></Link>
                    <Link passHref href="/maths"><p>Maths</p></Link>
                    <Link passHref href="/biology"><p>Biology</p></Link>
                </div>
            </div>
            <Link passHref href="/" ><button className={styles.logoutButton} onClick={()=> { logOut();}}><Logout size={16} />Logout</button></Link>
        </div>
        <section className={styles.content}>
            <h1>Welcome Back, {User.userData.displayName}</h1>
            <div className={styles.banner}>
                <h1>Start Learning with Slate</h1>
            </div>
           <Search details={initialDetails} />
           <div className={styles.cardsContainer}>
                <div className={styles.cardsRow1}>
                    <Link passHref href="/achievements">
                        <div className={styles.achievementCard}>
                            <div className={styles.achievementHead}>
                                <p className={styles.achievementTitle}>Achievements</p>
                            </div>
                            <div className={styles.achievementBody}>
                                <img src="https://cdn.discordapp.com/attachments/930672624483332096/965148917236920340/Polygon_1.svg" style={{width: "100px"}} />
                                <h2>Physics</h2>
                            </div>
                            <div className={styles.achievementFooter}>
                                feature <b>Coming Soon</b>
                            </div>
                        </div>
                    </Link>
                    <Link passHref href="/maths">
                    <div className={styles.mathsCard}>
                        <p>Mathematics</p>
                        <img className={styles.mathImg} src="/pages/dashboard/math.svg" />
                    </div>
                    </Link>
                    <div className={styles.progressCardsContainer}>
                        <Link passHref href={`/${User.userData.progress1}`}>
                        <div className={styles.progressCard1}>
                            <h2>{camelize(User.userData.progress1) } Progress</h2>
                            <p className="progress"><b>{User.userData.courses[User.userData.progress1].completed}</b> out of <b>2</b> done</p>
                        </div>
                        </Link>
                        <Link passHref href={`/${User.userData.progress2}`}>
                        <div className={styles.progressCard2}>
                            <h2>{camelize(User.userData.progress2)} Progress</h2>
                            <p className="progress"><b>{User.userData.courses[User.userData.progress2].completed}</b> out of <b>2</b> done</p>
                        </div>
                        </Link>
                    </div>
               </div>
               <div className={styles.cardsRow2}>
                   <Link passHref href="/physics">
                        <div className={styles.physicsCard}>
                                    <p>Physics</p>
                                    <img className={styles.phyImg} src="/pages/dashboard/phy.svg" />
                        </div>
                    </Link>
                        
                    <Link passHref href={'/biology/cell'}>
                        <div className={styles.discoverCard}>
                            <p>Discover</p>
                            <div className={styles.discoverSubject}>
                                    <div className={styles.discoverText}>
                                        <h1>Biology</h1>
                                        <p>Cell</p>
                                    </div>
                                    <img alt='' src="/pages/biology/courses/Cell.svg" />
                            </div>
                        </div>
                    </Link>
                </div>
           </div>
        </section>
        <section className={styles.rightSection}>
            <div className={styles.suggestionsContainer}>
                <p>Suggesions</p>
                <div className={styles.suggestions}>
                    <Link passHref href="/maths/pythagoras_theorem">
                        <div className={styles.suggestion}>
                        <h1>Maths</h1>
                        <p>Pythagoras Theorem</p>
                    </div></Link>
                    <Link passHref href="/physics/ray_optics">
                    <div className={styles.suggestion}>
                        <h1>Physics</h1>
                        <p>Ray Optics</p>
                    </div></Link>
                    <Link passHref href="/biology/cell">
                    <div className={styles.suggestion}>
                        <h1>Biology</h1>
                        <p>Cell</p>
                    </div>
                    </Link>
                </div>

            </div>
            <Link passHref href={"/analytics"}>
            <div className={styles.graphContainer}>
                <p>Analytics</p>
                {barChart({userData: User.userData})}
            </div></Link>
        </section>
        </div>
        </div>
        ): <div>loading</div>
    }
        </>
    )
}

export default Dashboard