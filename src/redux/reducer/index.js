import { combineReducers } from "redux";


import { cardReducer } from './cards'

export const rootReducer = combineReducers({
  card: cardReducer
})



