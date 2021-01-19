import React, { useEffect } from "react";
import styles from "./places-list.module.scss";
import { connect } from "react-redux";
import cn from "classnames";
import PlaceCard from "../../components/place-card/place-card";
import { fetchUsers } from "../../redux/actions/userActions";

const PlacesList = ({ card, fetchUsers, userData }: any) => {
  useEffect(() => {
    fetchUsers();
  }, [fetchUsers]);

  console.log("state", userData);
  return (
    <div className={cn(styles["places-list"], styles["root__section"])}>
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
    card: state.card,
    userData: state.users,
  };
};
const mapDispatchToProps = (dispatch: any) => {
  return {
    fetchUsers: () => dispatch(fetchUsers()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(PlacesList);
