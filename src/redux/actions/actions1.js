import {
  GET_CARDS,
  UPLOAD_CARDS,
  REMOVE_CARDS,
  GET_LIKES,
  REMOVE_LIKES,
  GET_USER,
  SET_USER,
  GET_AVATAR,
  SET_AVATAR,
} from "../сonstants";
import { config } from "../config";

export const getCards = () => ({
  type: GET_CARDS,
  CallApi: `${config.baseUrl} + /cards`,
});
export const uploadCards = (placeName, placeLink) => ({
  type: UPLOAD_CARDS,
  CallApi: `${config.baseUrl} + /cards`,
  payload: { placeName, placeLink },
});
export const removeCards = (placeLink) => ({
  type: REMOVE_CARDS,
  CallApi: `${config.baseUrl} + /cards/${placeLink}`,
});

export const getLikes = (placeLike) => ({
  type: GET_LIKES,
  CallApi: `${config.baseUrl} + /cards/like/${placeLike}`,
});
export const removeLikes = (placeLikeRemove) => ({
  type: REMOVE_LIKES,
  CallApi: `${config.baseUrl} + /cards/like/${placeLikeRemove}`,
});

export const getUser = () => ({
  type: GET_USER,
  CallApi: `${config.baseUrl} + /users/me`,
});
export const setUser = (userName, userJob) => ({
  type: SET_USER,
  CallApi: `${config.baseUrl} + /users/me`,
  payload: { userName, userJob },
});

export const getAvatar = () => ({
  type: GET_AVATAR,
  CallApi: `${config.baseUrl} + /users/me`,
});
export const setAvatar = (placeLink) => ({
  type: SET_AVATAR,
  CallApi: `${config.baseUrl} + /cards`,
  payload: { placeLink },
});
