import { useState } from 'react';
import {APP_LOGO} from '../utils/config';
import { Link } from 'react-router-dom';
import useOnlineStatus from '../utils/useOnlineStatus';

export default function Header(){
    const[loginText, setLoginText] = useState("Login")

    const textHandler = ()=>{
        loginText === "Login" ?  setLoginText("Logout") : setLoginText("Login")
     
    }
    const onlineStatus = useOnlineStatus();

    return(
        <header className="App-header flex">
       
            <div className="logo-container">
                 <img src={APP_LOGO} className="app-logo" alt="logo" />
            </div>
            <div className="nav-container">
                <ul>
                    <li>{(onlineStatus) ? "online" : "offline"}</li>
                    <li><Link to={'/'}>Home</Link></li>
                    <li><Link to={'/aboutus'}>About Us</Link></li>
                    <li><Link to={'/contact'}>Contact US</Link></li>
                    <li><Link to={'/groceries'}>Groceries</Link></li>
                    <li><Link to={'/cart'}>Cart</Link></li>
                    <li><button onClick={textHandler}>{loginText}</button></li>

                </ul>
            </div>

      </header>
    )
}
