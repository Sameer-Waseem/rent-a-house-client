import { Toolbar, Typography } from "@mui/material";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";

const NavBar = () => {
  return (
    <Box>
      <AppBar>
        <Toolbar>
          <Typography>Rent a house</Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default NavBar;
