import React from "react";
import "./App.scss";
import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
import SearchInputField from "./Components/Search/SearchInputField";

function App(): JSX.Element {
  return (
    <div className="App">
      <Header />
      <SearchInputField />
      <footer>
      <Footer />

      </footer>
    </div>
  );
}

export default App;
