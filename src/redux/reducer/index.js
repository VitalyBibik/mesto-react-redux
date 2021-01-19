import { combineReducers } from "redux";

import cardReducer from "./cards";
import users from "./users";

export const rootReducer = combineReducers({
  users,
});
