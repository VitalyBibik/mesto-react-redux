import {
  GET_CARDS_FAILURE,
  GET_CARDS_REQUEST,
  GET_CARDS_SUCCESS,
  PUT_LIKES_REQUEST,
  PUT_LIKES_SUCCESS,
  PUT_LIKES_FAILURE,
  REMOVE_LIKES_REQUEST,
  REMOVE_LIKES_SUCCESS,
  REMOVE_LIKES_FAILURE,
  DELETE_CARD_SUCCESS,
  DELETE_CARD_REQUEST,
  DELETE_CARD_FAILURE,
} from "../constants";

const initialState = {
  loading: false,
  loaded: false,
  error: null,
  cards: [
    {
      createdAt: "2020-03-11T16:21:14.915Z",
      likes: [],
      link: "https://milkov.ru/images/800x600_nyc2s5-cefalu-from-la-rocca.jpg",
      name: "Чефалу, Сицилия",
      owner: {
        name: "Серёга Бирюков",
        about: "Бэкпэкер и каучсёрфер",
        avatar:
          "https://sun9-4.userapi.com/w-Ge9P349j4ZVTXd2Zh2J0Prj8yAfhZ6l2Y8YQ/NTw6lM-rdKg.jpg",
        _id: "d3edf76fd60948246a5c1bd2",
        cohort: "cohort9",
      },
      _id: "5e690ffa69fae7001f72a55f",
    },
  ],
};

const cards = (state = initialState, action) => {
  switch (action.type) {
    case GET_CARDS_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case GET_CARDS_SUCCESS:
      return {
        ...state,
        loading: false,
        loaded: true,
        cards: action.payload,
      };
    case GET_CARDS_FAILURE:
      return {
        ...state,
        loading: false,
        loaded: false,
        cards: [],
        error: action.payload,
      };

    case PUT_LIKES_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case PUT_LIKES_SUCCESS: {
      return {
        ...state,
        loading: false,
        loaded: true,
        cards: state.cards.map((card) => {
          if (action.payload._id === card._id) {
            return {
              ...card,
              likes: action.payload.likes,
            };
          }
          return card;
        }),
      };
    }
    case PUT_LIKES_FAILURE:
      return {
        ...state,
        loading: false,
        loaded: false,
        cards: [],
        error: action.payload,
      };

    case REMOVE_LIKES_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case REMOVE_LIKES_SUCCESS:
      return {
        ...state,
        loading: false,
        loaded: true,
        cards: state.cards.map((card) => {
          if (action.payload._id === card._id) {
            return {
              ...card,
              likes: action.payload.likes,
            };
          }
          return card;
        }),
      };
    case REMOVE_LIKES_FAILURE:
      return {
        ...state,
        loading: false,
        loaded: false,
        cards: [],
        error: action.payload,
      };

    case DELETE_CARD_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case DELETE_CARD_SUCCESS:
      return {
        ...state,
        loading: false,
        loaded: true,
        cards: state.cards.filter((card) => action.payload._id !== card._id),
      };
    case DELETE_CARD_FAILURE:
      return {
        ...state,
        loading: false,
        loaded: false,
        cards: [],
        error: action.payload,
      };
    default:
      return state;
  }
};

export default cards;
