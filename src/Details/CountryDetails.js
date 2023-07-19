import { Box, Button, CircularProgress, Typography } from "@mui/material";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import axios from "axios";
import styled from "@emotion/styled";



function CountryDetails() {
  const { countryName } = useParams();
  const [country, setCountry] = useState(null);



  useEffect(() => {
    axios.get(`https://restcountries.com/v3.1/name/${countryName}`)
      .then((response) => {
        setCountry(response.data[0]);
      })
      .catch((error) => {
        console.error('Error fetching country data:', error);
      });
  }, [countryName]);

  if (!country) {
    return <div style={{ display: "flex", justifyContent: "center" }}><CircularProgress /></div>;
  }

  const FlagContainer = styled(Box)`
  width: 34.98219rem;
  height: 30.19806rem;
  flex-shrink: 0;
  background: url(${country.flags.svg}), lightgray 0px 0px / 100% 100% no-repeat;
  `

  return (
    <Box sx={{ marginTop: "3rem" }}>
      <Box sx={{ display: "flex" }}>
        <Box sx={{
          display: "flex",
          width: "35rem",
          height: "25.0625rem",
          flexShrink: 0,
          borderRadius: "0.62538rem",
          background: "#808080",
          boxShadow: "0px 0px 14px 4px rgba(0, 0, 0, 0.03)"
        }}>
          <img src={country.flags.svg} />
        </Box>
        <Box sx={{ display: "flex", flexDirection: "column", marginLeft: "10rem" }}>
          <Box>
            <Typography sx={{
              color: "#111517",
              fontSize: "2rem",
              fontStyle: "normal",
              fontWeight: 800,
              lineHeight: "normal",
            }}>{country.name.common}</Typography>
          </Box>
          <Box sx={{ display: "flex" }}>
            <Box>
              <Typography variant="body2" color="text.primary">
                <b>Native Name:</b> {country.name.nativeName.eng.official}
              </Typography>
              <Typography variant="body2" color="text.primary">
                <b>Population:</b> {country.population.toLocaleString()}
              </Typography>
              <Typography variant="body2" color="text.primary">
                <b>Region:</b> {country.region}
              </Typography>
              <Typography variant="body2" color="text.primary">
                <b>Sub Region:</b> {country.subregion}
              </Typography>
              <Typography variant="body2" color="text.primary">
                <b>Capital:</b> {country.capital}
              </Typography>
            </Box>
            <Box>
              <Typography variant="body2" color="text.primary">
                <b>Top Level Domain:</b>
              </Typography>
              <Typography variant="body2" color="text.primary">
                <b>Currencies:</b> {country.currencies[0]}
              </Typography>
              <Typography variant="body2" color="text.primary">
                <b>Languages:</b> {country.languages}
              </Typography>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default CountryDetails;
