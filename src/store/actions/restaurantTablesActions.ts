import { IRestaurantTables,CHECKING_TABLE_SELETED,SET_RESTAURANT_TABLE, IModelRestaurantTable } from './actionsInterfaces/IRestaurantTablesActions';


export const setRestaurantTables = (payload: IModelRestaurantTable): IRestaurantTables => {
  return {
    type: SET_RESTAURANT_TABLE,
    payload 
  }
}

export const checkRestaurantTableSeledted = (): any => {
  return {
    type: CHECKING_TABLE_SELETED
  }
}

