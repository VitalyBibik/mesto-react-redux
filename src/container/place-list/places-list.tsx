import React, { useCallback, useEffect } from "react";
import styles from "./places-list.module.scss";
import { useDispatch, useSelector } from "react-redux";
import cn from "classnames";
import PlaceCard from "../../components/place-card/place-card";
import { cardsSelectors, cardsLoadedSelector } from "../../redux/selectors";
import {
  deleteCard,
  getCards,
  putLikes,
  removeLikes,
} from "../../redux/actions/cardActions";
import Loader from "../../components/loader/loader";
import config from "../../config";

const PlacesList = () => {
  const cardsData = useSelector(cardsSelectors);
  const cardsLoaded = useSelector(cardsLoadedSelector);
  const dispatch = useDispatch();

  const getAllCards = useCallback(() => {
    dispatch(getCards());
  }, [dispatch]);

  const handlePutLike = (id: any) => {
    dispatch(putLikes(id));
  };
  const handleRemoveLike = (id: any) => {
    dispatch(removeLikes(id));
  };
  const handleDeleteCard = (id: any) => {
    dispatch(deleteCard(id));
    console.log("data", cardsData);
  };

  const renderCard = () => {
    return (
      <div className={cn(styles["places-list"], styles["root__section"])}>
        {cardsData.cards.map((item: any) => {
          const ownerCard = item.owner._id === config.userId;
          const hasLike = item.likes.map((item: any) => {
            return item._id === config.userId;
          });
          const userHasLike = hasLike.includes(true);
          return (
            <PlaceCard
              card={item}
              key={item._id}
              id={item._id}
              handlePutLike={handlePutLike}
              handleRemoveLike={handleRemoveLike}
              handleDeleteCard={handleDeleteCard}
              owner={ownerCard}
              hasLike={userHasLike}
            />
          );
        })}
      </div>
    );
  };

  useEffect(() => {
    getAllCards();
  }, [getAllCards]);
  if (!cardsLoaded) return <Loader />;
  return renderCard();
};
export default PlacesList;
