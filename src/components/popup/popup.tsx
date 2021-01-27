import React from "react";
import styles from "./popup.module.scss";
import cn from "classnames";
import ImagePopup from "../imagePopup/imagePopup";
import PopupWithForm from "../popupWithForm/popupWithForm";

const Popup = () => {
  const obj = {
    newPlaceTitle: "Новое Место",
    avatarTitle: "Обновить аватар",
    profileTitle: "Редактировать профиль",
  };
  return (
    <PopupWithForm
      name="new"
      id="new"
      isOpen={isAddPlacePopupOpen}
      onClose={closeAllPopups}
      title={obj.newPlaceTitle}
    >
      <>
        <div className={cn(styles["input-container"])}>
          <input
            required
            type="text"
            name="name"
            id="newPlace"
            className={cn(
              styles["popup__input"],
              styles["popup__input_type_name"]
            )}
            minLength="2"
            maxLength="32"
            placeholder="Название"
          />
          <span id="error-newPlace" className={cn(styles["error-message"])} />
        </div>
        <div className={cn(styles["input-container"])}>
          <input
            required
            type="url"
            name="newlink"
            id="newlink"
            className={cn(
              styles["popup__input"],
              styles["popup__input_type_link-url"]
            )}
            placeholder="Ссылка на картинку"
          />
          <span id="error-newlink" className={cn(styles["error-message"])} />
        </div>
        <button
          id="submitPlace"
          type="submit"
          className={cn(
            styles["button"],
            styles["popup__button"],
            styles["popup__button_is-disabled"]
          )}
        >
          +
        </button>
        <div className={cn(styles["spinner"])} id="spinnerPlace">
          <i />
        </div>
      </>
    </PopupWithForm>
  );
};
export default Popup;
