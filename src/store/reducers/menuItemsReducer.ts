  
import { IModelMenuItem } from '../../interfaces/IModelMenuItem';
import { IMenuItemsActions,SET_MENUITEM,MenuStage} from '../actions/actionsInterfaces/IMenuItemsActions';

//const localSorageLang = localStorage.getItem('language');

const model: IModelMenuItem = {
  plateName: "primerPlato",
  description: "descripcion larga jajsd asd asda sda sdasd",
  shortDdescription: "descripcion corta",
  cant: 0,
  idPlate: 1
}
const model2: IModelMenuItem = {
  plateName: "primerPlato",
  description: "descripcion larga jajsd asd asda sda sdasd",
  shortDdescription: "descripcion corta",
  cant: 0,
  idPlate: 1
}

const initialState: MenuStage = {
          items: [model]
}    

const menuItemsReducer = (state = initialState, action: IMenuItemsActions) => {
  debugger
  switch(action.type) {
    case SET_MENUITEM:
      return {
        ...state,
        items: action.payload
      }
    default:
      return state;
  }
}

export default menuItemsReducer;