import { useContext, useEffect, useState } from "react";
import Header from "./components/header/Header";
import WeatherBoard from "./components/weather/WeatherBoard";
import { WeatherContext } from "./contexts";

//Import images;
import ClearSkyImage from "./assets/backgrounds/clear-sky.jpg";
import FewCloudsImage from "./assets/backgrounds/few-clouds.jpg";
import MistImage from "./assets/backgrounds/mist.jpeg";
import RainyDayImage from "./assets/backgrounds/rainy-day.jpg";
import ScatteredCloudsImage from "./assets/backgrounds/scattered-clouds.jpg";
import SnowImage from "./assets/backgrounds/snow.jpg";
import ThunderStormImage from "./assets/backgrounds/thunderstorm.jpg";
import WinterImage from "./assets/backgrounds/winter.jpg";

export default function Page() {
  const { weatherData, loading } = useContext(WeatherContext);
  const [climateImage, setClimateImage] = useState("");

  function getBackgroundImage(climate) {
    switch (climate) {
      case "Rain":
        return RainyDayImage;
      case "Clouds":
        return ScatteredCloudsImage;
      case "Clear":
        return ClearSkyImage;
      case "Snow":
        return SnowImage;
      case "Thunder":
        return ThunderStormImage;
      case "Fog":
        return WinterImage;
      case "Haze":
        return FewCloudsImage;
      case "Mist":
        return MistImage;
      default:
        return ClearSkyImage;
    }
  }

  useEffect(() => {
    const bgImage = getBackgroundImage(weatherData.climate);
    setClimateImage(bgImage);
  }, [weatherData.climate]);

  return (
    <>
      {loading.state ? (
        <div className="text-center text-green-600 mt-20 ">
          <p>{loading.message}</p>
        </div>
      ) : (
        <div
          style={{ backgroundImage: `url(${climateImage})` }}
          className="grid place-items-center h-screen bg-no-repeat bg-cover"
        >
          <Header />
          <main>
            <section>
              <WeatherBoard />
            </section>
          </main>
        </div>
      )}
    </>
  );
}
