import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid2";
import useHouses from "../hooks/useHouses";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";

const HouseListing = () => {
  const { houses, error, isLoading } = useHouses();

  if (isLoading || !houses.length) {
    return <CircularProgress />;
  }

  if (error) {
    return <Typography>{error}</Typography>;
  }

  return (
    <Box>
      <Grid container spacing={2}>
        {houses.map((house, index) => (
          <Grid key={index} size={{ xs: 12, sm: 6, md: 4, lg: 3 }}>
            <Card>
              <CardContent>
                <Typography>PKR {house.rent}</Typography>
                <Box display={"flex"}>
                  <Typography>{house.area} sq. feet&nbsp;</Typography>
                  <Typography>{house.type}</Typography>
                </Box>
                <Typography>{house.highlights}</Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default HouseListing;
