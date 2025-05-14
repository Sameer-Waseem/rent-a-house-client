import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import Box from "@mui/material/Box";
import CircularProgress from "@mui/material/CircularProgress";
import Grid from "@mui/material/Grid2";
import Typography from "@mui/material/Typography";
import { Link, useParams } from "react-router-dom";
import HomeIcon from "../assets/home.png";
import HouseFacilities from "../components/House/HouseFacilities";
import useHouse from "../hooks/useHouse";

const HouseDetailPage = () => {
  const { id } = useParams();
  const { house, error, isLoading } = useHouse(id!);

  if (isLoading && !house) {
    return <CircularProgress />;
  }

  if (error) {
    return <Typography>{error}</Typography>;
  }

  if (!house) {
    return null;
  }

  return (
    <Box margin={"30px"}>
      <Grid container>
        <Link to={"/"}>
          <Typography
            variant={"body1"}
            display={"flex"}
            color={"textSecondary"}
          >
            <ArrowBackIcon fontSize={"small"} />
            House Listing
          </Typography>
        </Link>
      </Grid>

      <Grid container spacing={2}>
        <Grid size={{ xs: 12, sm: 4 }}>
          <img src={HomeIcon} width={"100%"} />
        </Grid>

        <Grid size={{ xs: 12, sm: 8 }}>
          <Typography variant={"h5"}>Rent: PKR {house.rent}</Typography>

          <Typography variant={"h5"}>Area: {house.area} sq. feet</Typography>

          <Typography variant={"h5"} textTransform={"capitalize"}>
            Type: {house.type}
          </Typography>

          <Typography variant={"h5"}>Rooms: {house.rooms}</Typography>

          <Typography variant={"h5"}>Bathrooms: {house.bathrooms}</Typography>

          <HouseFacilities
            waterSupply={house.water_supply}
            gasSupply={house.gas_supply}
            electricitySupply={house.electricity_supply}
            iconSize={"40px"}
          />
        </Grid>

        <Grid>
          <Typography variant={"h5"}>{house.highlights}</Typography>
          <Typography variant={"h5"}>{house.description}</Typography>
        </Grid>
      </Grid>
    </Box>
  );
};

export default HouseDetailPage;
