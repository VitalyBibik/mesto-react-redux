import React, { useEffect } from "react";
import styles from "./places-list.module.scss";
import { useDispatch, useSelector } from "react-redux";
import cn from "classnames";
import PlaceCard from "../../components/place-card/place-card";
import { cardsSelectors, cardsLoadedSelector } from "../../redux/selectors";
import { getCards, putLikes } from "../../redux/actions/cardActions";
import Loader from "../../components/loader/loader";
import config from "../../config";

const PlacesList = () => {
  const cardsData = useSelector(cardsSelectors);
  const cardsLoaded = useSelector(cardsLoadedSelector);
  const dispatch = useDispatch();

  const getAllCards = () => {
    dispatch(getCards());
  };

  const handlePutLike = (id: any) => {
    dispatch(putLikes(id));
  };

  const renderCard = () => {
    if (cardsData.cards.length > 1) {
      return (
        <div className={cn(styles["places-list"], styles["root__section"])}>
          {cardsData.cards.map((item: any) => {
            const ownerLike = item.owner._id === config.userId;
            return (
              <PlaceCard
                card={item}
                key={item._id}
                id={item._id}
                handlePutLike={handlePutLike}
                owner={ownerLike}
              />
            );
          })}
        </div>
      );
    } else {
      return (
        <div className={cn(styles["places-list"], styles["root__section"])}>
          (
          <PlaceCard
            card={cardsData.cards}
            key={cardsData.cards._id}
            id={cardsData.cards._id}
            handlePutLike={handlePutLike}
            owner={cardsData.cards.owner._id === config.userId}
          />
          );
        </div>
      );
    }
  };

  useEffect(() => {
    getAllCards();
  }, []);
  if (!cardsLoaded) return <Loader />;
  return renderCard();
};
export default PlacesList;
