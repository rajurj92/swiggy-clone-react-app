import { useEffect, useState } from "react";
import RestaurantCard from "./RestaurantCard";

export default function Body() {
    const [recipes, setRecipes] = useState([]);

  async function fetchData() {
        const res = await fetch('https://dummyjson.com/recipes')
        const data = await res.json();
        console.log(data);
         setRecipes(data.recipes);
    }
    useEffect(()=>{
     fetchData();
    }, [])
    return(
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
    )
}