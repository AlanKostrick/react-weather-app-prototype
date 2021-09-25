import {
    CITIES,
    CITY,
    HOME,
    STAR_WARS
} from '../../data/constants';

import CitiesPage from '../../pages/cities';
import CityPage from '../../pages/city';
import Error404 from '../../pages/error';
import ErrorBoundary from '../error-boundary';
import FetchDataFromApiSample from '../../pages/fetch-data-example';
import HomePage from '../../pages/home';
import { Route } from 'react-router-dom';
import { Switch } from 'react-router-dom';

export const PageSwitch = ({ cities }) => (
    <ErrorBoundary>
        <Switch>
            <Route exact path={CITIES}>
                <CitiesPage cities={cities} />
            </Route>
            <Route exact path={CITY}>
                <CityPage cities={cities} />
            </Route>
            <Route exact path={STAR_WARS}>
                <FetchDataFromApiSample />
            </Route>
            <Route exact path={HOME} component={HomePage} />
            <Route component={Error404} />
        </Switch>
    </ErrorBoundary>
)