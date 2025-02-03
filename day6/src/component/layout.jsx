
import Navigation from "./navigation";
import { Outlet } from "react-router-dom";
import "../App.css"
export const Layout = ()=>{
    return (
      <div className="frontSection"><Navigation />
         <Outlet /></div>
         
    
    )
}