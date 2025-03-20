import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid2";
import useHouses from "../hooks/useHouses";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";

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
            {house.highlights}
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default HouseListing;
