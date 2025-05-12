import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CircularProgress from "@mui/material/CircularProgress";
import Grid from "@mui/material/Grid2";
import Typography from "@mui/material/Typography";
import HomeIcon from "../assets/home.png";
import useHouses from "../hooks/useHouses";
import AddHouse from "./AddHouse";
import Facilities from "./Facilities";
import { useState } from "react";

const HouseListing = () => {
  const [isHouseAdded, setHouseAdded] = useState<boolean>(false);
  const { houses, error, isLoading } = useHouses(isHouseAdded);

  if (isLoading && !houses.length) {
    return <CircularProgress />;
  }

  if (error) {
    return <Typography>{error}</Typography>;
  }

  return (
    <Box margin={"10px"}>
      <Grid container spacing={2}>
        {houses.map((house, index) => (
          <Grid key={index} size={{ xs: 12, sm: 6, md: 4, lg: 3 }}>
            <Card sx={{ height: "100%", alignContent: "center" }}>
              <CardContent sx={{ display: "flex", alignItems: "center" }}>
                <img src={HomeIcon} width={"150px"} />

                <Box marginLeft={"10px"}>
                  <Typography>PKR {house.rent}</Typography>
                  <Typography>{house.area} sq. feet&nbsp;</Typography>
                  <Typography>{house.type}</Typography>
                  <Typography>{house.highlights}</Typography>

                  <Facilities {...house} />
                </Box>
              </CardContent>
            </Card>
          </Grid>
        ))}

        <AddHouse onSetHouseAdded={setHouseAdded} />
      </Grid>
    </Box>
  );
};

export default HouseListing;
