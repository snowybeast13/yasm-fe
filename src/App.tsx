import React, { useState } from "react";
import "./App.scss";
import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
import SearchPage from "./Components/SearchPage/SearchPage";

function App(): JSX.Element {
  // const [view, setView] = useState(0);

  // const x = [1, 2, 3, 4, 5, 6];
  return (
    <div className="App">
      <Header />
      <SearchPage />
      <Footer />
    </div>
  );
}

export default App;
