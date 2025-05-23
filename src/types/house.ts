interface House {
  _id: string;
  area: number;
  type: "Apartment" | "Plot";
  rent: number;
  highlights: string;
  description: string;
  rooms: number;
  bathrooms: number;
  water_supply: boolean;
  gas_supply: boolean;
  electricity_supply: boolean;
}

export default House;
