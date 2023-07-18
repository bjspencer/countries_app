import {
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  Typography,
} from "@mui/material";
import React from "react";

function CountryCard({ country }) {
  return (
    <Card sx={{ width: "16.5rem", height: "21rem", flexShrink: 0 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={country.flags.svg}
          alt={country.flags.alt}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {country.name.common}
          </Typography>
          <Typography variant="body2" color="text.primary">
            <b>Population:</b> {country.population}
          </Typography>
          <Typography variant="body2" color="text.primary">
            <b>Region:</b> {country.region}
          </Typography>
          <Typography variant="body2" color="text.primary">
            <b>Capital:</b> {country.capital}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

export default CountryCard;
