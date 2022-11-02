import React, { FC, useEffect, useRef, useState } from "react";
import useDebounce from "../../hooks/useDebounce";
import useOnClickOutside from "../../hooks/useOnClickOutside";
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
  const [view, setView] = useState<boolean>(false);

  const ref: any = useRef();
  const inputRef: any = useRef();

  const debouncedSearch = useDebounce(search, 500);
  useOnClickOutside(ref, () => setView(false));

  useEffect(() => {
    const typePerson = persons.map((person) => person.person);

    const filter = typePerson.filter((person) =>
      person.name.toLowerCase().includes(debouncedSearch)
    );
    if (debouncedSearch) {
      setPersonType(filter);
      console.log(filter);
    } else {
      setPersonType([]);
    }
  }, [debouncedSearch, persons]);

  // Chip inside input field
  const setUserInput = (fPerson: Person) => {
    const newData = [];
    newData.push(...inputValue, fPerson);
    setInputValue(newData);

    //When clicked on chip, remove it from the list
    setPersonType(
      personType.filter((p) => {
        return p.id !== fPerson.id;
      })
    );

    //Clear input field after chip is added
    inputRef.current.value = "";
  };

  //Remove chip
  const removeElement = (index: Person) => {
    // console.log(index);
    setInputValue(
      inputValue.filter((sPerson) => {
        return sPerson.id !== index.id;
      })
    );

    //when clicked on chip return it to the list
    personType.push(index);
  };

  //Clear data from input
  const clearFromInput = (i: Person[]) => {
    setInputValue([]);
    const returnPersonToArr = i.filter((rPerson) => {
      return rPerson;
    });
    personType.push(...returnPersonToArr);
  };

  return (
    <div>
      <div className="input-wrap">
        <div className="input-wrap__input-div">
          {inputValue && (
            <div className="input-wrap__input-div__chip-wrapper">
              {inputValue.map((singleValue) => (
                <div
                  key={singleValue.id}
                  className="input-wrap__input-div--chip"
                >
                  <p>{singleValue.name}</p>
                  <button
                    onClick={() => {
                      removeElement(singleValue);
                    }}
                  ></button>
                </div>
              ))}
            </div>
          )}
          <input
            className="input-wrap__input-div__input-field"
            type="text"
            ref={inputRef}
            placeholder="Search"
            onChange={(e) => setSearch(e.target.value)}
            onClick={() => setView(true)}
          />
        </div>
        <button className="input-wrap__button">
          <span className="input-wrap__button--icon"></span>
        </button>
        {inputValue.length !== 0 && (
          <div>
            <button
              className="input-wrap__clear-button"
              onClick={() => clearFromInput(inputValue)}
            ></button>
          </div>
        )}
      </div>

      {view && (
        <div className="select">
          <div ref={ref} className="select__select-wrapper">
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
      )}
      <p className="info-text">
        Hit ENTER to search for your desired skill, employee, organization and
        more
      </p>
      {/* Person component goes here */}
      <div></div>
    </div>
  );
};

export default SearchInputField;
