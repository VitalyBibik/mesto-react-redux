import React from "react";
import styles from "./App.module.scss";
import cn from "classnames";
import Header from "../header/header";

const App = () => {
  return (
    <div className={cn(styles["root"])}>
      <Header />
    </div>
  );
};

export default App;
