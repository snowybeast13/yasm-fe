import React from "react";
import "./App.scss";
import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
import SearchInputField from "./Components/Search/SearchInputField";
import SearchPage from "./Components/SearchPage/SearchPage";

function App(): JSX.Element {
  return (
    <div className="App">
      <Header />
      {/* <SearchInputField /> */}
      <SearchPage />
      <Footer />
    </div>
  );
}

export default App;
