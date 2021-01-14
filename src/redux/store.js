import { applyMiddleware, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import logger from "./middleware/logger";
import api from "./middleware/api";
import { rootReducer } from "./reducer";


/* const enhancer = applyMiddleware(thunk, api, logger); */

/*
const configureStore = (preloadedState: any) => (
  createStore(
    reducer,
    preloadedState,
    composeWithDevTools(
      applyMiddleware(thunk, api, logger)
    )
  )
)
 */
/*
export default createStore(reducer, composeWithDevTools(enhancer));
*/

export const store = createStore(rootReducer)