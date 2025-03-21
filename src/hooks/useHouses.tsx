import { useEffect, useState } from "react";
import axiosInstance from "../services/apiClient";
import { CanceledError } from "axios";

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
  const [error, setError] = useState<string>("");
  const [isLoading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    const controller = new AbortController();

    setLoading(true);

    axiosInstance
      .get<House[]>("/house", { signal: controller.signal })
      .then(({ data }) => setHouses(data))
      .catch((err) => {
        if (!(err instanceof CanceledError)) {
          setError(err.message);
        }
      })
      .finally(() => setLoading(false));

    return () => controller.abort();
  }, []);

  return { houses, error, isLoading };
};

export default useHouses;
