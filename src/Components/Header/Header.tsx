import React, { FC } from "react";
import logo from "../../assets/yasm-logo.png";
import adminIcon from "../../assets/AdminIcon.png";
import Avatar from "../Avatar/Avatar";

const Header: FC = (): JSX.Element => {
  return (
    <div className="header">
      <img src={logo} alt="Logo" className="header__logo" />
      <div className="header__left-side-wrapper">
        <img src={adminIcon} alt="AdminIcon" className="header__admin-icon" />
        <Avatar />
      </div>
    </div>
  );
};
export default Header;
