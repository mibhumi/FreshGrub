import { useState, useEffect } from 'react';
import {IMG_CDN_URL, restaurantList} from './../Constant';
import RestaurantCard from "./RestrauntCard";
import Shimmer from './Shimmer';

function filterData(searchText, restaurants) {
    return restaurants.filter((restaurant) => restaurant?.data?.name?.toLowerCase().includes(searchText.toLowerCase()))
}

const Body = () => {

    const [allRestaurants, setAllRestaurants] = useState([]);
    const [filteredRestaurants, setFilteredRestaurants] = useState([]);
    const [searchText, setSearchText] = useState("");

    useEffect(()=>{
        getRestaurants();
    } , []);

    async function getRestaurants() {
        const data = await fetch(
            "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING"
        );
        const json = await data.json();
        console.log(json);
        // Optional Chaining
        setAllRestaurants(json?.data?.cards[2]?.data?.data?.cards);
        setFilteredRestaurants(json?.data?.cards[2]?.data?.data?.cards);
    }

    // not render component (Early return)
    if (!allRestaurants) return null;

    if (filteredRestaurants?.length === 0)
        return <h1>No Restraunt match your Filter!!</h1>;

    return allRestaurants?.length === 0 ? (
        <Shimmer />
    ) : (
            <>
           <input
            type="text"
            className="search-input"
            placeholder="Search"
            value={searchText}
            onChange={(e) => {
                setSearchText(e.target.value);
            }}
            />
            <button
            className="search-btn"
            onClick={() => {
                //need to filter the data
                const data = filterData(searchText, allRestaurants);
                // update the state - restaurants
                setFilteredRestaurants(data);
            }}
            >
            Search
            </button>
            <div className="restaurant-list">
                {
                    filteredRestaurants?.map((restaurant)=>(
                    <RestaurantCard {... restaurant.data} key={restaurant.data.id} />
                    ))
                }
            </div>
        </>
    );
}

export default Body;