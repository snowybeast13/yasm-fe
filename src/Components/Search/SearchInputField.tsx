import React, { FC, useRef, useState } from "react";
import { Employee, SearchResponse, Item } from "../../Models/interfaces";
import ResultsDropdown from "./ResultsDropdown";

interface PersonProps {
  onChangeSearch: (searvhValue: string) => void;
  viewHandler: (value: boolean) => void;
  inputValueChip: Item[];
  removeChip: (value: Employee) => void;
  clearInputData: (value: Employee[]) => void;
  inputRef: any;
  navigateTo: () => void;
  setInput: (item: Item) => void;
  persons: Employee[];
  view: boolean;
  res: Item[];
}
const SearchInputField: FC<PersonProps> = ({
  onChangeSearch,
  viewHandler,
  inputValueChip,
  removeChip,
  clearInputData,
  inputRef,
  navigateTo,
  setInput,
  persons,
  view,
  res,
}: PersonProps): JSX.Element => {
  const ref: any = useRef();
  return (
    <div>
      <div className="input-wrap">
        <div className="input-wrap__input-div">
          {inputValueChip && (
            <div className="input-wrap__input-div__chip-wrapper">
              {inputValueChip.map((singleValue) => (
                <div
                  key={singleValue.item.id}
                  className="input-wrap__input-div--chip"
                >
                  <p>{singleValue.item.name}</p>
                  <button
                    onClick={() => {
                      // removeChip(singleValue);
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
                // onClick={() => clearInputData(inputValueChip)}
              ></button>
            </div>
          )}
        </div>
        <button className="input-wrap__button" onClick={() => navigateTo()}>
          <span className="input-wrap__button--icon"></span>
        </button>
      </div>

      {/* //Dropdown results component */}
      <div ref={ref}>
        {view && <ResultsDropdown personType={persons} setInput={setInput} items={res} />}
      </div>

      <p className="info-text">
        Hit ENTER to search for your desired skill, employee, organization and
        more
      </p>
    </div>
  );
};

export default SearchInputField;
