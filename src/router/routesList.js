
import { Tune } from "@material-ui/icons";
import AddAlgo from "../pages/administration/AddAlgo";
import AddDrink from "../pages/administration/AddDrink";
import AddPlate from "../pages/administration/AddPlate";
import DashboardMenu from "../pages/administration/DashboardMenu";


export const routesList = [
    {
        isPrivate: true,
        exact: true,
        name: 'dashboarMenu', path: '/dashboarMenu',
        iconName: <Tune />,
        showInMenu: true,
        component: <DashboardMenu />,
        level: 1,
        children:
            [
                {
                    name: 'addPlate', iconName: <Tune />, path: '/addPlate', showInMenu: false, level: 2, isPrivate: true, exact: true, component: AddPlate,
                    children: [
                        {
                            name: 'addAlgo', iconName: <Tune />, path: '/addAlgo', showInMenu: false, level: 3,
                            isPrivate: true, exact: true, component: AddAlgo
                        }
                    ]
                },
                {
                    name: 'addDrink', iconName: <Tune />, path: '/addDrink', showInMenu: false, level: 2,
                    isPrivate: true, exact: true, component: AddDrink
                }
            ]
    }
]