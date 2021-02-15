import React, { useState } from "react";
import ReactDOM from "react-dom";
import { Router, Link } from "@reach/router";
import SearchParams from "./SearchParams";
import Details from "./Details";

const App = () => {
  return (
    <React.StrictMode>
      <div id="info-container">
        <header>
          <Link to="/"></Link>
          <div id="logo-text">
            <h3 id="sweet-home">SweetHome</h3>
            <div id="line"></div>
            <p id="shelter">Pet Shelter</p>
          </div>
        </header>
        <Router>
          <SearchParams path="/" />
          <Details path="/details/:id" />
        </Router>
      </div>
    </React.StrictMode>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
