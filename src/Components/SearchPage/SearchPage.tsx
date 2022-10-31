import React, { useEffect, useState } from "react";
// import {Person} from "../../data/persons";
import data from "../../data/persons.json";
import SearchInputField from "../Search/SearchInputField";
import { Employee, Response } from "../../Models/interfaces";

const SearchPage = () => {
  const [persons, setPersons] = useState<Employee[]>([]);

  useEffect(() => {
    const allData: Employee[] = (data as Response).persons;
    setPersons(allData);
  }, []);

  return (
    <div>
      <SearchInputField persons={persons} />
    </div>
  );
};

export default SearchPage;
