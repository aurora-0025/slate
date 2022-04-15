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



const Dashboard = () =>{
    const {user} = useAuth();

    const [User, setUser] = useState<any>(null)

    useEffect(()=> onSnapshot(collection(db, "users"), (snapshot)=> {
        snapshot.docs.map(doc => {if(doc.data().uid == user.uid) setUser(doc.data());
        })
    }) , [])    
    return(
        <>
        {User ? (
        <div className={styles.mainContainer}>
        <div className={styles.sideBar}>
            <Link href="/"><h1>Slate</h1></Link>
            <div className={styles.sideBarContainer}>
                <img src="" className="profile-pic"/>
                <p>{User.displayName}</p>
                <p>{User.email}</p>
                <Settings size={24} />
                <div className={styles.sideBarLinks}>
                </div>
            </div>
            <Link href="/"><button className={styles.logoutButton}><Logout size={16} />Logout</button></Link>
        </div>
        <section className={styles.content}>
            <h1>Welcome Back, {User.displayName}</h1>
            <div className={styles.banner}>
                <h1>Hackathons are a scam and we're the best con artists.</h1>
                <button>NANI</button>
            </div>
           <Search details={initialDetails} />
           <div className={styles.cardsContainer}>
                <div className={styles.cardsRow1}>
                    <div className={styles.achievementCard}>
                        <div className={styles.achievementHead}>
                            <p className={styles.achievementTitle}>Achievement</p>
                            <p>date</p>
                        </div>
                        <div className={styles.achievementBody}>
                            <img src="https://cdn.discordapp.com/attachments/795685111692918806/964083692848959488/unknown.png" style={{width: "100px"}} />
                            <h2>HTML5 CSS3</h2>
                        </div>
                        <div className={styles.achievementFooter}>
                            You Achieved <b>Achievement</b>
                        </div>
                    </div>
                    <div className={styles.mathsCard}>
                        <p>Mathematics</p>
                        <img className={styles.mathImg} src="/pages/dashboard/math.svg" />
                    </div>
                    <div className={styles.progressCardsContainer}>
                        <div className={styles.progressCard1}>
                            <h2>progressCourse</h2>
                            <p className="progress"><b>1</b> out of <b>1</b> done</p>
                        </div>
                        <div className={styles.progressCard2}>
                            <h2>progressCourse</h2>
                            <p className="progress"><b>1</b> out of <b>1</b> done</p>
                        </div>
                    </div>
               </div>
               <div className={styles.cardsRow2}>
                    <div className={styles.physicsCard}>
                                <p>Physics</p>
                                <img className={styles.phyImg} src="/pages/dashboard/phy.svg" />
                    </div>
                    <div className={styles.discoverCard}>
                        <p>Discover</p>
                        <div className={styles.discoverSubject}>
                                <div className={styles.discoverText}>
                                    <h1>Biology</h1>
                                    <p>Hereditary and Evolution</p>
                                </div>
                                <img src="https://www.sydney.edu.au/dam/corporate/images/news-and-opinion/news/2018/april/virus1.jpg/_jcr_content/renditions/cq5dam.web.1280.1280.jpeg" style={{width:"60px", height:"60px"}} />
                        </div>
                    </div>
                </div>
           </div>
        </section>
        <section className={styles.rightSection}>
            <div className={styles.suggestionsContainer}>
                <p>Suggesions</p>
                <div className={styles.suggestions}>
                    <div className={styles.suggestion}>
                        <h1>Biology</h1>
                        <p>Hereditary and Evolution</p>
                    </div>
                    <div className={styles.suggestion}>
                        <h1>Biology</h1>
                        <p>Hereditary and Evolution</p>
                    </div>
                    <div className={styles.suggestion}>
                        <h1>Biology</h1>
                        <p>Hereditary and Evolution</p>
                    </div>
                </div>
            </div>
            <div className={styles.graphContainer}>
                
            </div>
        </section>
        </div>
        ): <div>loading</div>}

        </>
    )
}

export default Dashboard