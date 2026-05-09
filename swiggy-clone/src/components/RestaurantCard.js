export default function RestaurantCard({recipeData}){


    return(
     
        <div className="card">
         <div className="card-img" >
          <img
        src={recipeData.image}
        alt={recipeData.name}
        width="200"
        />
            </div>      
        <div className="card-body">

      <h4>{recipeData.name}</h4>

      <p>{recipeData.cuisine}</p>

      <p>⭐ {recipeData.rating}</p>
        </div>
        <div className="card-footer">
            
        </div>



                 
            </div>
      
    )
}