  
import { IModelMenuItem } from '../../interfaces/IModelMenuItem';
import { IMenuItemsActions,SET_MENUITEM,MenuStage} from '../actions/actionsInterfaces/IMenuItemsActions';

const model: IModelMenuItem = {
  plateName: "primerPlato",
  description: "descripcion larga jajsd asd asda sda sdasd",
  shortDdescription: "descripcion corta",
  cant: 0,
  idPlate: 1
}
const model2: IModelMenuItem = {
  plateName: "segundo plato",
  description: "descripcion larga jajsd asd asda sda sdasd",
  shortDdescription: "descripcion corta",
  cant: 0,
  idPlate: 2
}

const model3: IModelMenuItem = {
  plateName: "Tercer plato",
  description: "descripcion larga jajsd asd asda sda sdasd",
  shortDdescription: "descripcion corta",
  cant: 0,
  idPlate: 3
}

const model4: IModelMenuItem = {
  plateName: "Tercer plato",
  description: "descripcion larga jajsd asd asda sda sdasd",
  shortDdescription: "descripcion corta",
  cant: 0,
  idPlate: 4
}

const initialState: MenuStage ={ items: [model,model2,model3,model4]}

const menuItemsReducer = (state = initialState, action: IMenuItemsActions) => {
  switch(action.type) {
    case SET_MENUITEM:
      return {
        ...state, 
        item: action.payload
      }
    default:
      return state;
  }
}

export default menuItemsReducer;