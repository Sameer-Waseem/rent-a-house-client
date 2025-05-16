import Box from "@mui/material/Box";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select, { SelectChangeEvent } from "@mui/material/Select";

interface Props {
  sortBy: string;
  onSetSortBy: (e: string) => void;
}

const SortBy = ({ sortBy, onSetSortBy }: Props) => {
  const handleChange = (event: SelectChangeEvent) => {
    onSetSortBy(event.target.value as string);
  };

  return (
    <Box width={"30%"}>
      <FormControl fullWidth>
        <InputLabel id={"sort-by-label"}>Sort By</InputLabel>
        <Select
          labelId={"sort-by-label"}
          id={"sort-by-select"}
          value={sortBy}
          label={"Sort by"}
          onChange={handleChange}
        >
          <MenuItem value={"_id"}>All houses</MenuItem>
          <MenuItem value={"rent"}>Rent: Lowest to highest</MenuItem>
          <MenuItem value={"-rent"}>Rent: Highest to lowest</MenuItem>
          <MenuItem value={"area"}>Area: Small to large</MenuItem>
          <MenuItem value={"-area"}>Area: Large to small</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
};

export default SortBy;
