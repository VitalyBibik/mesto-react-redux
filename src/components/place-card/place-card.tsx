import React from "react";
import styles from "./place-card.module.scss";
import cn from "classnames";

const PlaceCard = () => {
  return (
    <div className={cn(styles["place-card"])}>
      <div className={cn(styles["place-card__image"])}>
        <button className={cn(styles["place-card__delete-icon"])} />
      </div>
      <div className={cn(styles["place-card__description"])}>
        <h3 className={cn(styles["place-card__name"])}></h3>
        <div className={cn(styles["counter"])}>
          <button className={cn(styles["place-card__like-icon"])}></button>
          <p className={cn(styles["place-card__number-like"])}></p>
        </div>
      </div>
    </div>
  );
};

export default PlaceCard;
