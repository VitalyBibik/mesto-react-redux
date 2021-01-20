import React from "react";
import styles from "./user-info.module.scss";
import cn from "classnames";

const userInfo = () => {
  // user-info__photo -1
  // EDIT - 2
  // + -3
  return (
    <div className={cn(styles["user-info"])}>
      <div className={cn(styles["user-info__photo"])} />
      <div className={cn(styles["user-info__data"])}>
        <h1 className={cn(styles["user-info__name"])}>Jaques Causteau</h1>
        <p className={cn(styles["user-info__job"])}>Sailor, Researcher</p>
        <button className={cn(styles["user-info__edit-btn"])}>Edit</button>
      </div>
      <button className={cn(styles["button"], styles["user-info__button"])}>
        +
      </button>
    </div>
  );
};

export default userInfo;
