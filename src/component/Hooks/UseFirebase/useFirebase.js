import { getAuth, signInWithPopup, GoogleAuthProvider,onAuthStateChanged  ,signOut} from "firebase/auth";
import { useEffect, useState } from "react";
import Initialization from "../../../firebase/firebase.init";

Initialization()
const GoogleProvider = new GoogleAuthProvider();
const auth = getAuth();

const useFirebase=()=>{
    const [user, setUser]=useState({});
    const [isLoading, setIsLoading]=useState(true);
     
    const SignWithGoogle=()=>{
        setIsLoading(true)
      return signInWithPopup(auth, GoogleProvider)
    
    }

    //statechange
    useEffect(()=>{
        onAuthStateChanged(auth, (user) => {
            if (user) {
              setUser(user);
          
            } else {
            setUser({})
        
            }
            setIsLoading(false)
          })
    },[])

    const SignOut=()=>{
    signOut(auth).then(() => {
        setUser({})
     }).catch((error) => {
  console.log(error.message);
})
.finally(()=> setIsLoading(false));
 }

    return{
        user,
        isLoading,
        SignWithGoogle,
        SignOut,
        setIsLoading
    }
}
export default useFirebase;