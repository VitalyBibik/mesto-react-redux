import produce from "immer";
import {
  UPLOAD_CARDS,
  REQUEST,
  SUCCESS,
  FAILURE,
  GET_CARDS,
  REMOVE_CARDS,
} from "../сonstants";

const initialState = {
  loading: {},
  loaded: {},
  error: null,
  entities: {},
};

export default produce((draft = initialState, action) => {
  const { type, payload, reviewId, userId, restaurantId, response } = action;

  switch (type) {
    case GET_CARDS + REQUEST: {
      draft.error = null;
      draft.loading[restaurantId] = true;
      break;
    }
    case GET_CARDS + SUCCESS: {
      draft.loading[restaurantId] = false;
      draft.loaded[restaurantId] = true;
      draft.entities = { ...draft.entities, ...response };
      break;
    }
    case GET_CARDS + FAILURE: {
      draft.loading[restaurantId] = false;
      draft.loaded[restaurantId] = false;
      draft.error = action.error;
      break;
    }
    case UPLOAD_CARDS:
      const { placeName, placeLink } = payload.review;
      draft.entities[reviewId] = { id: reviewId, userId };
      break;
    default:
      return draft;
  }
});
