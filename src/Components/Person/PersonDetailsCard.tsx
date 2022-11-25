import React, { FC } from "react";
import { Employee } from "../../Models/interfaces";

interface CardProps {
  card: Employee;
  closeCard: (singleCard: Employee) => void;
}

const PersonDetailsCard: FC<CardProps> = ({ card, closeCard }: CardProps) => {
  const skills = card.projects.map((b) =>
    b.experiences.map((c) => c.skill.skill.name)
  );
  const newSkillsArr = [];
  for (let i = 0; i < skills.length; i++) {
    newSkillsArr.push(...skills[i]);
  }
  const uniqueSkills = Array.from(new Set(newSkillsArr));

  return (
    <>
      <div>
        <div className="details-box" key={card.person.id}>
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
            {uniqueSkills.map((skill) => (
              <div className="details-box__skills-list--skill">{skill}</div>
            ))}
          </div>
          <hr />

          {/* Contact details and employment type */}
          <div className="details-box__details">
            <div className="details-box__details__contact">
              <div className="details-box__details__contact--emial">
                <p>{card.person.mail}</p>
              </div>
              <div className="details-box__details__contact--phone">
                <p>{card.person.mobilePhone}</p>
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
                <p>{card.person.department}</p>
              </div>
            </div>
          </div>

          {/* Location and onsite ratio */}
          <div className="details-box__location">
            <div className="details-box__location--city">
              <h3>Location</h3>
              {card.person.location && <p>{card.person.location}</p>}
            </div>
            <div className="details-box__location--onsite">
              <div>
                <h3>Onsite ratio</h3>
                {card.person.onsiteRatio && <p>{card.person.onsiteRatio}</p>}
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
