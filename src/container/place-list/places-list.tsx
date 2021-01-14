import React from "react";
import styles from "./places-list.module.scss";
import { connect } from 'react-redux'
import cn from "classnames";
import PlaceCard from "../../components/place-card/place-card";

const PlacesList = ({card}: any) => {
  return (
    <div className={cn(styles["places-list"], styles["root__section"])}>
      <PlaceCard cards={card}></PlaceCard>
    </div>
  );
};

const mapStateToProps = (store: any) => {
  return {
    card:store
  }
}

export default connect(mapStateToProps)(PlacesList);
