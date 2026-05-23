import { useEffect, useState } from "react";
import RestaurantCard from "./RestaurantCard";
import FilterButton from "./FilterButton";
import { API_URL } from "../utils/config";
import Shimmer from "./Shimmer";


export default function Body() {
    const [recipes, setRecipes] = useState([]);
    const [filteredRecipes, setfilteredRecipes] = useState([]);
    const[inputText, setInputText] = useState("")



  async function fetchData() {
        const res = await fetch(API_URL)
        const data = await res.json();
        console.log(data);
         setRecipes(data.recipes);
         setfilteredRecipes(data.recipes)
    }
    useEffect(()=>{
     fetchData();
        const filtered = recipes.filter((res) =>
      res.name
         .toLowerCase()
         .includes(inputText.toLowerCase())
   );

   setfilteredRecipes(filtered);
    }, [inputText, recipes])


    function searchItems(e){
        console.log(e.target.value)
    }
  //   const clickHandler = ()=>{
  //      const filteredRecipes = recipes.filter((res)=>
  //     res.name
  //    .toLowerCase()
  //    .includes(inputText.toLowerCase())
  //      );

  //  setfilteredRecipes(filteredRecipes);
  //   }
    // function submitFiler(){
    //   console.log("clicked")
    // }
   
      return  recipes.length===0?
        (<Shimmer/>):
      (
      <section>
       <section className="filter-section">
            <div className="seacrhbar-container">
            <input type="text" id="searchText" className="search-input"  placeholder="Search food..." value={inputText} onChange={(e)=>{
                setInputText(e.target.value)
                console.log(e.target.value)
            }}/>
            {/* <button onClick={clickHandler}>Search</button> */}
          
        </div>
        <button onClick={()=>{
          const filterData = recipes.filter((res)=>res.rating>4.8 );
          setRecipes(filterData);
            // console.log(filterData)
        }}>Top Rated Restaurants</button>
        </section>
        <div>
             <h1>Top restaurant chains in Hyderabad</h1>
        </div>
       
            
        <div className="container">

        {
        filteredRecipes.map((item) => (
          <RestaurantCard
            key={item.id}
            recipeData={item}
          />
        ))
      }
      </div>
    </section>
    )
}
