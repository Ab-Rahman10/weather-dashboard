import { useContext, useEffect, useState } from "react";
import RedHeart from "../../assets/heart-red.svg";
import Heart from "../../assets/heart.svg";
import { FavouriteContext, WeatherContext } from "../../contexts";

export default function AddToFavorite() {
  const { favourites, addToFavourites, removeFromFavourites } =
    useContext(FavouriteContext);
  const { weatherData } = useContext(WeatherContext);
  const [isFavourite, toggleFavourite] = useState(false);

  const { longitude, latitude, location } = weatherData;
  useEffect(() => {
    const found = favourites.find((fav) => fav.location == location);
    toggleFavourite(found);
  }, []);

  //handlers;
  const handleFavourite = () => {
    const found = favourites.find((fav) => fav.location == location);

    if (!found) {
      addToFavourites(latitude, longitude, location);
    } else {
      removeFromFavourites(location);
    }
    toggleFavourite(!isFavourite);
  };

  return (
    <div className="md:col-span-2">
      <div className="flex items-center justify-end space-x-6">
        <button
          className="text-sm md:text-base inline-flex items-center space-x-2 px-3 py-1.5 rounded-md bg-[#C5C5C54D]"
          onClick={handleFavourite}
        >
          <span>Add to Favorite</span>
          <img src={isFavourite ? RedHeart : Heart} alt="Heart" />
        </button>
      </div>
    </div>
  );
}
