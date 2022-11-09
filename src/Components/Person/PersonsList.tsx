import React, { FC, useEffect, useRef, useState } from "react";
import { Person } from "../../Models/interfaces";
import experienceIcon from "../../assets/Work_experience.png";
import locationIcon from "../../assets/Location.png";
import languagesIcon from "../../assets/Languages.png";
// import PersonDetailsCard from "./PersonDetailsCard";

interface InputValueProps {
  userInfo: Person;
  cardHandler: (userInfo: Person) => void;
}

const PersonsList: FC<InputValueProps> = ({
  userInfo,
  cardHandler,
}: InputValueProps): JSX.Element => {
  return (
    <div className="card-wrapper__box" key={userInfo.id}>
      <div className="card" onClick={() => cardHandler(userInfo)}>
        <div className="card__left-info">
          <img
            src={`data:image/png;base64,${userInfo.picture}`}
            className="card__left-info__avatar"
            alt="user-img"
          />
          <div>
            <p>{userInfo.name}</p>
            <p>{userInfo.jobTitle}</p>
          </div>
        </div>
        <div className="card__right-info">
          <div className="card__right-info__icons-wrapper">
            <div className="card__right-info__icons-wrapper--icon">
              <img src={experienceIcon} alt="expirience" />
              <span>7+</span>
            </div>
            <div className="card__right-info__icons-wrapper--icon">
              <img src={locationIcon} alt="location" />
              <span>Somewhere</span>
            </div>
            <div className="card__right-info__icons-wrapper--icon">
              <img src={languagesIcon} alt="languages" />
              <span>EN | SR</span>
            </div>
          </div>
          <div className="card__right-info__availability">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PersonsList;
