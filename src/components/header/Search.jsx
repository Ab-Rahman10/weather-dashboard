import { useContext } from "react";
import SearchLogo from "../../assets/search.svg";
import { LocationContext } from "../../contexts";
import { getLocationByName } from "../../data/location-data";
import useDebounce from "../../hooks/useDebounce";

export default function Search() {
  const { setSelectedLocation } = useContext(LocationContext);

  //handlers;
  const doSearch = useDebounce((term) => {
    const fetchedLocation = getLocationByName(term);
    setSelectedLocation({ ...fetchedLocation });
  }, 1000);

  function handleChange(e) {
    const value = e.target.value;
    doSearch(value);
  }
  return (
    <form action="#">
      <div className="flex items-center space-x-2 py-2 px-3 group focus-within:bg-black/30 transition-all border-b border-white/50 focus-within:border-b-0 focus-within:rounded-md">
        <input
          className="bg-transparent  placeholder:text-white text-white w-full text-xs md:text-base outline-none border-none"
          type="search"
          placeholder="Search Location"
          onChange={handleChange}
          required
        />
        <button type="submit">
          <img src={SearchLogo} />
        </button>
      </div>
    </form>
  );
}
