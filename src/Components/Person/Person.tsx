import React, { FC, useState } from "react";
import { Person } from "../../Models/interfaces";
import experienceIcon from "../../assets/Work_experience.png";
import locationIcon from "../../assets/Location.png";
import languagesIcon from "../../assets/Languages.png";

interface InputValueProps {
  inputValue: Person[];
}

const PersonCard: FC<InputValueProps> = ({
  inputValue,
}: InputValueProps): JSX.Element => {
  const [detailsBox, setDetailsBox] = useState<Person>();
  const [isActive, setIsActive] = useState(false);

  function toggleActive(i: Person) {
    console.log(i);
    setDetailsBox(i);
    setIsActive((current) => !current);
  }

  return (
    <>
      <div className="card-wrapper">
        {inputValue.map((single) => (
          <div className="card-wrapper__box">
            <div
              className="card"
              key={single.id}
              onClick={() => {
                toggleActive(single);
              }}
            >
              <div className="card__left-info">
                <img
                  src={`data:image/png;base64,${single.picture}`}
                  className="card__left-info__avatar"
                  alt="user-img"
                />
                <div>
                  <p>{single.name}</p>
                  <p>{single.jobTitle}</p>
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
        ))}
      </div>
      <div>
        {isActive && (
          <div>
            {detailsBox && (
              <div className="details-box">
                {/* Skills */}
                <div className="details-box__skills">
                  <p>Skills</p>
                  <p>X</p>
                </div>

                {/* Skill list */}
                <div className="details-box__skills-list">
                  <p>Some list</p>
                </div>
                <hr />

                {/* Contact details and employment type */}
                <div className="details-box__details">
                  <div className="details-box__details__contact">
                    <div className="details-box__details__contact--emial">
                      <p>{detailsBox.mail}</p>
                    </div>
                    <div className="details-box__details__contact--phone">
                      <p>{detailsBox.mobilePhone}</p>
                    </div>
                    <div className="details-box__details__contact--teams">
                      <p>
                        <a href="$">Contact via teams</a>
                      </p>
                    </div>
                  </div>
                  <div className="details-box__details__employment">
                    <div className="details-box__details__employment--type">
                      <h3>Employment type</h3>
                      <p>Full-time</p>
                    </div>
                    <div className="details-box__details__employment--department">
                      <h3>Business department</h3>
                      <p>{detailsBox.department}</p>
                    </div>
                  </div>
                </div>

                {/* Location and onsite ratio */}
                <div className="details-box__location">
                  <div className="details-box__location--city">
                    <h3>Location</h3>
                    {detailsBox.location && <p>{detailsBox.location}</p>}
                  </div>
                  <div className="details-box__location--onsite">
                    <div>
                      <h3>Onsite ratio</h3>
                      {detailsBox.onsiteRatio && (
                        <p>{detailsBox.onsiteRatio}</p>
                      )}
                    </div>
                    <div>
                      <button>
                        Detail page<span></span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </>
  );
};

export default PersonCard;
