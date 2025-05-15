import Box from "@mui/material/Box";
import { Outlet } from "react-router-dom";
import NavBar from "../components/NavBar";

const Layout = () => {
  return (
    <div>
      <NavBar />

      <Box margin={{ xs: "16px", sm: "24px" }}>
        <Outlet />
      </Box>
    </div>
  );
};

export default Layout;
