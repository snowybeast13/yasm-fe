import React, { FC, useState } from "react";
import { Person } from "../../Models/interfaces";

interface CardProps {
  card: Person;
  closeCard: (singleCard: Person) => void;
}

const PersonDetailsCard: FC<CardProps> = ({ card, closeCard }: CardProps) => {
  return (
    <>
      <div>
        <div className="details-box" key={card.id}>
          {/* Skills */}
          <div className="details-box__skills">
            <h3>Skills</h3>
            <button
              className="details-box__close"
              onClick={() => closeCard(card)}
            ></button>
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
                <p>{card.mail}</p>
              </div>
              <div className="details-box__details__contact--phone">
                <p>{card.mobilePhone}</p>
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
                <p>{card.department}</p>
              </div>
            </div>
          </div>

          {/* Location and onsite ratio */}
          <div className="details-box__location">
            <div className="details-box__location--city">
              <h3>Location</h3>
              {card.location && <p>{card.location}</p>}
            </div>
            <div className="details-box__location--onsite">
              <div>
                <h3>Onsite ratio</h3>
                {card.onsiteRatio && <p>{card.onsiteRatio}</p>}
              </div>
              <div className="details-box__btn-wrapper">
                <button className="details-box__btn">
                  Detail page<span className="details-box__btn--arrow"></span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PersonDetailsCard;
