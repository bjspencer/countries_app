import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import CountryCard from './CountryCard';
import { Box, Grid, TextField } from '@mui/material';
import SearchBar from './SearchBar';

const CountryList = () => {
    const [countriesData, setCountriesData] = useState([]);
    const [filteredCountries, setFilteredCountries] = useState([]);

    useEffect(() => {

        axios.get('https://restcountries.com/v3/all')
            .then((response) => {
                setCountriesData(response.data);
                setFilteredCountries(response.data);
            })
            .catch((error) => {
                console.error('Error fetching data:', error);
            });
    }, []);

    const handleSearch = (searchQuery) => {
        const filtered = countriesData.filter((country) =>
            country.name.common.toLowerCase().includes(searchQuery.toLowerCase())
        );
        setFilteredCountries(filtered);
    };

    return (
        <Box sx={{ padding: "3.5em" }}>
            <SearchBar handleSearch={handleSearch} />
            <Grid container spacing={3} justify="center">
                {filteredCountries.map((country) => (
                    <Grid item key={country.name.common} xs={12} sm={6} md={4} lg={3}>
                        <Link to={`/country/${country.name.common}`} style={{ textDecoration: 'none' }}>
                            <CountryCard country={country} />
                        </Link>
                    </Grid>
                ))}
            </Grid>
        </Box>
    );
};

export default CountryList;