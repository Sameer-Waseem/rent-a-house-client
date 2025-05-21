import { createContext } from "react";

interface HouseAddedContextType {
  isHouseAdded: boolean;
  setHouseAdded: (v: boolean) => void;
}

const HouseAddedContext = createContext<HouseAddedContextType>(
  {} as HouseAddedContextType
);

export default HouseAddedContext;
