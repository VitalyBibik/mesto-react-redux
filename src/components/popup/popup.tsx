import React, { useState } from "react";
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
  /*
  return (
    <div className="popup popup_profile">
      <div className="popup__content">
        <img src="<%=require('./images/close.svg').default%>" alt="" className="popup__close popup__close_profile">
          <h3 className="popup__title">Редактировать профиль</h3>
          <form className="popup__form" name="editProfile" id="editProfile">
            <div className="input-container">
              <input id="newUserName" required type="text" name="newName"
                     className="popup__input popup__input_type_new-name" minLength="2" maxLength="32" placeholder="Имя">
                <span id="error-newUserName" className="error-message"></span>
            </div>
            <div className="input-container">
              <input id="aboutMe" required type="text" name="aboutMe"
                     className="popup__input popup__input_type_about-me" minLength="2" maxLength="32"
                     placeholder="О себе">
                <span id="error-aboutMe" className="error-message"></span>
            </div>
            <button id="submit" type="submit" className="button popup__btn-save ">Сохранить</button>
            <div className="spinner" id="spinnerEdit"><i></i></div>

          </form>
      </div>
    </div>

  <div className="popup popup_place">
    <div className="popup__content">
      <img src="<%=require('./images/close.svg').default%>" alt="" className="popup__close popup__close_place">
        <h3 className="popup__title">Новое место</h3>
        <form className="popup__form" name="new" id="new">
          <div className="input-container">
            <input required type="text" name="name" id="newPlace" className="popup__input popup__input_type_name"
                   minLength="2" maxLength="32" placeholder="Название">
              <span id="error-newPlace" className="error-message"></span>
          </div>
          <div className="input-container">
            <input required type="url" name="newlink" id="newlink" className="popup__input popup__input_type_link-url"
                   placeholder="Ссылка на картинку">
              <span id="error-newlink" className="error-message"></span>
          </div>
          <button id="submitPlace" type="submit" className="button popup__button popup__button_is-disabled">+</button>
          <div className="spinner" id="spinnerPlace"><i></i></div>
        </form>
    </div>
  </div>

  <div className="popup popup_image">
    <div className="popup__container">
      <img src="<%=require('./images/close.svg').default%>" alt="" className="popup__close popup__close_image">
    </div>
  </div>

  <div className="popup popup_avatar">
    <div className="popup__content">
      <img src="<%=require('./images/close.svg').default%>" alt="" className="popup__close popup__close_place">
        <h3 className="popup__title">Обновить аватар</h3>
        <form className="popup__form" name="avatar" id="avatar">
          <div className="input-container">
            <input required type="url" name="newlinkAvatar" id="newlinkAvatar"
                   className="popup__input popup__input_type_link-url" placeholder="Ссылка на картинку">
              <span id="error-newlinkAvatar" className="error-message"></span>
          </div>
          <button id="submitAvatar" type="submit" className="button popup__button popup__button_is-disabled">Cохранить
          </button>
        </form>
    </div>
  </div>
  );

   */
};
export default Popup;
