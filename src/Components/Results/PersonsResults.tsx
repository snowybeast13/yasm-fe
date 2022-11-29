import React, { FC } from "react";
import { Employee } from "../../Models/interfaces";
import PersonDetailsCard from "../Person/PersonDetailsCard";
import PersonsList from "../Person/PersonsList";

interface PersonResultsProps {
  inputValue: Employee[];
  card: Employee[];
  cardHandler: (userInfo: Employee) => void;
  closeCard: (singleCard: Employee) => void;
}
const PersonsResults: FC<PersonResultsProps> = ({
  inputValue,
  card,
  cardHandler,
  closeCard,
}: PersonResultsProps): JSX.Element => {
  return (
    <div className="list">
      {inputValue.map((singleEl) => (
        <div key={singleEl.person.id} className="list__list-wrapper">
          <div className="list__single-card-wrapper">
            <PersonsList
              userInfo={singleEl}
              cardHandler={cardHandler}
              key={singleEl.person.id}
            />
          </div>
          {card.length !== 0 && (
            <div className="list__details-card-wrapp">
              {card.map((cardSingle: Employee) => (
                <div key={cardSingle.person.id}>
                  {singleEl.person.id === cardSingle.person.id && (
                    <PersonDetailsCard card={singleEl} closeCard={closeCard} />
                  )}
                </div>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default PersonsResults;
