import React from "react";
import styles from "./App.module.scss";
import cn from "classnames";
import Header from "../header/header";
import Profile from "../profile/profile";

const App = () => {
  return (
    <div className={cn(styles["root"])}>
      <Header />
      <Profile />
    </div>
  );
};

export default App;
