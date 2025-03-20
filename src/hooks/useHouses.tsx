import { useEffect, useState } from "react";
import axiosInstance from "../services/apiClient";

interface House {
  _id: string;
  area: number;
  type: "Appartement" | "Plot";
  rent: number;
  highlights: string;
  description: string;
  rooms: number;
  bathrooms: number;
  water_supply: boolean;
  gas_supply: boolean;
  electricity_supply: boolean;
}
const useHouses = () => {
  const [houses, setHouses] = useState<House[]>([]);
  const [error, setError] = useState<string>();
  const [isLoading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    setLoading(true);

    axiosInstance
      .get("/house")
      .then(({ data }) => setHouses(data.houses))
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  }, []);

  return { houses, error, isLoading };
};

export default useHouses;
