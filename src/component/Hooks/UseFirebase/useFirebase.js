import { getAuth, signInWithPopup, GoogleAuthProvider,onAuthStateChanged  ,signOut} from "firebase/auth";
import { useEffect, useState } from "react";
// import { useHistory, useLocation } from "react-router";
import Initialization from "../../../firebase/firebase.init";

Initialization()
const GoogleProvider = new GoogleAuthProvider();
const auth = getAuth();

const useFirebase=()=>{
    const [user, setUser]=useState({});
    const [isLoading, setIsLoading]=useState(true);
    // const history=useHistory();
    // const location= useLocation();
    // const url= location.state?.from;
     
    const SignWithGoogle=()=>{
        setIsLoading(true)
        signInWithPopup(auth, GoogleProvider)
          .then(res=>{
            setUser(res.user)
          //  history.push(url)
        }).catch(error=>{
            console.log(error.message);
        })
        .finally(()=> setIsLoading(false))
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
        SignOut
    }
}
export default useFirebase;