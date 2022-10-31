import React, { FC, useEffect, useRef, useState } from "react";
import useDebounce from "../../hooks/useDebounce";
import { Employee, Person } from "../../Models/interfaces";

interface PersonProps {
  persons: Employee[];
}
const SearchInputField: FC<PersonProps> = ({
  persons,
}: PersonProps): JSX.Element => {
  const [personType, setPersonType] = useState<Person[]>([]);
  const [search, setSearch] = useState<string | null>(null);
  const [inputValue, setInputValue] = useState<Person[]>([]);

  const debouncedSearch = useDebounce(search, 500);

  useEffect(() => {
    const typePerson = persons.map((person) => person.person);

    const filter = typePerson.filter((persone) =>
      persone.name.toLowerCase().includes(debouncedSearch)
    );
    if (debouncedSearch) {
      setPersonType(filter);
      console.log(filter);
    } else {
      setPersonType([]);
    }
  }, [debouncedSearch, persons]);

  // CHIPS INSIDE INPUT FIELD
  const setUserInput = (f: Person) => {
    const newData = [];
    newData.push(...inputValue, f);
    setInputValue(newData);
  };

  const showFilteredPersons = () => {
    console.log("Filtered Persons", inputValue);
  };

  return (
    <div>
      <div className="input-wrap">
        <div className="input-wrap__input-div">
          {inputValue ? (
            <div className="input-wrap__input-div__chip-wrapper">
              {inputValue.map((singleValue) => (
                <div
                  key={singleValue.id}
                  className="input-wrap__input-div--chip"
                >
                  {singleValue.name}
                  <button
                    onClick={() => {
                      // deletePerson(singleValue);
                    }}
                  >
                    x
                  </button>
                </div>
              ))}
            </div>
          ) : (
            <span></span>
          )}
          <input
            className="input-wrap__input-div__input-field"
            type="text"
            placeholder="Search"
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
        <button className="input-wrap__button" onClick={showFilteredPersons}>
          <span className="input-wrap__button--icon"></span>
        </button>
      </div>
      <div>
        {personType.length ? (
          <div className="select-wrapper">
            {personType.map((filteredPersons) => (
              <div
                key={filteredPersons.id}
                className="select-wrapper__items"
                onClick={() => setUserInput(filteredPersons)}
              >
                {filteredPersons.name}
              </div>
            ))}
          </div>
        ) : (
          <span></span>
        )}
      </div>
      <div>
        {inputValue.map((input) => (
          <p>{input.name}</p>
        ))}
      </div>
      <p className="info-text">
        Hit ENTER to search for your desired skill, employee, organization and
        more
      </p>
    </div>
  );
};

export default SearchInputField;
