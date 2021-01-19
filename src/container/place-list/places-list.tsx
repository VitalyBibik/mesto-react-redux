import React, { useEffect } from "react";
import styles from "./places-list.module.scss";
import { connect } from "react-redux";
import cn from "classnames";
import PlaceCard from "../../components/place-card/place-card";
import { fetchUsers } from "../../redux/actions/userActions";
import { cardsSelectors, usersSelectors } from "../../redux/selectors";

const PlacesList = ({ cards, fetchUsers, userData }: any) => {
  useEffect(() => {
    fetchUsers();
  }, [fetchUsers]);
  return (
    <div className={cn(styles["places-list"], styles["root__section"])}>
      <PlaceCard cards={cards.cards} />
      {userData.loading ? (
        <h2>loading</h2>
      ) : userData.error ? (
        <h2>userData.error</h2>
      ) : (
        userData &&
        userData.users &&
        userData.users.map((user: { name: React.ReactNode }) => (
          <p>{user.name}</p>
        ))
      )}
    </div>
  );
};

const mapStateToProps = (state: any) => {
  return {
    cards: cardsSelectors(state),
    userData: usersSelectors(state),
  };
};
const mapDispatchToProps = {
  fetchUsers,
};

export default connect(mapStateToProps, mapDispatchToProps)(PlacesList);
