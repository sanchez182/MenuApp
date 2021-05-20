import { IModelMenuItem } from '../../interfaces/IModelMenuItem';
import { IMenuItemsActions,SET_MENUITEM } from './actionsInterfaces/IMenuItemsActions';

// add item to menu
export const setMenuItems = (item: [IModelMenuItem]): IMenuItemsActions => {
  //localStorage.setItem('language', lang);
  return {
    type: SET_MENUITEM,
    payload: item
  }
}
