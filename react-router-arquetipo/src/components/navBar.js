import { NavLink } from "react-router-dom"
import './navBar.css'

export default function Navbar(){
    return (
        <div>
           <ul>
                <li>
                    <NavLink className={({ isActive }) => (isActive ? "active" : "blue")} to="/">home</NavLink> 
                </li>
                <li>
                    <NavLink className={({ isActive }) => (isActive ? "active" : "blue")} to="/about">about</NavLink> 
                </li>
                <li>
                    <NavLink className={({ isActive }) => (isActive ? "active" : "blue")} to="/users">users</NavLink>
                </li>
           </ul>
        </div>
    )
}