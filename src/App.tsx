import React from "react";
import "./App.scss";
import Header from "./Components/Header/Header";
import SearchInputField from "./Components/Search/SearchInputField";

function App(): JSX.Element {
  return (
    <div className="App">
      <Header />
      <SearchInputField />
    </div>
  );
}

export default App;
