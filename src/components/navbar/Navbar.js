import { useLocation, useNavigate } from "react-router-dom";
import './navbar.css'

export default function Navbar({type}){

    const location = useLocation();

    const navigate = useNavigate();

    return (<div className="navbar">
        <button disabled={location.pathname==='/'} onClick={() => navigate(-1)} className="backButton">&larr;</button>
        <a href="#" className="brand">WishWorks</a>
        <div className="authBtns">
            <button className="authBtn">sign in</button>
            <button className="authBtn">Sign up</button>
        </div>
    </div>);
}