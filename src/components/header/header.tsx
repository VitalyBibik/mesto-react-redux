import React from "react";
import styles from "./header.module.scss";
import cn from "classnames";
import SvgLogo from "../../images/logo/logo";

const Header = () => {
  return (
    <div className={cn(styles["header"], styles["root__section"])}>
      <SvgLogo />
    </div>
  );
};

export default Header;
