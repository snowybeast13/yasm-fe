import React, { useEffect, useRef, useState } from "react";
import data from "../../data/persons.json";
// import emptyData from "../../data/emptyPersons.json";
import SearchInputField from "../Search/SearchInputField";
import { Employee, IResponse } from "../../Models/interfaces";
import useDebounce from "../../hooks/useDebounce";
import ResultsDropdown from "../Search/ResultsDropdown";
import useOnClickOutside from "../../hooks/useOnClickOutside";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import PersonsResults from "../Results/PersonsResults";

const SearchPage = () => {
  const [persons, setPersons] = useState<Employee[]>([]);
  const [search, setSearch] = useState<string>("");
  const [newInputValue, setNewInputValue] = useState<Employee[]>([]);
  const [newResults, setNewResults] = useState<Employee[]>([]);
  const [view, setView] = useState<boolean>(false);
  const [card, setCard] = useState<Employee[]>([]);

  // Ref
  const ref: any = useRef();
  const inputRef: any = useRef();

  //Routing
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const { all } = useParams();

  //Hooks
  const debouncedSearch = useDebounce(search, 500);
  useOnClickOutside(ref, () => viewHandler(false));

  //All data
  const allData: Employee[] = (data as IResponse).persons;

  //Get all persons
  useEffect(() => {
    const filteredEmployees = allData.filter((employee) =>
      employee.person.name.toLocaleLowerCase().includes(debouncedSearch)
    );
    debouncedSearch ? setPersons(filteredEmployees) : setPersons([]);
  }, [allData, debouncedSearch]);

  //Set search state
  const onChangeSearch = (searchValue: string) => {
    setSearch(searchValue);
  };

  //Set chips for input field
  const setInput = (employee: Employee) => {
    const newData = [];
    newData.push(...newInputValue, employee);
    setNewInputValue(newData);
    setView(false);

    //Remove chip from dropdown list when chip is added to input field
    setPersons(
      persons.filter((person) => {
        return person.person.id !== employee.person.id;
      })
    );

    setNewResults(newData);
    inputRef.current.value = "";
  };

  //Hide select dropdown when clicked outside
  const viewHandler = (value: boolean) => {
    setView(value);
  };

  //Remove Chip
  const removeChip = (value: Employee) => {
    setNewInputValue(
      newInputValue.filter((employeeChip) => {
        return employeeChip.person.id !== value.person.id;
      })
    );

    //when clicked on chip return it to the list
    persons.push(value);
    setSearch(search);

    //Remove card from result list
    card
      ? setNewResults(
          newResults.filter((userCard) => {
            return userCard.person.id !== value.person.id;
          })
        )
      : setNewResults([]);
  };

  //Clear data from input
  const clearInputData = (value: Employee[]) => {
    setNewInputValue([]);
    const returnPersonToArr = value.filter((rPerson) => {
      return rPerson;
    });
    persons.push(...returnPersonToArr);

    setSearch("");
    setCard([]);
    setNewResults([]);
  };

  //Open details card
  const cardHandler = (userInfo: Employee) => {
    card ? setCard([userInfo]) : setCard([]);
  };

  //Close card
  const closeCard = (singleCard: Employee) => {
    setCard(
      card.filter((singlePersonCard) => {
        return singlePersonCard.person.id !== singleCard.person.id;
      })
    );
  };

  //Navigation
  const navigateTo = (inputChip: Employee[]) => {
    if (newInputValue.length === 0 && pathname !== "/all") {
      navigate("all");
      setNewResults(allData);
    } else if (newInputValue.length !== 0 && pathname !== "/all") {
      navigate("all");
      setNewResults(newInputValue);
    }
  };

  return (
    <div className="search-holder">
      {/* //Input Field component */}
      <SearchInputField
        onChangeSearch={onChangeSearch}
        viewHandler={viewHandler}
        inputValueChip={newInputValue}
        removeChip={removeChip}
        clearInputData={clearInputData}
        navigateTo={navigateTo}
        inputRef={inputRef}
      />

      {/* //Dropdown results component */}
      <div ref={ref}>
        {view && <ResultsDropdown personType={persons} setInput={setInput} />}
      </div>

      {/* List and details card */}
      {all ? (
        <PersonsResults
          inputValue={newResults}
          card={card}
          cardHandler={cardHandler}
          closeCard={closeCard}
        />
      ) : null}
    </div>
  );
};

export default SearchPage;
