import react from "react";
import {Navigate,Outlet} from "react-router-dom"

const PrivateComponent = ({state})=>{
 
    // const auth = localStorage.getItem("webar")

return state ? <Outlet/> : <Navigate to="/"/>
}

export default PrivateComponent;