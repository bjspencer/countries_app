import "./App.css";
import React, { useEffect, useState } from "react";
import axios from "axios";
import CountryCard from "./Home/CountryCard";
import TitleBar from "./Home/TitleBar";
import CountryDetails from "./Details/CountryDetails";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import CountryList from "./Home/CountryList";

function App() {
  return (
    <div className="App">
      <TitleBar />
      <Router>
        <Routes>
          <Route exact path="/" element={<CountryList />} />
          <Route path="/country/:countryName" element={<CountryDetails />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
