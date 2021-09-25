import { baltimore, cleveland, columbus } from "./assets/images";

import { BrowserRouter } from "react-router-dom";
import Header from "./components/header";
import { PageSwitch } from "./components/app-router";

const App = () => {

    const weatherPatterns = ['cloudy', 'partly cloudy', 'rainy', 'stormy', 'sunny'];

    const cities = [
        {
            cityName: 'Baltimore',
            image: baltimore,
            slug: 'baltimore',
            weatherForecast: weatherPatterns[Math.floor(Math.random() * weatherPatterns.length)]
        },
        {
            cityName: 'Cleveland',
            image: cleveland,
            slug: 'cleveland',
            weatherForecast: weatherPatterns[Math.floor(Math.random() * weatherPatterns.length)]
        },
        {
            cityName: 'Columbus',
            image: columbus,
            slug: 'columbus',
            weatherForecast: weatherPatterns[Math.floor(Math.random() * weatherPatterns.length)]
        }
    ]

    return (
        <BrowserRouter>
            <Header />
            <PageSwitch cities={cities} />
        </BrowserRouter>
    )
}

export default App;
