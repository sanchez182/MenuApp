import PropTypes from 'prop-types';

import { Route, Redirect } from 'react-router-dom';


export const PrivateRoute = ({
    isAuthenticated,
    component: Component,
    ...rest
}) => {
    debugger
    return (
        <Route { ...rest }
        component={ (props) => (
            ( isAuthenticated )
                ? ( <Component { ...props } /> )
                : ( <Redirect to="/dashboardLogin" /> )
        )}
    
    />

     /*    <Route {...rest} render={props => (
            ( isAuthenticated ) ?
                <Component {...props} />
            : <Redirect to="/dashboardLogin" />
        )} /> */
    )
}

PrivateRoute.propTypes = {
    isAuthenticated: PropTypes.bool.isRequired,
    component: PropTypes.func.isRequired
}
