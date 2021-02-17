import React, { useMemo } from "react";
import styles from "./place-card.module.scss";
import cn from "classnames";
import config from "../../config";

const PlaceCard = ({
  card,
  handlePutLike,
  handleRemoveLike,
  handleDeleteCard,
  owner,
  hasLike,
}: any) => {
  return useMemo(() => {
    const handleLikeClick = () => {
      handlePutLike(card._id);
    };
    const handleUnLikeClick = () => {
      handleRemoveLike(card._id);
    };
    const handleDeleteClick = () => {
      if (window.confirm("Вы уверены, что хотите удалить карточку?")) {
        handleDeleteCard(card._id);
      }
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
          <button
            className={cn(styles["place-card__delete-icon"], {
              [styles["place-card__delete-icon_user"]]: owner,
            })}
            onClick={handleDeleteClick}
          />
        </div>
        <div className={cn(styles["place-card__description"])}>
          <h3 className={cn(styles["place-card__name"])}>{card.name}</h3>
          <div className={cn(styles["counter"])}>
            <button
              className={cn(styles["place-card__like-icon"], {
                [styles["place-card__like-icon_liked"]]: hasLike,
              })}
              onClick={hasLike ? handleUnLikeClick : handleLikeClick}
            />
            <p className={cn(styles["place-card__number-like"])}>
              {card.likes.length}
            </p>
          </div>
        </div>
      </div>
    );
  }, [card, handlePutLike, handleRemoveLike, handleDeleteCard, owner, hasLike]);
};
export default PlaceCard;
