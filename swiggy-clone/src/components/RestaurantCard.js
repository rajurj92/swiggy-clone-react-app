import { CDN_URL } from "../utils/config";
export default function RestaurantCard({ restData }) {
  return (
    <div className="card">
      <div className="card-img">
        <img
          src={`${CDN_URL}${restData?.info?.cloudinaryImageId}`}
          alt={restData?.info?.name}
        />
      </div>
      <div className="card-body">
        <h4>{restData?.info?.name}</h4>

        <p>{restData?.info?.cuisines.join(", ")}</p>
        {/* <p>{restData.ingredients}</p> */}
        <p>{restData?.info?.costForTwo}</p>
        <p>⭐ {restData?.info?.avgRating}</p>
        <p>{restData?.info?.sla?.deliveryTime} minutes</p>
      </div>
      <div className="card-footer"></div>
    </div>
  );
}
