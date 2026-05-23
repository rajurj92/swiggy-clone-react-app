import { useState } from 'react'
import {APP_LOGO} from '../utils/config'
export default function Header(){
    const[loginText, setLoginText] = useState("Login")

    const textHandler = ()=>{
        loginText === "Login" ?  setLoginText("Logout") : setLoginText("Login")
     
    }

    return(
        <header className="App-header">
       
            <div className="logo-container">
                 <img src={APP_LOGO} className="app-logo" alt="logo" />
            </div>
            <div className="nav-container">
                <ul>
                    <li><a>Home</a></li>
                    <li><a>About Us</a></li>
                    <li><a>Contact US</a></li>
                    <li><a>Cart</a></li>
                    <li><button onClick={textHandler}>{loginText}</button></li>

                </ul>
            </div>

      </header>
    )
}
