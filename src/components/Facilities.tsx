import Box from "@mui/material/Box";
import WaterIcon from "../assets/water.png";
import GasIcon from "../assets/gas.png";
import ElectricityIcon from "../assets/electricity.png";
import { Tooltip } from "@mui/material";

interface Interface {
  water_supply: boolean;
  gas_supply: boolean;
  electricity_supply: boolean;
}

const Facilities = ({
  water_supply,
  gas_supply,
  electricity_supply,
}: Interface) => {
  return (
    <Box display={"flex"} marginTop={"8px"}>
      {water_supply && (
        <Tooltip title={"Water available"}>
          <img src={WaterIcon} width={"20px"} style={{ padding: "4px" }} />
        </Tooltip>
      )}

      {gas_supply && (
        <Tooltip title={"Gas available"}>
          <img src={GasIcon} width={"20px"} style={{ padding: "4px" }} />
        </Tooltip>
      )}

      {electricity_supply && (
        <Tooltip title={"Electricity available"}>
          <img
            src={ElectricityIcon}
            width={"20px"}
            style={{ padding: "4px" }}
          />
        </Tooltip>
      )}
    </Box>
  );
};

export default Facilities;
