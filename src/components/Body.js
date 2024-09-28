import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";
import { useEffect, useState } from "react";

const Body = () => {
    const [listofRestaurant, setlistofRestaurant] = useState([]); 
    const [filterRestaurant,setFilterRestaurant] = useState([]);

    const [searchText,setSearchText] = useState("");



    useEffect(() => {
        fetchData()
    },[]);
   
const fetchData = async () => {
    try {
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=30.7003182&lng=76.8033116&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
        const json = await data.json();

        console.log(json); // Inspect the structure
        const restaurants = json.data.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
        
        if (restaurants) {
            setlistofRestaurant(restaurants);
            setFilterRestaurant( json.data.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
        } else {
            console.error("Restaurants data not found");
        }
    } catch (error) {
        console.error("Error fetching data:", error);
    }
};

if(listofRestaurant == 0){
    return <Shimmer />
}


    return (
        <div className="body">
            <div className="filter">
                <div className="search">
                    <input className="search-box" type="text" value={searchText} 
                    onChange={(e) =>
                        setSearchText(e.target.value)
                     }></input>
                    <button onClick={() => {
                        const filterRestaurant = listofRestaurant.filter((res) => 
                            res.info.name.toLowerCase().includes(searchText.toLowerCase())
                        );
                        setFilterRestaurant(filterRestaurant);
                    }}>Search</button>
                </div>
                <button className="filter-btn"onClick={() => {
                    const filteredList = listofRestaurant.filter(
                        (res) => res.info.avgRating > 4
                    )
                    setlistofRestaurant(filteredList)
                    }}>Top Rated Restaurants
                </button>
                
            </div>  
            <div className="res-container">
                {filterRestaurant.map((restaurant) => (
                    <RestaurantCard key={restaurant.info.id} resData={restaurant} />
                    ))}
            </div>            
        </div>
    )
}

export default Body;