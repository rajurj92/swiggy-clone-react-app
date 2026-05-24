import { useEffect, useState } from "react";
import RestaurantCard from "./RestaurantCard";
import { API_URL, proxy } from "../utils/config";
import Shimmer from "./Shimmer";

export default function Body() {

  const [restaurants, setrestaurants] = useState([]);
  const [filteredrestaurants, setfilteredrestaurants] = useState([]);
  const [inputText, setInputText] = useState("");

  async function fetchData() {
    const res = await fetch(proxy + API_URL);
    const data = await res.json();
    const restaurantData =
      data?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants;

    setrestaurants(restaurantData);

    setfilteredrestaurants(restaurantData);
  }

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {

    const filtered = restaurants.filter((res) =>
      res.info.name
        .toLowerCase()
        .includes(inputText.toLowerCase())
    );

    setfilteredrestaurants(filtered);

  }, [inputText, restaurants]);

  return restaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <section>

      <section className="filter-section">

        <div className="searchbar-container">

          <input
            type="text"
            className="search-input"
            placeholder="Search food..."
            value={inputText}
            onChange={(e) => {
              setInputText(e.target.value);
            }}
          />

        </div>

        <button
          onClick={() => {

            const filterData = restaurants.filter(
              (res) => res.info.avgRating > 4
            );

            setfilteredrestaurants(filterData);

          }}
        >
          Top Rated Restaurants
        </button>

      </section>

      <div>
        <h1>Top restaurant chains in Hyderabad</h1>
      </div>

      <div className="container">

        {
          filteredrestaurants.map((item) => (
            <RestaurantCard
              key={item.info.id}
              restData={item}
            />
          ))
        }

      </div>

    </section>
  );
}