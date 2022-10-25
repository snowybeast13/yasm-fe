import React, { FC } from "react";
import avatar from "../../assets/Avatar.png";

const Avatar: FC = (): JSX.Element => {
  return <img src={avatar} alt="Avatar" />;
};

export default Avatar;
