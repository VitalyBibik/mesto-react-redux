import {
  DELETE_CARD_FAILURE,
  DELETE_CARD_REQUEST,
  DELETE_CARD_SUCCESS,
  GET_CARDS_FAILURE,
  GET_CARDS_REQUEST,
  GET_CARDS_SUCCESS,
  PUT_LIKES_FAILURE,
  PUT_LIKES_REQUEST,
  PUT_LIKES_SUCCESS,
  REMOVE_LIKES_FAILURE,
  REMOVE_LIKES_REQUEST,
  REMOVE_LIKES_SUCCESS,
} from "../constants";
import axios from "axios";
import config from "../../config";
const headerOptions = config.axiosHeaderSetting.headers;

export const getCardsRequest = () => {
  return {
    type: GET_CARDS_REQUEST,
  };
};

export const getCardsSuccess = (cards) => {
  return {
    type: GET_CARDS_SUCCESS,
    payload: cards,
  };
};

export const getCardsFailure = (error) => {
  return {
    type: GET_CARDS_FAILURE,
    payload: error,
  };
};

export const getCards = () => {
  return (dispatch) => {
    dispatch(getCardsRequest);
    axios
      .get(`${config.baseUrl}/cards`, {
        headers: headerOptions,
      })
      .then((response) => {
        const cards = response.data;
        dispatch(getCardsSuccess(cards));
      })
      .catch((error) => {
        const errorMsg = error.message;
        dispatch(getCardsFailure(errorMsg));
      });
  };
};

export const putLikesRequest = (cardId) => {
  return {
    type: PUT_LIKES_REQUEST,
    payload: cardId,
  };
};

export const putLikesSuccess = (card) => {
  return {
    type: PUT_LIKES_SUCCESS,
    payload: card,
  };
};

export const putLikesFailure = (error) => {
  return {
    type: PUT_LIKES_FAILURE,
    payload: error,
  };
};

export const putLikes = (cardId) => {
  return (dispatch) => {
    dispatch(putLikesRequest(cardId));
    axios
      .put(`${config.baseUrl}/cards/like/${cardId}`, null, {
        headers: headerOptions,
      })
      .then((response) => {
        const cards = response.data;
        dispatch(putLikesSuccess(cards));
      })
      .catch((error) => {
        const errorMsg = error.message;
        dispatch(putLikesFailure(errorMsg));
      });
  };
};

export const removeLikesRequest = (cardId) => {
  return {
    type: REMOVE_LIKES_REQUEST,
    payload: cardId,
  };
};

export const removeLikesSuccess = (card) => {
  return {
    type: REMOVE_LIKES_SUCCESS,
    payload: card,
  };
};

export const removeLikesFailure = (error) => {
  return {
    type: REMOVE_LIKES_FAILURE,
    payload: error,
  };
};

export const removeLikes = (cardId) => {
  return (dispatch) => {
    dispatch(removeLikesRequest);
    axios
      .delete(`${config.baseUrl}/cards/like/${cardId}`, {
        headers: headerOptions,
      })
      .then((response) => {
        const cards = response.data;
        dispatch(removeLikesSuccess(cards));
      })
      .catch((error) => {
        const errorMsg = error.message;
        dispatch(removeLikesFailure(errorMsg));
      });
  };
};

export const deleteCardRequest = (cardId) => {
  return {
    type: DELETE_CARD_REQUEST,
    payload: cardId,
  };
};

export const deleteCardSuccess = (card) => {
  return {
    type: DELETE_CARD_SUCCESS,
    payload: card,
  };
};

export const deleteCardFailure = (error) => {
  return {
    type: DELETE_CARD_FAILURE,
    payload: error,
  };
};

export const deleteCard = (cardId) => {
  console.log(cardId);
  return (dispatch) => {
    dispatch(deleteCardRequest());
    axios
      .delete(`${config.baseUrl}/cards/${cardId}`, {
        headers: headerOptions,
      })
      .then((response) => {
        const cards = response.data;
        dispatch(deleteCardSuccess(cards));
      })
      .catch((error) => {
        const errorMsg = error.message;
        dispatch(deleteCardFailure(errorMsg));
      });
  };
};
