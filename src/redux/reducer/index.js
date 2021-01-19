import { combineReducers } from "redux";

import cards from "./cards";
import users from "./users";

export const rootReducer = combineReducers({
  users,
  cards,
});
