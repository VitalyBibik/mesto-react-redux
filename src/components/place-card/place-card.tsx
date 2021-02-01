import React, { useMemo } from "react";
import styles from "./place-card.module.scss";
import cn from "classnames";

const PlaceCard = ({ card, handlePutLike }: any) => {
  return useMemo(() => {
    const handleLikeClick = () => {
      handlePutLike(card._id);
    };
    return (
      <div className={cn(styles["place-card"])}>
        <div
          className={cn(styles["place-card__image"])}
          style={{
            backgroundImage: "url(" + card.link + ")",
          }}
          key={card._id}
        >
          <button className={cn(styles["place-card__delete-icon"])} />
        </div>
        <div className={cn(styles["place-card__description"])}>
          <h3 className={cn(styles["place-card__name"])}>{card.name}</h3>
          <div className={cn(styles["counter"])}>
            <button
              className={cn(styles["place-card__like-icon"])}
              onClick={handleLikeClick}
            />
            <p className={cn(styles["place-card__number-like"])}>
              {card.likes.length}
            </p>
          </div>
        </div>
      </div>
    );
  }, [card, handlePutLike]);
};
export default PlaceCard;
