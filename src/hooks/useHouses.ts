import { CanceledError } from "axios";
import { useEffect, useState } from "react";
import axiosInstance from "../services/apiClient";

export interface House {
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

const useHouses = (isHouseAdded: boolean, sortBy: string) => {
  const [houses, setHouses] = useState<House[]>([]);
  const [error, setError] = useState<string>("");
  const [isLoading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    const controller = new AbortController();

    setLoading(true);

    axiosInstance
      .get<House[]>("/house-detail", {
        params: { sort_by: sortBy },
        signal: controller.signal,
      })
      .then(({ data }) => setHouses(data))
      .catch((err) => {
        if (!(err instanceof CanceledError)) {
          setError(err?.response?.data?.message);
        }
      })
      .finally(() => setLoading(false));

    return () => controller.abort();
  }, [isHouseAdded, sortBy]);

  return { houses, error, isLoading };
};

export default useHouses;
