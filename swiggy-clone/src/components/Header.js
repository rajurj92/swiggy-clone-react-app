
import { useState, useContext } from 'react';
import {APP_LOGO} from '../utils/config';
import { Link } from 'react-router-dom';
import useOnlineStatus from '../utils/useOnlineStatus';
import UserContext from '../utils/UserContext';
import { useSelector } from 'react-redux';



export default function Header() {
  const [loginText, setLoginText] = useState("Login");

  const textHandler = () => {
    loginText === "Login" ? setLoginText("Logout") : setLoginText("Login");
  };
  const onlineStatus = useOnlineStatus();


    const {name} = useContext(UserContext);

    const cartItems  = useSelector((store) => store.cart.items)

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
                    <li><Link to={'/cart'}>Cart ({cartItems.length}-items)</Link></li>
                    <li><button onClick={textHandler}>{loginText}</button></li>
                    <li>{name}</li>

                </ul>
            </div>

      </header>
    )

  
}
