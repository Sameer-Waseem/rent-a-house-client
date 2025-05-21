import Box from "@mui/material/Box";
import { useState } from "react";
import { Outlet } from "react-router-dom";
import NavBar from "../components/NavBar";
import HouseAddedContext from "../contexts/HouseAddedContext";

const Layout = () => {
  const [isHouseAdded, setHouseAdded] = useState<boolean>(false);

  return (
    <HouseAddedContext.Provider value={{ isHouseAdded, setHouseAdded }}>
      <div>
        <NavBar />

        <Box margin={{ xs: "16px", sm: "24px" }}>
          <Outlet />
        </Box>
      </div>
    </HouseAddedContext.Provider>
  );
};

export default Layout;
