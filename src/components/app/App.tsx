import React from "react";
import styles from "./App.module.scss";
import cn from "classnames";
import Header from "../header/header";
import Profile from "../profile/profile";
import PlacesList from "../../container/place-list/places-list";

const App = () => {
  return (
    <div className={cn(styles["root"])}>
      <Header />
      <Profile />
      <PlacesList />
    </div>
  );
};

export default App;
