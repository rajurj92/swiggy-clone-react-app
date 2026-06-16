<<<<<<< HEAD

import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import { Outlet } from 'react-router-dom';
import {Provider} from "react-redux";
import appStore from './utils/appStore';


=======
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { Outlet } from "react-router-dom";
>>>>>>> 9002a979e7288871e5dbab3353b4ff9224481c39

function App() {
  return (
    <Provider store = {appStore}>
    <div className="App">
      <Header />
      {/* <SearchBar/> */}
      <Outlet />

      <Footer />
    </div>
    </Provider>
  );
}

export default App;
