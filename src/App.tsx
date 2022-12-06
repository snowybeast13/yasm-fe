import React from "react";
import "./App.scss";
import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
import SearchPage from "./Components/SearchPage/SearchPage";
import { Navigate, Route, Routes } from "react-router-dom";
import PageNotFound from "./Components/PageNotFound/PageNotFound";

function App(): JSX.Element {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<SearchPage />} />
        <Route path=":all" element={<SearchPage />} />
        <Route path="404" element={<PageNotFound />} />
        <Route path="*" element={<Navigate to="/notfound" replace />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
