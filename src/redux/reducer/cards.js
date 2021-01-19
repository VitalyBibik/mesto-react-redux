export const initialState = {
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
  isFetching: false,
};
const cardReducer = (state = initialState) => {
  return state.cards;
};

export default cardReducer;
