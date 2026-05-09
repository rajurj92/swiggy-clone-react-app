
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import FoodCard from './components/FoodCard';

import Body from './components/Body';
import SearchBar from './components/SerachBar';

function App() {

  return (
    <div className="App">
      <Header/>
      {/* <SearchBar/> */}
      <Body/>
      <FoodCard  recipes="Ford"/>
      <Footer/>
    
    </div>
  );
}

export default App;
