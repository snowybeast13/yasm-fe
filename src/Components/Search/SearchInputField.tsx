import React, { FC } from "react";
import { Employee } from "../../Models/interfaces";

interface PersonProps {
  onChangeSearch: (searvhValue: string) => void;
  viewHandler: (value: boolean) => void;
  inputValueChip: Employee[];
  removeChip: (value: Employee) => void;
  clearInputData: (value: Employee[]) => void;
  inputRef: any;
  navigateTo: (value: Employee[]) => void;
}
const SearchInputField: FC<PersonProps> = ({
  onChangeSearch,
  viewHandler,
  inputValueChip,
  removeChip,
  clearInputData,
  inputRef,
  navigateTo,
}: PersonProps): JSX.Element => {
  return (
    <div>
      <div className="input-wrap">
        <div className="input-wrap__input-div">
          {inputValueChip && (
            <div className="input-wrap__input-div__chip-wrapper">
              {inputValueChip.map((singleValue) => (
                <div
                  key={singleValue.person.id}
                  className="input-wrap__input-div--chip"
                >
                  <p>{singleValue.person.name}</p>
                  <button
                    onClick={() => {
                      removeChip(singleValue);
                    }}
                  ></button>
                </div>
              ))}
            </div>
          )}
          <input
            className="input-wrap__input-div__input-field"
            type="text"
            placeholder="Search"
            onChange={(e) => onChangeSearch(e.target.value)}
            onClick={() => viewHandler(true)}
            ref={inputRef}
          />
          {inputValueChip.length !== 0 && (
            <div>
              <button
                className="input-wrap__clear-button"
                onClick={() => clearInputData(inputValueChip)}
              ></button>
            </div>
          )}
        </div>
        <button
          className="input-wrap__button"
          onClick={() => navigateTo(inputValueChip)}
        >
          <span className="input-wrap__button--icon"></span>
        </button>
      </div>
      <p className="info-text">
        Hit ENTER to search for your desired skill, employee, organization and
        more
      </p>
    </div>
  );
};

export default SearchInputField;
