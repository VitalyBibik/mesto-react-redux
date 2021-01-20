import React from "react";
import close from "../images/close.svg";
type ImagePopupProps = {
  card: object;
  isOpen: boolean;
  onClose: (event: React.MouseEvent<HTMLImageElement, MouseEvent>) => void;
  title: string;
  link: string;
};

function ImagePopup(props: ImagePopupProps) {
  return (
    <div
      className={
        props.isOpen ? "popup popup-image popup_is-opened" : "popup popup-image"
      }
    >
      <div className="popup-image__content">
        <img
          src={close}
          alt="закрыть окно"
          className="popup__close popup-image__close"
          onClick={props.onClose}
        />
        <img src={props.card.link} alt="" className="popup-image__picture" />
      </div>
    </div>
  );
}
export default ImagePopup;
