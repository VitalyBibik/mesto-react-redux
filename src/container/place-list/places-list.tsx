import React, { useEffect } from "react";
import styles from "./places-list.module.scss";
import { useDispatch, useSelector } from "react-redux";
import cn from "classnames";
import PlaceCard from "../../components/place-card/place-card";
import { cardsSelectors, usersSelectors } from "../../redux/selectors";
import { fetchUsers } from "../../redux/actions/userActions";
import { getCards } from "../../redux/actions/cardActions";

const PlacesList = () => {
  const cardsData = useSelector(cardsSelectors);
  const userData = useSelector(usersSelectors);
  const dispatch = useDispatch();

  const testUserGet = () => {
    /*{userData.loading ? (
    <h2>loading</h2>
  ) : userData.error ? (
    <h2>userData.error</h2>
  ) : (
    userData &&
    userData.users &&
    userData.users.map((user: { name: React.ReactNode }) => (

      <p>{user.name}</p>
    ))
  )}

   */
  };
  const getAllCards = () => {
    dispatch(getCards());
  };

  const getUsers = () => {
    dispatch(fetchUsers());
  };

  useEffect(() => {
    getAllCards();
  }, []);
  return (
    <div className={cn(styles["places-list"], styles["root__section"])}>
      {cardsData.cards.map((item: any) => {
        return <PlaceCard card={item} />;
      })}
    </div>
  );
}; /* <PlaceCard cards={cardsData.cards} /> */
export default PlacesList;
