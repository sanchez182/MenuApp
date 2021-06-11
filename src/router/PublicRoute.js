import PropTypes from 'prop-types';

import { Route, Redirect } from 'react-router-dom';


export const PublicRoute = ({
    isAuthenticated,
    restricted,
    component: Component,
    ...rest
}) => {

    return (
        <Route {...rest} render={props => (
            ( isAuthenticated ) && restricted ?
                <Redirect to="/MenuApp/dashboarMenu" />
            : <Component {...props} />
        )} />
    )
}

PublicRoute.propTypes = {
    isAuthenticated: PropTypes.bool.isRequired,
    component: PropTypes.func.isRequired
}
