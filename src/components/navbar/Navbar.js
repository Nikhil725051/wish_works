import { Link } from "react-router-dom";
import './navbar.css'

export default function Navbar(){
    return (<div className="navbar">
        <a className="brand">WishWorks</a>
        <div className="authBtns">
            <button className="authBtn">sign in</button>
            <button className="authBtn">Sign up</button>
        </div>
    </div>);
}