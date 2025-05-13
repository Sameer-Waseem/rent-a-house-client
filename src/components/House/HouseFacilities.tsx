import Box from "@mui/material/Box";
import Tooltip from "@mui/material/Tooltip";
import ElectricityIcon from "../../assets/electricity.png";
import GasIcon from "../../assets/gas.png";
import WaterIcon from "../../assets/water.png";

interface Props {
  waterSupply: boolean;
  gasSupply: boolean;
  electricitySupply: boolean;
  iconSize?: string;
}

interface ContentProps {
  showContent: boolean;
  title: string;
  src: string;
  iconSize: string;
}

const HouseFacilities = ({
  waterSupply,
  gasSupply,
  electricitySupply,
  iconSize = "20px",
}: Props) => {
  return (
    <Box display={"flex"} marginTop={"8px"}>
      <Content
        showContent={waterSupply}
        title={"Water"}
        src={WaterIcon}
        iconSize={iconSize}
      />

      <Content
        showContent={gasSupply}
        title={"Gas"}
        src={GasIcon}
        iconSize={iconSize}
      />

      <Content
        showContent={electricitySupply}
        title={"Electricity"}
        src={ElectricityIcon}
        iconSize={iconSize}
      />
    </Box>
  );
};

const Content = ({ showContent, title, src, iconSize }: ContentProps) => {
  return (
    showContent && (
      <Tooltip title={`${title} available`}>
        <img src={src} width={iconSize} style={{ padding: "4px" }} />
      </Tooltip>
    )
  );
};

export default HouseFacilities;
