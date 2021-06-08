import { useEffect } from 'react';
import {
    Switch,
    Redirect
} from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { startChecking } from '../actions/auth';
import { PublicRoute } from './PublicRoute';
import { PrivateRoute } from './PrivateRoute';
import { LoginScreen } from '../pages/auth/LoginScreen';
import HomePage from '../pages/menu/Homepage';
import About from '../pages/About';
import MenuComponent from '../pages/menu/MenuComponent';
import Page404 from '../pages/404';
import DashboardMenu from '../pages/administration/DashboardMenu';
import AddPlate from '../pages/administration/AddPlate';
import DrawerMenu from '../pages/administration/DrawerMenu';
import StartAppBar from '../pages/menu/StartAppBar';

export const AppRouter = () => {
    const dispatch = useDispatch();
    const { checking, uid } = useSelector(state => state.auth);
    const { open } = useSelector((state) => state.drawerState);

    useEffect(() => {
        dispatch(startChecking());
    }, [dispatch])

    if (checking) {
        return (<h5>Espere...</h5>);
    }


    return (
        <>
            {!!uid &&
                <>
                    <StartAppBar />
                    <DrawerMenu />
                </>}

            <Switch>
                <PublicRoute
                    restricted={false}
                    exact
                    path="/"
                    component={HomePage}
                    isAuthenticated={!!uid}
                />

                <PublicRoute
                    restricted={true}
                    exact
                    path="/dashboardLogin"
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


                <main className={open ? "contentOpen" : "content"}   >
                    <PrivateRoute
                        exact
                        path="/dashboarMenu"
                        component={DashboardMenu}
                        isAuthenticated={!!uid}
                    />

                    <PrivateRoute
                        exact
                        path="/addPlate"
                        component={AddPlate}
                        isAuthenticated={!!uid}
                    />

                </main>
                <PublicRoute
                    exact
                    path="*"
                    component={Page404}
                    isAuthenticated={!!uid}
                />
                <Redirect to="/" />

            </Switch>
        </>

    )
}
