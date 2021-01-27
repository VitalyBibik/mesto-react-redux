import React from "react";
import close from "../images/close.svg";
import cn from "classnames";
import styles from "../popup/popup.module.scss";

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
        props.isOpen
          ? cn(
              styles["popup"],
              styles["popup-image"],
              styles["popup_is-opened"]
            )
          : cn(styles["popup"], styles["popup-image"])
      }
    >
      <div className={cn(styles["popup-image__content"])}>
        <img
          src={close}
          alt="закрыть окно"
          className={cn(styles["popup__close"], styles["popup-image__close"])}
          onClick={props.onClose}
        />
        <img
          src={props.link}
          alt=""
          className={cn(styles["popup-image__picture"])}
        />
      </div>
    </div>
  );
}
export default ImagePopup;
