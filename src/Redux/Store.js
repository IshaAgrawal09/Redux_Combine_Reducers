import { combineReducers, createStore } from "redux";
import {
  Add_Reducer,
  // clear_Reducer,
  Divide_Reducer,
  Multiply_Reducer,
  Subtract_Reducer,
} from "./Reducer";

const rootReducer = combineReducers({
  add: Add_Reducer,
  Subtract: Subtract_Reducer,
  multiply: Multiply_Reducer,
  divide: Divide_Reducer,
  // clear: clear_Reducer,
});

const store = createStore(rootReducer);
export default store;
