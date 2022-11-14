import React, { FC } from "react";
import { Employee, Person } from "../../Models/interfaces";

interface PersonProps {
  persons: Employee[];
  onChangeSearch: (searvhValue: string) => void;
  viewHandler: (value: boolean) => void;
  inputValueChip: Person[];
  removeChip: (value: Person) => void;
  clearInputData: (value: Person[]) => void;
  search: string;
}
const SearchInputField: FC<PersonProps> = ({
  persons,
  onChangeSearch,
  viewHandler,
  inputValueChip,
  removeChip,
  clearInputData,
  search,
}: PersonProps): JSX.Element => {
  // const inputRef: any = useRef();

  return (
    <div>
      <div className="input-wrap">
        <div className="input-wrap__input-div">
          {inputValueChip && (
            <div className="input-wrap__input-div__chip-wrapper">
              {inputValueChip.map((singleValue) => (
                <div
                  key={singleValue.id}
                  className="input-wrap__input-div--chip"
                >
                  <p>{singleValue.name}</p>
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
            value={search}
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
        <button className="input-wrap__button">
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
