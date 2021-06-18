export const SET_RESTAURANT_TABLE = 'SET_RESTAURANT_TABLE';
export const CHECKING_TABLE_SELETED = 'CHECKING_TABLE_SELETED';

export interface IModelTable {
  tableNumer: Number,
  selected: Boolean,
  idRestaurant: String
}


export interface IModelRestaurantTable {
 tables :IModelTable[]
}

interface SetTableAction {
  type: String;
  payload: IModelRestaurantTable;
}

export type IRestaurantTables = SetTableAction;