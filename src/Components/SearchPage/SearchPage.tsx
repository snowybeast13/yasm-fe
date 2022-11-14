import React, { useEffect, useRef, useState } from "react";
// import data from "../../data/persons.json";
import emptyData from "../../data/emptyPersons.json"
import SearchInputField from "../Search/SearchInputField";
import { Employee, IResponse, Person } from "../../Models/interfaces";
import useDebounce from "../../hooks/useDebounce";
import ResultsDropdown from "../Search/ResultsDropdown";
import useOnClickOutside from "../../hooks/useOnClickOutside";
import PersonsList from "../Person/PersonsList";
import PersonDetailsCard from "../Person/PersonDetailsCard";

const SearchPage = () => {
  const [persons, setPersons] = useState<Employee[]>([]);
  const [personType, setPersonType] = useState<Person[]>([]);
  const [search, setSearch] = useState<string>("");
  const [inputValue, setInputValue] = useState<Person[]>([]);
  const [view, setView] = useState<boolean>(false);
  const [card, setCard] = useState<Person[]>([]);

  const ref: any = useRef();

  //Hooks
  const debouncedSearch = useDebounce(search, 500);
  useOnClickOutside(ref, () => viewHandler(false));

  //Get all persons
  useEffect(() => {
    const allData: Employee[] = (emptyData as IResponse).persons;
    setPersons(allData);
  }, []);

  //Filtered users to type Person with debounce
  useEffect(() => {
    const typePerson = persons.map((person) => person.person);

    const filter = typePerson.filter((person) =>
      person.name.toLowerCase().includes(debouncedSearch)
    );
    if (debouncedSearch) {
      setPersonType(filter);
    } else {
      setPersonType([]);
    }
  }, [debouncedSearch, persons]);

  //Set search state
  const onChangeSearch = (searchValue: string) => {
    console.log(searchValue);
    setSearch(searchValue);
  };

  //Set user input
  const setUserInput = (user: Person) => {
    // console.log("User input");
    const newData = [];
    newData.push(...inputValue, user);
    setInputValue(newData);
    setView(false);

    //  When clicked on chip, remove it from the list
    setPersonType(
      personType.filter((p) => {
        return p.id !== user.id;
      })
    );
  };

  //Hide select dropdown when clicked outside
  const viewHandler = (value: boolean) => {
    // console.log("view handler clicked");
    setView(value);
  };

  //

  //Remove Chip
  const removeChip = (value: Person) => {
    // console.log("remove chip clicked ", value);
    setInputValue(
      inputValue.filter((singlePerson) => {
        return singlePerson.id !== value.id;
      })
    );

    //when clicked on chip return it to the list
    personType.push(value);
    setSearch(search);

    card ? setCard(
      card.filter((userCard) => {
        return userCard.id !== value.id;
      })
    ) : setCard([])
  };

  //Clear data from input
  const clearInputData = (value: Person[]) => {
    // console.log("cleared from input ", value);
    setInputValue([]);
    const returnPersonToArr = value.filter((rPerson) => {
      return rPerson;
    });
    personType.push(...returnPersonToArr);
    setSearch("");
    setCard([])
  };

  //Open details card
  const cardHandler = (userInfo: Person) => {
    console.log("card handler clicked", userInfo);
    card ? setCard([userInfo]) : setCard([]);
  };

  //Close card
  const closeCard = (singleCard: Person) => {
    console.log("close card clicked", card);
    setCard(
      card.filter((singlePersonCard) => {
        return singlePersonCard.id !== singleCard.id;
      })
    );
  };

  return (
    <div className="search-holder">
      {/* //Input Field component */}
      <SearchInputField
        persons={persons}
        onChangeSearch={onChangeSearch}
        viewHandler={viewHandler}
        inputValueChip={inputValue}
        removeChip={removeChip}
        clearInputData={clearInputData}
        search={search}
      />

      {/* //Dropdown results component */}
      <div ref={ref}>
        {view && (
          <ResultsDropdown
            personType={personType}
            setUserInput={setUserInput}
          />
        )}
      </div>

      {/* List and details card */}
      <div className="list">
        {inputValue.map((singleEl) => (
          <div key={singleEl.id} className="list__list-wrapper">
            <div className="list__single-card-wrapper">
              <PersonsList
                userInfo={singleEl}
                cardHandler={cardHandler}
                key={singleEl.id}
              />
            </div>
            {card.length !== 0 && (
              <div className="list__details-card-wrapp">
                {card.map((cardSingle) => (
                  <div>
                    {singleEl.id === cardSingle.id && (
                      <PersonDetailsCard
                        card={singleEl}
                        closeCard={closeCard}
                        key={cardSingle.id}
                      />
                    )}
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default SearchPage;
