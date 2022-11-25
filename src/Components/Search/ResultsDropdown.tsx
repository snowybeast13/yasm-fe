import React, { FC } from "react";
import { Employee } from "../../Models/interfaces";

interface ResultsProps {
  personType: Employee[];
  setInput: (employee: Employee) => void;
}

const ResultsDropdown: FC<ResultsProps> = ({
  personType,
  // setUserInput,
  setInput,
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
                  key={filteredPersons.person.id}
                  className="select__select-wrapper__items-wrapper__items"
                  onClick={() => setInput(filteredPersons)}
                >
                  <p>{filteredPersons.person.name}</p>
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
