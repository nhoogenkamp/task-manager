import { AppBar, Toolbar, Typography, Box, Button } from "@mui/material";
import { Link } from "react-router-dom";

import ThemeToggle from "./ThemeToggle";

export default function Navbar() {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          Task Manager
        </Typography>

        <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
          <Button color="inherit" component={Link} to="/">
            Home
          </Button>

          <Button color="inherit" component={Link} to="/about">
            About
          </Button>

          <ThemeToggle />
        </Box>
      </Toolbar>
    </AppBar>
  );
}
