import { InputAdornment, TextField } from "@mui/material";
import React from "react";
import SearchIcon from "@mui/icons-material/Search";

function SearchBar({ handleSearch }) {
  return (
    <div>
      <TextField
        label="Search for a country..."
        variant="outlined"
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <SearchIcon />
            </InputAdornment>
          ),
        }}
        sx={{
          width: "30rem",
          height: "3.5rem",
          flexShrink: 0,
          borderRadius: "0.3125rem",
          backgroundColor: "#fff",
          boxShadow: "0px 2px 9px 0px rgba(0, 0, 0, 0.05)",
          marginTop: "2rem",
          marginBottom: "2rem",
        }}
        onChange={(e) => {
          handleSearch(e.target.value);
        }}
      />
    </div>
  );
}

export default SearchBar;
