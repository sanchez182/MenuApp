  
import { SET_RESTAURANT_TABLE,CHECKING_TABLE_SELETED,IModelRestaurantTable, IRestaurantTables } from '../actions/actionsInterfaces/IRestaurantTablesActions';


const initialState: IModelRestaurantTable   = {
  tables: []
}


const restaurantTablesReducer = (state = initialState, action: IRestaurantTables) => {
  switch(action.type) {
    case SET_RESTAURANT_TABLE:
      return {
        ...state, 
        item: action.payload
      }
      case CHECKING_TABLE_SELETED:
      return {
        ...state,
      }
    default:
      return state;
  }
}

export default restaurantTablesReducer;