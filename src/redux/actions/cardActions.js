import {
  GET_CARDS_FAILURE,
  GET_CARDS_REQUEST,
  GET_CARDS_SUCCESS,
} from "../constants";
import axios from "axios";

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
