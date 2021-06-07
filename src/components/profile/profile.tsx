import React from "react";
import styles from "./profile.module.scss";
import cn from "classnames";
import UserInfo from "../user-info/user-info";

const Profile = () => {
  return (
    <div className={cn(styles["profile"], styles["root__section"])}>
      <UserInfo />
    </div>
  );
};

export default Profile;
