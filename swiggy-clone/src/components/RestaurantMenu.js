import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import useRestaurantMenu from "../utils/useRestautantMenu";
import { useParams } from "react-router-dom";
function RestaurantMenu(){

 const { id } = useParams();
 const recipe = useRestaurantMenu(id)
// useEffect(() => {
//     fetchData();
// }, []);

// const fetchData = async () => {

//         try {

//             const res = await fetch(
//                 `https://dummyjson.com/recipes/${id}`
//             );

//             const data = await res.json();

//             console.log(data);

//             setRecipe(data);

//         } catch (err) {
//             console.error(err);
//         }
//     };

    // Loading state

    return (recipe === null) ? <Shimmer/> : (
         <div className="container">
        <div className="card" style={{width:"600px"}}> 

         
      <div className="card-img" >
            <img
                src={recipe.image}
                alt={recipe.name}
                width="300"
            />
</div>
 <div className="card-body">
   
            <h3>{recipe.cuisine}</h3>
            <p>{recipe.ingredients}</p>
            <p>{recipe.instructions.join(",")}</p>
<p>{recipe.mealType}</p>
            <h3>⭐{recipe.rating}-({recipe.reviewCount + "Ratings"})</h3>
</div>
        </div>
        </div>
    );
};

export default RestaurantMenu;