import React from "react";
import "./App.scss";
import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
import SearchPage from "./Components/SearchPage/SearchPage";

function App(): JSX.Element {
  return (
    <div className="App">
      <Header />
      <SearchPage />
      <Footer />
    </div>
  );
}

export default App;
