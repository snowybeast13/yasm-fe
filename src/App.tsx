import React from "react";
import "./App.scss";
import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
import SearchPage from "./Components/SearchPage/SearchPage";
import { Route, Routes } from "react-router-dom";

function App(): JSX.Element {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<SearchPage />} />
        <Route path="/:all" element={<SearchPage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
