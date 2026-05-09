
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import FoodCard from './components/FoodCard';

import Body from './components/Body';

function App() {

  return (
    <div className="App">
      <Header/>
      <Body/>
      <FoodCard  recipes="Ford"/>
      <Footer/>
    
    </div>
  );
}

export default App;
