import {
  GET_CARDS_FAILURE,
  GET_CARDS_REQUEST,
  GET_CARDS_SUCCESS,
  PUT_LIKES_FAILURE,
  PUT_LIKES_REQUEST,
  PUT_LIKES_SUCCESS,
} from "../constants";
import axios from "axios";
import config from "../../config";
// Разобраться с конфигом

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
      .get(`https://nomoreparties.co/cohort9/cards`, {
        headers: {
          authorization: "41b0685a-8626-46fa-882b-88da0ea48249",
          "Content-Type": "application/json",
        },
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
    console.log(cardId);
    axios
      .put(`https://nomoreparties.co/cohort9/cards/like/${cardId}`, null, {
        headers: {
          authorization: "41b0685a-8626-46fa-882b-88da0ea48249",
          "Content-Type": "application/json",
        },
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
/*
export const removeLikes = (cardId) => {
  return (dispatch) => {
    dispatch(getCardsRequest);
    axios
      .delete(`https://nomoreparties.co/cohort9/cards/likes/${cardId}`, {
       headerSetting,
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
*/
