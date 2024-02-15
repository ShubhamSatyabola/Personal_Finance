import { useSelector } from "react-redux"
import { Navigate } from "react-router-dom"
import {selectLoggedInUser} from "../authSlice"
export const Protected = ({children}) => {
    const user = useSelector(selectLoggedInUser)
    {if(!user){
       return <Navigate to={'/'}></Navigate>
    }}
    return children
  
}
