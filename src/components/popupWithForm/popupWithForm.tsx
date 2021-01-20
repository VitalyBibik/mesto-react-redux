import React from "react";
import close from "../images/close.svg";

type PopupWithFormProps = {
  isOpen: boolean;
  name: string;
  onClose: (event: React.MouseEvent<HTMLImageElement, MouseEvent>) => void;
  title: string;
  id: string;
  children: React.ReactNode;
};

function PopupWithForm(props: PopupWithFormProps) {
  return (
    <div
      className={
        props.isOpen
          ? `popup popup-${props.name} popup_is-opened`
          : `popup popup-${props.name}`
      }
    >
      <div className="popup__content">
        <img
          src={close}
          alt=""
          className="popup__close"
          onClick={props.onClose}
        />
        <h3 className="popup__title">{props.title}</h3>
        <form className="popup__form" name={props.name} id={props.id}>
          {props.children}
        </form>
      </div>
    </div>
  );
}

export default PopupWithForm;
