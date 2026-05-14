import {APP_LOGO} from '../utils/config'
export default function Header(){
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

                </ul>
            </div>

      </header>
    )
}
