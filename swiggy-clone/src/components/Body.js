import { useEffect, useState } from "react";
import RestaurantCard from "./RestaurantCard";
import SearchBar from "./SerachBar";
import FilterButton from "./FilterButton";
import { API_URL } from "../utils/config";


export default function Body() {
    const [recipes, setRecipes] = useState([]);


  async function fetchData() {
        const res = await fetch({API_URL})
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
    // function submitFiler(){
    //   console.log("clicked")
    // }
    return(
       <section>
        <SearchBar/>
        <button onClick={()=>{
          const filterData = recipes.filter((res)=>res.rating>4 );
          setRecipes(filterData);
            console.log(filterData)
        }}>Filter Data</button>
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