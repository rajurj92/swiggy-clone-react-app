import { Link } from "react-router-dom";

export default function RestaurantCard({ restData }) {
  return (
    <div className="card">
      <Link key={restData?.id} to={"/restaurants/" + restData?.id}>
        <div className="card-img">
          <img src={restData?.image} alt={restData?.name} />
        </div>
        <div className="card-body">
          <h4>{restData?.id}</h4>
          <h4>{restData?.name}</h4>

          <p>{restData?.cuisines}</p>
          {/* <p>{restData.ingredients}</p> */}
          <p>{restData?.costForTwo}</p>
          <p>⭐ {restData?.rating}</p>
          <p>{restData?.prepTimeMinutes} minutes</p>
        </div>
        <div className="card-footer">
          <button>Add to cart</button>
        </div>
      </Link>
    </div>
  );
}
