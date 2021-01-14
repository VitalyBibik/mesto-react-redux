import React from "react";
import styles from "./places-list.module.scss";
import cn from "classnames";

const PlacesList = () => {
  return (
    <div className={cn(styles["places-list"], styles["root__section"])}></div>
  );
};

export default PlacesList;
