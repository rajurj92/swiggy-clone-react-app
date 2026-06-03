import { useEffect, useState } from "react";
import { API_URL, proxy } from "../utils/config";
import { useParams } from "react-router-dom";

const useRestaurantMenu = () =>{
const[recipe, setRecipe] = useState(null);
 const { id } = useParams();


 useEffect(()=>{
    fetchData();
 }, [])

 const fetchData = async () => {

        try {

            const res = await fetch(
                `https://dummyjson.com/recipes/${id}`
            );

            const data = await res.json();

            console.log(data);

            setRecipe(data);

        } catch (err) {
            console.error(err);
        }
    };
    return recipe;
}

export default useRestaurantMenu