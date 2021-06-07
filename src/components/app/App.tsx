import React, { useState } from "react";
import styles from "./App.module.scss";
import cn from "classnames";
import Header from "../header/header";
import Profile from "../profile/profile";
import PlacesList from "../../container/place-list/places-list";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";

const App = () => {
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false); // Profile
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false); // Place
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false); // Avatar
  const [isImagePopupOpen, setIsImagePopupOpen] = React.useState(false); // ImageZoom
  const [currentUser, setCurrentUser] = React.useState({
    name: "",
    about: "",
    avatar: "#",
  });
  const handleEditAvatarClick = () => {
    setIsEditProfilePopupOpen(true);
  };
  const handleEditProfileClick = () => {
    setIsEditAvatarPopupOpen(true);
  };
  const handleAddPlaceClick = () => {
    setIsAddPlacePopupOpen(true);
  };
  const closeAllPopups = () => {
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setIsEditAvatarPopupOpen(false);
    setIsImagePopupOpen(false);
  };

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className={cn(styles["root"])}>
        <Header />
        <Profile />
        <PlacesList />
        <EditProfilePopup
          isOpen={isEditProfilePopupOpen}
          onClose={closeAllPopups}
          onUpdateUser={handleUpdateUser}
        />

        <AddPlacePopup
          isOpen={isAddPlacePopupOpen}
          onClose={closeAllPopups}
          onAddPlace={handleAddPlace}
        />

        <EditAvatarPopup
          isOpen={isEditAvatarPopupOpen}
          onClose={closeAllPopups}
          onUpdateAvatar={handleUpdateAvatar}
        />

        <ConfirmDeletePopup
          isOpen={isConfirmDeletePopupOpen}
          onClose={closeAllPopups}
          onDeleteConfirmation={handleDeleteConfirmation}
          cardId={cardIdToDelete}
        />

        <ImagePopup
          isOpen={isImagePopupOpen}
          onClose={closeAllPopups}
          {...selectedCard}
        />
      </div>
    </CurrentUserContext.Provider>
  );
};

export default App;
