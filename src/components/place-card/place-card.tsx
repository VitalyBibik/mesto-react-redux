import React from "react";
import styles from "./place-card.module.scss";
import cn from "classnames";

const PlaceCard = ( { cards } : any) => {

  return (
    <div className={cn(styles["place-card"])}>
      {cards.card.map((el: any) => {
        return (
        <div>
          <img src={el.link}> className={cn(styles["place-card__image"])}</img>
          <button className={cn(styles["place-card__delete-icon"])} />
        </div>
        <div className={cn(styles["place-card__description"])}>
          <h3 className={cn(styles["place-card__name"])}>{el.name}</h3>
          <div className={cn(styles["counter"])}>
            <button className={cn(styles["place-card__like-icon"])}></button>
            <p className={cn(styles["place-card__number-like"])}>{el.likes.length}</p>
          </div>
        </div>
      }))
    </div>
  );
}

export default PlaceCard;
