import { getAuth, signInWithPopup, GoogleAuthProvider ,signOut} from "firebase/auth";
import { useState } from "react";
import Initialization from "../../../firebase/firebase.init";

Initialization()
const GoogleProvider = new GoogleAuthProvider();
const auth = getAuth();

const useFirebase=()=>{
    const [user, setUser]=useState({});
    const [isLoading, setIsLoading]=useState(true);
     
    const SignWithGoogle=()=>{
        signInWithPopup(auth, GoogleProvider)
          .then(res=>{
            setUser(res.user)
        }).catch(error=>{
            console.log(error.message);
        })
        .finally(()=> setIsLoading(false))
    }

    const SignOut=()=>{
    signOut(auth).then(() => {
        setUser({})
     }).catch((error) => {
  console.log(error.message);
});
 }

    return{
        user,
        isLoading,
        SignWithGoogle,
        SignOut
    }
}
export default useFirebase;