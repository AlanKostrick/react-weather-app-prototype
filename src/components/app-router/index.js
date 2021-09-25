import {
    CITIES,
    CITY,
    HOME
} from '../../data/constants';

import CitiesPage from '../../pages/cities';
import CityPage from '../../pages/city';
import Error404 from '../../pages/error';
import ErrorBoundary from '../error-boundary';
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
            <Route exact path={HOME} component={HomePage} />
            <Route component={Error404} />
        </Switch>
    </ErrorBoundary>
)