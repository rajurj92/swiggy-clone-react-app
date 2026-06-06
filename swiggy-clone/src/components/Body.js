import { useEffect, useState } from "react";
import RestaurantCard, { withDifficultyLabel } from "./RestaurantCard";
import { API_URL } from "../utils/config";
import Shimmer from "./Shimmer";
import useOnlineStatus from "../utils/useOnlineStatus";

export default function Body() {
  const [restaurants, setrestaurants] = useState([]);
  const [filteredrestaurants, setfilteredrestaurants] = useState([]);
  const [inputText, setInputText] = useState("");
  // const [showClearFilter, setShowClearFilter] = useState(false);

  const [showClearFilter, setShowClearFilter] = useState(false);

  async function fetchData() {
    const res = await fetch(API_URL);
    const data = await res.json();
    const restaurantData = data.recipes;
    setrestaurants(restaurantData);
    setfilteredrestaurants(restaurantData);
  }

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    const filtered = restaurants.filter((res) =>
      res.name.toLowerCase().includes(inputText.toLowerCase()),
    );

    setfilteredrestaurants(filtered);
  }, [inputText, restaurants]);
  const onlineStatus = useOnlineStatus();
  const RestaurantCardLabel = withDifficultyLabel(RestaurantCard);

  if (onlineStatus === false) {
    return <h1>Looks like your offline , please check your internet</h1>;
  }

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
              // setShowClearFilter(true);
            }}
          />
        </div>

        <button
          onClick={() => {
            const filterData = restaurants.filter((res) => res.rating > 4.9);

            setfilteredrestaurants(filterData);
            setShowClearFilter(true);
          }}
        >
          Top Rated Restaurants
        </button>
        {showClearFilter && (
          <button
            onClick={() => {
              setfilteredrestaurants(restaurants);
              setInputText("");
              setShowClearFilter(true);
            }}
          >
            Clear Filter
          </button>
        )}

        {/* {
          showClearFilter && (
            <button
              id="clearFilter"
              onClick={() => {

                setfilteredrestaurants(restaurants);

               

                setShowClearFilter(false);

              }}
            >
              Clear Filter
            </button>
          )
        } */}
      </section>

      <div>
        <h1>Top restaurant chains in Hyderabad</h1>
      </div>

      <div className="container">
        {filteredrestaurants.map((item) =>
          item.difficulty ? (
            <RestaurantCardLabel key={item.id} restData={item} />
          ) : (
            <RestaurantCard key={item.id} restData={item} />
          ),
        )}
      </div>
    </section>
  );
}
