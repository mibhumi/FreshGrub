import { useState } from 'react';
import {IMG_CDN_URL, restaurantList} from './../Constant';
import RestaurantCard from "./RestrauntCard";

function filterData(searchText, restaurants) {
    return restaurants.filter((restaurant) => restaurant.data.name.includes(searchText))
}

const Body = () => {

    const [ restaurants, setRestaurants ] = useState(restaurantList);
    const [searchText, setSearchText] = useState("");

    return(
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
                const data = filterData(searchText, restaurants);
                // update the state - restaurants
                setRestaurants(data);
            }}
            >
            Search
            </button>
            <div className="restaurant-list">
                {
                    restaurants?.map((restaurant)=>(
                    <RestaurantCard {... restaurant.data} key={restaurant.data.id} />
                    ))
                }
            </div>
        </>
    );
}

export default Body;