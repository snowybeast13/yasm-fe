import React, { useEffect, useRef, useState } from "react";
import data from "../../data/persons.json";
// import emptyData from "../../data/emptyPersons.json";
import SearchInputField from "../Search/SearchInputField";
import {
  Employee,
  IResponse,
  SearchResponse,
  Items,
  Item,
} from "../../Models/interfaces";
import useDebounce from "../../hooks/useDebounce";
import useOnClickOutside from "../../hooks/useOnClickOutside";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import PersonsResults from "../Results/PersonsResults";
// import axios from "axios";
// import { loginRequest } from "../../authConfig";
import useAxios from "../../hooks/useAxios";

// console.log(loginRequest);

const SearchPage = () => {
  const [allResults, setAllResults] = useState<Item[]>([]);
  const [inputValue, setInputValue] = useState<Item[]>([]);
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
  const axiosClient = useAxios();

  //All data
  const allData: Employee[] = (data as IResponse).persons;

  const searchAll = async (
    query: string
  ): Promise<{ data: SearchResponse }> => {
    return await axiosClient.get(`/search/all/${query}`);
  };

  const fetchData = async () => {
    try {
      const response = await searchAll(debouncedSearch);
      console.log(response.data);
      setAllResults(response.data.items);
    } catch (err) {
      console.log(err);
    }
  };

  //Get all persons
  useEffect(() => {
    debouncedSearch ? fetchData() : setAllResults([]);
    // const filteredEmployees = allData.filter((employee) =>
    //   employee.person.name.toLocaleLowerCase().includes(debouncedSearch)
    // );
    // debouncedSearch ? setPersons(filteredEmployees) : setPersons([]);

    //Returning 404 page for non-excisting routes
    if (pathname !== "/all" && pathname !== "/") {
      navigate("/404", { replace: true });
    }
  }, [allData, debouncedSearch, navigate, pathname]);

  //Set search state
  const onChangeSearch = (searchValue: string) => {
    setSearch(searchValue);
  };

  const setInput = (item: Item) => {
    const newData = [];
    newData.push(...inputValue, item);
    console.log(newData);
    setInputValue(newData);
    setView(false);

    //Remove chip from dropdown list when chip is added to input field
    setAllResults(
      allResults.filter((result) => {
        return result.item.id !== item.item.id;
      })
    );

    // setNewResults(newData);
    inputRef.current.value = "";
    
    //API calls depending on type of item
    if (item.type === "Person") {
      console.log('Persone------------');
    } else if(item.type === 'Organization') {
      console.log("Organization-----------")
    } else if(item.type === 'Project'){
      console.log("Project")
    } else if(item.type === 'Skill') {
      console.log("Skill---------------------")
    }
  };

  //Set chips for input field
  // const setInput = (employee: Item) => {
  //   const newData = [];
  //   newData.push(...newInputValue, employee);
  //   setNewInputValue(newData);
  //   setView(false);

  //Remove chip from dropdown list when chip is added to input field
  // setPersons(
  //   persons.filter((person) => {
  //     return person.person.id !== employee.person.id;
  //   })
  // );

  //   setNewResults(newData);
  //   inputRef.current.value = "";
  // };

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
  const navigateTo = () => {
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
        inputValueChip={inputValue}
        removeChip={removeChip}
        clearInputData={clearInputData}
        navigateTo={navigateTo}
        inputRef={inputRef}
        setInput={setInput}
        persons={persons}
        view={view}
        res={allResults}
      />

      {/* List and details card */}
      {all && (
        <PersonsResults
          inputValue={newResults}
          card={card}
          cardHandler={cardHandler}
          closeCard={closeCard}
        />
      )}
    </div>
  );
};

export default SearchPage;
