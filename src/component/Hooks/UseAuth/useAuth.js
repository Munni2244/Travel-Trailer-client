
import { useContext } from "react"
import { authContext } from "../../Context/AuthProvider/AuthProvider"


const useAuth=()=>{
    return useContext(authContext)
}
export default useAuth;