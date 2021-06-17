  
import { createStore, combineReducers,applyMiddleware } from 'redux';
import thunk from 'redux-thunk'
import {composeWithDevTools} from 'redux-devtools-extension'
import langReducer from './reducers/langReducer';
import menuItemReducer from './reducers/menuItemsReducer'; 
import alertComponentReducer from './reducers/alertComponentReducer';
import requestReducer from './reducers/requestReducer';

const rootReducer = combineReducers({
  lang: langReducer,
  menuItemReducer,
  openMessageAlert:alertComponentReducer,
  requestReducer
});

const middleware = [thunk]
const store = createStore(rootReducer,{}, composeWithDevTools(applyMiddleware(...middleware)));

export type RootState = ReturnType<typeof rootReducer>;

export default store;