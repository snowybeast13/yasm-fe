import React, { FC } from "react";
import logo from "../../assets/yasm-logo.png";
import adminIcon from "../../assets/AdminIcon.png";
import Avatar from "../Avatar/Avatar";

const Header: FC = (): JSX.Element => {
  return (
    <div className="Header">
      <img src={logo} alt="Logo" className="Header__Logo" />
      <div className="Header__LeftSideWrapper">
        <img src={adminIcon} alt="AdminIcon" className="Header__AdminIcon" />
        <Avatar />
      </div>
    </div>
  );
};
export default Header;
