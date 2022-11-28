import React, { FC } from "react";
import { Employee } from "../../Models/interfaces";
import experienceIcon from "../../assets/Work_experience.png";
import locationIcon from "../../assets/Location.png";
import languagesIcon from "../../assets/Languages.png";

interface InputValueProps {
  userInfo: Employee;
  cardHandler: (userInfo: Employee) => void;
}

const PersonsList: FC<InputValueProps> = ({
  userInfo,
  cardHandler,
}: InputValueProps): JSX.Element => {
  console.log(userInfo);
  return (
    <>
      <div className="card-wrapper__box" key={userInfo.person.id}>
        <div className="card" onClick={() => cardHandler(userInfo)}>
          <div className="card__left-info">
            <img
              src={`data:image/png;base64,${userInfo.person.picture}`}
              className="card__left-info__avatar"
              alt="user-img"
            />
            <div>
              <p>{userInfo.person.name}</p>
              <p>{userInfo.person.jobTitle}</p>
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
                <span>{userInfo.office.name}</span>
              </div>
              <div className="card__right-info__icons-wrapper--icon">
                <img src={languagesIcon} alt="languages" />
                <span>EN | SR</span>
              </div>
            </div>
            <div className="card__right-info__availability">
              {userInfo.availabilities.map((availability) => (
                <div
                  className="tooltip card__right-info__availability--progress"
                  key={availability.availability.id}
                  style={
                    availability.percent >= 0 && availability.percent < 40
                      ? { background: "rgb(160, 197, 42)" }
                      : availability.percent >= 40 && availability.percent <= 80
                      ? { background: "rgb(249, 168, 37)" }
                      : { background: "rgb(208, 64, 64)" }
                  }
                  aria-labelledby="tooltip-info"
                  id={availability.availability.id}
                >
                  <div
                    className="tooltip-text"
                    role="tooltip"
                    id="tooltip-info"
                    key={availability.availability.id}
                  >
                    {availability.availability.descriptions.length !== 0 ? (
                      <div className="tooltip-text__description">
                        <p>{availability.availability.descriptions}</p>
                        <hr />
                      </div>
                    ) : null}
                    <div className="tooltip-text__hours">
                      <p>Planned: {availability.availability.plannedHours}</p>
                      <p>Working: {availability.availability.workHours}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PersonsList;
