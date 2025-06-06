import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CircularProgress from "@mui/material/CircularProgress";
import Divider from "@mui/material/Divider";
import Grid from "@mui/material/Grid2";
import Typography from "@mui/material/Typography";
import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import HomeIcon from "../assets/house-icon.png";
import HouseFacilities from "../components/House/HouseFacilities";
import SortBy from "../components/SortBy";
import HouseAddedContext from "../contexts/HouseAddedContext";
import useHouses from "../hooks/useHouses";

const HouseListingPage = () => {
  const [sortBy, setSortBy] = useState<string>("_id");

  const { isHouseAdded } = useContext(HouseAddedContext);
  const { houses, error, isLoading } = useHouses(isHouseAdded, sortBy);

  if (isLoading && !houses.length) {
    return <CircularProgress />;
  }

  if (error) {
    return <Typography>{error}</Typography>;
  }

  return (
    <Box>
      <Grid container spacing={2}>
        <Grid size={{ xs: 12 }}>
          <Box
            display={"flex"}
            alignItems={"center"}
            justifyContent={"space-between"}
          >
            <Typography variant={"h4"}>All Houses</Typography>
            <SortBy sortBy={sortBy} onSetSortBy={setSortBy} />
          </Box>

          <Divider sx={{ margin: "20px 0" }} />
        </Grid>

        {houses.map((house, index) => (
          <Grid key={index} size={{ xs: 12, sm: 6, md: 4, lg: 3 }}>
            <Link to={`/house/${house._id}`} style={{ textDecoration: "none" }}>
              <Card sx={{ height: "100%", alignContent: "center" }}>
                <CardContent sx={{ display: "flex", alignItems: "center" }}>
                  <img src={HomeIcon} width={"150px"} />

                  <Box marginLeft={"10px"}>
                    <Typography>PKR {house.rent}</Typography>
                    <Typography>{house.area} sq. feet&nbsp;</Typography>
                    <Typography>{house.type}</Typography>
                    <Typography>{house.highlights}</Typography>

                    <HouseFacilities
                      waterSupply={house.water_supply}
                      gasSupply={house.gas_supply}
                      electricitySupply={house.electricity_supply}
                    />
                  </Box>
                </CardContent>
              </Card>
            </Link>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default HouseListingPage;
