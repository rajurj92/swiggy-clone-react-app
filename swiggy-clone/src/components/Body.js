import { useEffect, useState } from "react";
import RestaurantCard from "./RestaurantCard";
import SearchBar from "./SerachBar";

export default function Body() {
    const [recipes, setRecipes] = useState([]);
    const[val, setVal] = useState()

  async function fetchData() {
        const res = await fetch('https://dummyjson.com/recipes')
        const data = await res.json();
        console.log(data);
         setRecipes(data.recipes);
    }
    useEffect(()=>{
     fetchData();
    }, [])


    function searchItems(e){
        console.log(e.target.value)
    }
    return(
       <section>
        <SearchBar/>
        <div>
             <h1>Top restaurant chains in Hyderabad</h1>
        </div>
       
            
        <div className="container">

        {
        recipes.map((item) => (
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