import { applyMiddleware, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import api from "./middleware/api";
import { rootReducer } from "./reducer";
import { logger } from "redux-logger";

/* const enhancer = applyMiddleware(thunk, api); */

/*
const configureStore = (preloadedState: any) => (
  createStore(
    reducer,
    preloadedState,
    composeWithDevTools(
      applyMiddleware(thunk, api)
    )
  )
)
 */
/*
export default createStore(reducer, composeWithDevTools(enhancer));
*/

export const store = createStore(rootReducer, applyMiddleware(logger));
