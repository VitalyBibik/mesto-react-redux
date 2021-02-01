import React, { useEffect } from "react";
import styles from "./places-list.module.scss";
import { useDispatch, useSelector } from "react-redux";
import cn from "classnames";
import PlaceCard from "../../components/place-card/place-card";
import { cardsSelectors, cardsLoadedSelector } from "../../redux/selectors";
import { getCards } from "../../redux/actions/cardActions";
import Loader from "../../components/loader/loader";

const PlacesList = () => {
  const cardsData = useSelector(cardsSelectors);
  const cardsLoaded = useSelector(cardsLoadedSelector);
  const dispatch = useDispatch();

  const getAllCards = () => {
    dispatch(getCards());
  };

  function handlePutLike(id: any) {
    console.log(id);
  }

  useEffect(() => {
    getAllCards();
  }, []);
  if (!cardsLoaded) return <Loader />;
  return (
    <div className={cn(styles["places-list"], styles["root__section"])}>
      {cardsData.cards.map((item: any) => {
        return (
          <PlaceCard
            card={item}
            key={item._id}
            id={item._id}
            handlePutLike={handlePutLike}
          />
        );
      })}
    </div>
  );
};
export default PlacesList;
