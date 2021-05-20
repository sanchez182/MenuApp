  
import { createStore, combineReducers } from 'redux';

import langReducer from './reducers/langReducer';
import menuItemReducer from './reducers/menuItemsReducer';

const rootReducer = combineReducers({
  lang: langReducer,
  menuItemReducer
});

const store = createStore(rootReducer);

export type RootState = ReturnType<typeof rootReducer>;

export default store;