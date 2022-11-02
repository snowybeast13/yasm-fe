import React, { useEffect, useState } from "react";
import data from "../../../../yasm-fe/src/data/persons.json";
import SearchInputField from "../Search/SearchInputField";
import { Employee, IResponse } from "../../Models/interfaces";

const SearchPage = () => {
  const [persons, setPersons] = useState<Employee[]>([]);

  useEffect(() => {
    const allData: Employee[] = (data as IResponse).persons;
    setPersons(allData);
  }, []);

  return (
    <div>
      <SearchInputField persons={persons} />
    </div>
  );
};

export default SearchPage;
