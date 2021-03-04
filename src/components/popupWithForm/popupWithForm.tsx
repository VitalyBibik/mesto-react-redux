import React from "react";
import close from "../../images/close.svg";

type PopupWithFormProps = {
  name: string;
  onClose: (event: React.MouseEvent<HTMLImageElement, MouseEvent>) => void;
  title: string;
  id: string;
  children: React.ReactNode;
  isOpen: Boolean;
};

function PopupWithForm(props: PopupWithFormProps) {
  return (
    <div
      className={`popup popup_type_${props.name} ${
        props.isOpen ? "popup_is-opened" : ""
      }`}
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
