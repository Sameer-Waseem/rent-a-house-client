import Box from "@mui/material/Box";
import Tooltip from "@mui/material/Tooltip";
import ElectricityIcon from "../../assets/electricity.png";
import GasIcon from "../../assets/gas.png";
import WaterIcon from "../../assets/water.png";

interface Props {
  waterSupply: boolean;
  gasSupply: boolean;
  electricitySupply: boolean;
}

interface ContentProps {
  showContent: boolean;
  title: string;
  src: string;
}

const HouseFacilities = ({
  waterSupply,
  gasSupply,
  electricitySupply,
}: Props) => {
  return (
    <Box display={"flex"} marginTop={"8px"}>
      <Content showContent={waterSupply} title={"Water"} src={WaterIcon} />

      <Content showContent={gasSupply} title={"Gas"} src={GasIcon} />

      <Content
        showContent={electricitySupply}
        title={"Electricity"}
        src={ElectricityIcon}
      />
    </Box>
  );
};

const Content = ({ showContent, title, src }: ContentProps) => {
  return (
    showContent && (
      <Tooltip title={`${title} available`}>
        <img src={src} width={"20px"} style={{ padding: "4px" }} />
      </Tooltip>
    )
  );
};

export default HouseFacilities;
