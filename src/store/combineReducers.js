import { combineReducers } from "redux";
import { filterReducer, loginReducer } from "./reducers";

export default combineReducers({
  loginReducer,
  filterReducer,
});
