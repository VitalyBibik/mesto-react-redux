import React, { useMemo } from "react";
import styles from "./place-card.module.scss";
import cn from "classnames";
import config from "../../config";

const PlaceCard = ({ card, handlePutLike, owner }: any) => {
  return useMemo(() => {
    console.log("like", owner);
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
              className={cn(styles["place-card__like-icon"], {
                [styles["place-card__like-icon_liked"]]: owner,
              })}
              onClick={handleLikeClick}
            />
            <p className={cn(styles["place-card__number-like"])}>
              {card.likes.length}
            </p>
          </div>
        </div>
      </div>
    );
  }, [card, handlePutLike, owner]);
};
export default PlaceCard;
