import React from "react";
import styles from "./places-list.module.scss";
import cn from "classnames";

const PlacesList = () => {
  return (
    <div className={cn(styles["places-list"], styles["root__section"])}>
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
    </div>
  );
};

export default PlacesList;
