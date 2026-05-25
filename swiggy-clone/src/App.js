
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Body from './components/Body';
import { Outlet } from 'react-router-dom';



function App() {

  return (
    <div className="App">
      <Header/>
      {/* <SearchBar/> */}
     <Outlet/>
      
      <Footer/>
    
    </div>
  );
}



export default App;
