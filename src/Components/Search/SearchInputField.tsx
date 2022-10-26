import React, { FC } from "react";

const SearchInputField: FC = (): JSX.Element => {
  return (
    <div>
      <div className="input-wrap">
        <input
          className="input-wrap__input-field"
          type="text"
          placeholder="Search"
        />
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
