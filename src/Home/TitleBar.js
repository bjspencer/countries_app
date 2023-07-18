import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";

export default function TitleBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{ backgroundColor: "#fff" }}>
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ color: "black" }}>
            Where in the world?
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
