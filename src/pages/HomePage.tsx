import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <Box
      width={"100%"}
      height={"100%"}
      display={"flex"}
      flexDirection={"column"}
      justifyContent={"center"}
      alignItems={"center"}
    >
      <Typography variant={"h1"} marginBottom={"20px"}>
        Find your dream house
      </Typography>
      <Button
        component={Link}
        variant={"outlined"}
        size={"large"}
        to={"/houses"}
      >
        Serach here
      </Button>
    </Box>
  );
};

export default HomePage;
