import React, { FC } from "react";
import { Person } from "../../Models/interfaces";

interface ResultsProps {
  personType: Person[];
  setUserInput: (user: Person) => void;
}

const ResultsDropdown: FC<ResultsProps> = ({
  personType,
  setUserInput,
}: ResultsProps): JSX.Element => {
  return (
    <div className="select">
      <div className="select__select-wrapper">
        {personType.length ? (
          <div>
            <div className="select__select-wrapper__label">
              <span></span>
              <p>PERSON</p>
            </div>
            <div className="select__select-wrapper__items-wrapper">
              {personType.map((filteredPersons) => (
                <div
                  key={filteredPersons.id}
                  className="select__select-wrapper__items-wrapper__items"
                  onClick={() => setUserInput(filteredPersons)}
                >
                  <p>{filteredPersons.name}</p>
                </div>
              ))}
            </div>
          </div>
        ) : (
          <h3>No options</h3>
        )}
      </div>
    </div>
  );
};
export default ResultsDropdown;
