import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";
import RentAHouse from "../../public/rent-a-house.svg";

const NavBar = () => {
  return (
    <Box height={{ xs: "56px", sm: "64px" }}>
      <AppBar>
        <Toolbar>
          <Link to={"/"} style={{ textDecoration: "none" }}>
            <Box display={"flex"} alignItems={"center"}>
              <img src={RentAHouse} width={"30px"} />
              <Typography
                variant={"subtitle2"}
                marginLeft={"8px"}
                color={"#ffffff"}
              >
                Rent a house
              </Typography>
            </Box>
          </Link>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default NavBar;
