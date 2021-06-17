import { useEffect } from 'react';
import { Switch } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { PublicRoute } from './PublicRoute';
import MenuComponent from '../pages/menu/MenuComponent';
import Page404 from '../pages/404';
import Homepage from '../pages/menu/Homepage';
import AlertComponent from '../components/AlertComponent';
import TablesHome from '../pages/menu/TablesHome';

export const AppRouter = () => {
    const dispatch = useDispatch();
  
    useEffect(() => {
       // dispatch(startChecking());
       //traer todo lo del restaurante, pegarse a api
    }, [dispatch])


    return (
        <>
            <AlertComponent />
            <Switch>
                <PublicRoute
                    exact
                    path="/menu"
                    component={MenuComponent}
                />

                <PublicRoute
                    exact
                    path="/tables"
                    component={TablesHome}
                />

                <PublicRoute
                    exact
                    path="/:id"
                    component={Homepage}
                />

                <PublicRoute
                    exact
                    path="*"
                    component={Page404}
                />

            </Switch>
        </>

    )
}

export default AppRouter;