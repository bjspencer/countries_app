import "./App.css";
import React, { useEffect, useState } from "react";
import axios from "axios";
import CountryCard from "./Home/CountryCard";
import TitleBar from "./Home/TitleBar";
import { Grid, Box } from "@mui/material";
import SearchBar from "./Home/SearchBar";

function App() {
  const [countries, setCountries] = useState([]);
  const [filteredCountries, setFilteredCountries] = useState([]);

  const getCountries = () => {
    axios.get("https://restcountries.com/v3.1/all").then((response) => {
      setCountries(response.data);
      setFilteredCountries(response.data);
    });
  };

  useEffect(() => {
    getCountries();
  }, []);

  const handleSearch = (searchQuery) => {
    const filtered = countries.filter((country) =>
      country.name.common.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setFilteredCountries(filtered);
  };

  return (
    <div className="App">
      <TitleBar />
      <Box
        sx={{
          padding: "0.5em",
        }}
      >
        <Box sx={{ display: "flex" }}>
          <SearchBar id="search-bar" handleSearch={handleSearch} />
        </Box>
        <Grid container spacing={3}>
          {filteredCountries.map((country) => (
            <Grid item key={country.name.common} xs={12} sm={6} md={4} lg={3}>
              <CountryCard country={country} />
            </Grid>
          ))}
        </Grid>
      </Box>
    </div>
  );
}

export default App;
