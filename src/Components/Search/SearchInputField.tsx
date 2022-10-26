import React, { FC } from "react";

const SearchInputField: FC = (): JSX.Element => {
  return (
    <div>
      <div className="InputWrap">
        <input
          className="InputWrap__input-field"
          type="text"
          placeholder="Search"
        />
        <button className="InputWrap__Button">
          <span className="InputWrap__Button--icon"></span>
        </button>
      </div>
      <p className="InfoText">
        Hit ENTER to search for your desired skill, employee, organization and
        more
      </p>
    </div>
  );
};

export default SearchInputField;
