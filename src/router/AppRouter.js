import { useEffect } from 'react';
import { Switch, Redirect } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { startChecking } from '../actions/auth';
import { PublicRoute } from './PublicRoute';
import { LoginScreen } from '../pages/auth/LoginScreen';
import About from '../pages/About';
import MenuComponent from '../pages/menu/MenuComponent';
import Page404 from '../pages/404';
import { RenderPrivateRoutes } from './MenuRoutes';
import Homepage from '../pages/menu/Homepage';
import AlertComponent from '../components/AlertComponent';

export const AppRouter = () => {
    const dispatch = useDispatch();
    const { checking, uid, wasDasborad } = useSelector(state => state.auth);

    const screens = ["addPlate", "addDrink"]
    useEffect(() => {
       dispatch(startChecking());
    }, [dispatch])

    if (checking) {
        return (<h5>Espere un momento por favor...</h5>);
    }

    if (wasDasborad) {
        window.location.pathname = '/MenuApp/dashboardLogin'
        return <p>Redirigiendo espere un momento por favor...</p>
    }

    return (
        <>
            <AlertComponent/>
            <Switch>
                <PublicRoute
                    restricted={false}
                    exact
                    path="/MenuApp"
                    component={Homepage}
                    isAuthenticated={!!uid}
                />

                <PublicRoute
                    restricted={true}
                    exact
                    path="/MenuApp/dashboardLogin"
                    component={LoginScreen}
                    isAuthenticated={!!uid}
                />

                <PublicRoute
                    restricted={false}
                    exact
                    path="/about"
                    component={About}
                    isAuthenticated={!!uid}
                />

                <PublicRoute
                    restricted={false}
                    exact
                    path="/menu"
                    component={MenuComponent}
                    isAuthenticated={!!uid}
                />


              {!!uid && <RenderPrivateRoutes screens={screens} />}
              {/*        <RenderPrivateRoutes screens={screens} /> */}
 
                <PublicRoute
                    exact
                    path="*"
                    component={Page404}
                    isAuthenticated={!!uid}
                />
                <Redirect to="/MenuApp" />

            </Switch>
        </>

    )
}

export default AppRouter;