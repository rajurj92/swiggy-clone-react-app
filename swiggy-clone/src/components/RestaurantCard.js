
// import { Link } from "react-router-dom";
import { useParams, useNavigate } from "react-router-dom";
 
export default function RestaurantCard({restData}){

     const navigate = useNavigate();

    return(

     
        <div className="card"    onClick={() =>
                            navigate(`/recipes/${restData.id}`)}>
         <div className="card-img" >
          <img
          src={restData?.image}
        
        alt={restData?.name}
        
        />
            </div>      
        <div className="card-body">

      <h4>{restData?.name}</h4>

      <p>{restData?.cuisines}</p>
      {/* <p>{restData.ingredients}</p> */}
{/* <p>{restData?.info?.costForTwo}</p> */}
      <p>⭐ {restData?.rating }</p>
      {/* <p>{restData?.info?.sla?.deliveryTime} minutes</p> */}
        </div>
        <div className="card-footer">
            

        </div>



                 
            </div>
   
      
    )
}