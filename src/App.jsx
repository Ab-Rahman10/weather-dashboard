// import "./App.css";

import Page from "./Page";
import { FavouriteProvider, WeatherProvider } from "./provider";
import LocationProvider from "./provider/LocationProvider";

function App() {
  return (
    <LocationProvider>
      <WeatherProvider>
        <FavouriteProvider>
          <Page />
        </FavouriteProvider>
      </WeatherProvider>
    </LocationProvider>
  );
}

export default App;
