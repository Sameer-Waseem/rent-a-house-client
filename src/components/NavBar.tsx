import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { useContext } from "react";
import { Link } from "react-router-dom";
import HouseAddedContext from "../contexts/HouseAddedContext";
import AddHouse from "./House/AddHouse";

const NavBar = () => {
  const { setHouseAdded } = useContext(HouseAddedContext);

  return (
    <Box height={{ xs: "56px", sm: "64px" }}>
      <AppBar>
        <Toolbar>
          <Box
            width={"100%"}
            display={"flex"}
            alignItems={"center"}
            justifyContent={"space-between"}
          >
            <Link to={"/"} style={{ textDecoration: "none" }}>
              <Box display={"flex"} alignItems={"center"}>
                <img src={"/rent-a-house.svg"} width={"30px"} />
                <Typography
                  variant={"subtitle2"}
                  marginLeft={"8px"}
                  color={"#ffffff"}
                >
                  Rent a house
                </Typography>
              </Box>
            </Link>

            <AddHouse onSetHouseAdded={setHouseAdded} />
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default NavBar;
