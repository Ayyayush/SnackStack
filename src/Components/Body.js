import { useEffect, useState } from 'react';
import RestaurantCard from './RestaurantCard';
import Shimmer from './Shimmer';
import resList from '../../utils/mockData';
import { API_ERROR_MESSAGE } from '../../utils/constants';
import { Link } from 'react-router-dom';

const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [filteredRestaurant, setFilteredRestaurant] = useState([]);
  const [searchText, setSearchText] = useState('');
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);












  const fetchData = async () => {
    try {
      // Simulate API delay for better UX
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Use mock data instead of external API to avoid CORS issues
      setListOfRestaurants(resList);
      setFilteredRestaurant(resList);
    } catch (err) {
      setError("Failed to load restaurants.");
      setListOfRestaurants([]);
      setFilteredRestaurant([]);
    }
  };

  if (error) {
    return <div style={{ color: "red", margin: "2rem" }}>{error}</div>;
  }



















  
async function getRestaurants() {
    // handle the error using try... catch
    try {
      const response = await fetch(FOODFIRE_API_URL);
      const json = await response.json();

      // initialize checkJsonData() function to check Swiggy Restaurant data
      function checkJsonData(jsonData) {
        for (let i = 0; i < jsonData?.data?.cards.length; i++) {
          // initialize checkData for Swiggy Restaurant data
          let checkData =
            json?.data?.cards[i]?.card?.card?.gridElements?.infoWithStyle
              ?.restaurants;

          // if checkData is not undefined then return it
          if (checkData !== undefined) {
            return checkData;
          }
        }
      }

      // call the checkJsonData() function which return Swiggy Restaurant data
      const resData = checkJsonData(json);

      // update the state variable restaurants with Swiggy API data
      setAllRestaurants(resData);
      setFilteredRestaurants(resData);
    } catch (error) {
      console.log(error);
    }
  }

  // use searchData function and set condition if data is empty show error message
  const searchData = (searchText, restaurants) => {
    if (searchText !== "") {
      const filteredData = filterData(searchText, restaurants);
      setFilteredRestaurants(filteredData);
      setErrorMessage("");
      if (filteredData?.length === 0) {
        setErrorMessage("No matches restaurant found");
      }
    } else {
      setErrorMessage("");
      setFilteredRestaurants(restaurants);
    }
  };






  return listOfRestaurants.length === 0 ? (
    <Shimmer />
  ) : (    <div className="body">
      {/* Demo Data Notice */}
      <div className="bg-blue-100 border border-blue-400 text-blue-700 px-4 py-3 rounded mx-4 mt-4 mb-2">
        <p className="text-sm">
          📍 <strong>Demo Mode:</strong> {API_ERROR_MESSAGE}
        </p>
      </div>
      
      <div className="filter">
        <div className="search">
          <input
            type="text"
            placeholder="Search a restaurant you want..."
            className="searchBox"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />
          <button
            onClick={() => {
              const filtered = listOfRestaurants.filter((res) =>
                res.data.name.toLowerCase().includes(searchText.toLowerCase())
              );
              setFilteredRestaurant(filtered);
            }}
          >
            Search
          </button>
        </div>        <button
          className="filter-btn"
          onClick={() => {
            const filteredList = listOfRestaurants.filter(
              (res) => res.data.avgRating > 4
            );
            setFilteredRestaurant(filteredList);
          }}
        >
          Top Rated Restaurants
        </button>
      </div>
      <div className="res-container">
        {filteredRestaurant.map((restaurant) => (
          <Link 
            key={restaurant.data.id} 
            to={`/restaurants/${restaurant.data.id}`}
            style={{ textDecoration: 'none', color: 'inherit' }}
          >
            <RestaurantCard resData={restaurant} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;