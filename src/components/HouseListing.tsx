import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid2";
import useHouses from "../hooks/useHouses";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import HomeIcon from "../assets/home.png";
import Facilities from "./Facilities";

const HouseListing = () => {
  const { houses, error, isLoading } = useHouses();

  if (isLoading || !houses.length) {
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
            <Card>
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
      </Grid>
    </Box>
  );
};

export default HouseListing;
