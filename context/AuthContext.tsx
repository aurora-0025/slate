import { createContext, useContext, useEffect, useState } from "react";

import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from 'firebase/auth'
import { auth } from "../firebase/clientApp";

const AuthContext = createContext<any>({});

export const useAuth = () => useContext(AuthContext)


export const AuthContextProvider = ({children} : {children: React.ReactNode}) =>{

    const [user, setUser]  = useState<any>(null)
    const [loading, setLoading] = useState<Boolean>(true)

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if(user) {
                setUser({
                    uid: user.uid,
                    email: user.email,
                    displayName: user.displayName
                })
            } else {
                setUser(null);
            }
            setLoading(false)
        })

        return () => unsubscribe();
    }, [])

    const signUp = (email: string, password: string) => {
        createUserWithEmailAndPassword(auth, email, password).then(()=>{
            console.log('loggedIn');
        }).catch((err)=>{
            console.log(err.errorMessage);
        })
    }
    const logIn = (email: string, password: string) => {
        signInWithEmailAndPassword(auth, email, password).then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
            return user;
          }).catch((error)=>{
            return(error.message)
          })
    }
    const logOut = async () => {
        setUser(null);
       await signOut(auth);
    }

    return (
        <AuthContext.Provider value={{ user, logIn, signUp, logOut }}>
            {loading? null : children}
        </AuthContext.Provider>
    )
}