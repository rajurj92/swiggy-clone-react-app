
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import { Outlet } from 'react-router-dom';
import {Provider} from "react-redux";
import appStore from './utils/appStore';



function App() {

  return (
    <Provider store = {appStore}>
    <div className="App">
      <Header/>
      {/* <SearchBar/> */}
     <Outlet/>
      
      <Footer/>
    
    </div>
    </Provider>
  );
}



export default App;
