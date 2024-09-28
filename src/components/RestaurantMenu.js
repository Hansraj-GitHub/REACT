import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";

    const RestaurantMenu = () => {

    const [resInfo,setResInfo] = useState(null);

    useEffect(() => {
        fetchMenu();
    },[]);

    
    const fetchMenu = async () => {
        try {
            const data = await fetch(
                "https://www.swiggy.com/dapi/restaurants/list/v5?lat=30.7003182&lng=76.8033116&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING#"
            );
            const json = await data.json();
            console.log(json);

            // Adjust this based on actual API response structure
            const restaurantInfo = json?.data?.cards?.[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants?.[0]?.info;
            setResInfo(restaurantInfo);  // Set the entire restaurant info
        } catch (error) {
            console.error("Error fetching menu:", error);
        }
    };

    // const {name,cusines,costForTwo}= restaurantInfo;

    return resInfo == null ? (<Shimmer />) :(
        <div className="menu">
            <h1>{resInfo?.name || "Restaurant Name"}</h1> {/* Display restaurant name */}
            <p>
                {resInfo?.cuisines.join(", ")} - {resInfo?.costForTwo}
            </p>
            <h3>Menu</h3>
            <ul>
                <li>Biryani</li>
                <li>Burger</li>
                <li>Pizza</li>
            </ul>
        </div>
    )
}

export default RestaurantMenu;