import React from "react";
import styles from "./App.module.scss";
import cn from "classnames";
import Header from "../header/header";
import Profile from "../profile/profile";
import PlacesList from "../../container/place-list/places-list";
import Popup from "../popup/popup";

const App = () => {
  return (
    <div className={cn(styles["root"])}>
      <Header />
      <Profile />
      <PlacesList />
      <Popup />
    </div>
  );
};

export default App;
