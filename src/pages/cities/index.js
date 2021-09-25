import { Link } from 'react-router-dom';
import { PageContent } from '../../components/page';
import React from 'react';
import style from './style.module.scss';

const Cities = ({ cities }) => {
    return (
        <PageContent>
            <div className={style.cities__tile_container}>
                {cities.map(city => {
                    return (
                        <Link to={`/cities/${city.slug}`}>
                            <div className={style.city__tile_container}>
                                <h2>{city.cityName}</h2>
                                <img src={city.image} alt='' />
                            </div>
                        </Link>
                    )
                })}
            </div>
        </PageContent>
    )
}

export default Cities;
