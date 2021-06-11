
import { Tune } from "@material-ui/icons";
import AddDrink from "../pages/administration/AddDrink";
import AddPlate from "../pages/administration/AddPlate";
import DashboardMenu from "../pages/administration/DashboardMenu";


export const routesList = [
    {
        isPrivate: true,
        exact: true,
        name: 'dashboarMenu', path: '/MenuApp/dashboarMenu',
        iconName: <Tune />,
        showInMenu: true,
        component: DashboardMenu ,
        level: 1,
        children:
            [
                {
                    name: 'addPlate', iconName: <Tune />, path: '/MenuApp/addPlate', showInMenu: false, level: 2,
                    isPrivate: true, exact: true, component: AddPlate
                },
                {
                    name: 'addDrink', iconName: <Tune />, path: '/MenuApp/addDrink', showInMenu: false, level: 2,
                    isPrivate: true, exact: true, component: AddDrink
                }
            ]
    }
]