import React, { useEffect, useState } from 'react';
import { cloudy, partlyCloudy, rainy, stormy, sunny } from '../../assets/images';

import { PageContent } from '../../components/page';
import style from './style.module.scss';
import { useParams } from 'react-router-dom';

const CityPage = ({ cities }) => {
    const { slug } = useParams();

    const city = cities.find(city => city.slug === slug);

    console.log('The slug coming back: ', slug);

    const [weatherGraphic, setWeatherGraphic] = useState(null);


    useEffect(() => {
        if (city.weatherForecast === 'cloudy') {
            setWeatherGraphic(cloudy);
        } else if (city.weatherForecast === 'partly cloudy') {
            setWeatherGraphic(partlyCloudy);
        } else if (city.weatherForecast === 'rainy') {
            setWeatherGraphic(rainy);
        } else if (city.weatherForecast === 'stormy') {
            setWeatherGraphic(stormy);
        } else {
            setWeatherGraphic(sunny);
        }
    }, [city.weatherForecast, weatherGraphic]);

    const newDayHandler = () => {
        window.location.reload();
    }

    return (
        <PageContent>
            <div className={style.cityInfo__container}>
                <h2>{city.cityName}</h2>
                <h3>{city.weatherForecast}</h3>
                <img src={weatherGraphic} alt='' />
                <button onClick={() => newDayHandler()}>A New Day</button>
            </div>
        </PageContent >
    )
}

export default CityPage;
