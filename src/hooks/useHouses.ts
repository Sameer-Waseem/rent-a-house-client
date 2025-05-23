import { CanceledError } from "axios";
import { useContext, useEffect, useState } from "react";
import HouseAddedContext from "../contexts/HouseAddedContext";
import axiosInstance from "../services/apiClient";
import ApiResponse from "../types/apiResponse";
import House from "../types/house";

const useHouses = (isHouseAdded: boolean, sortBy: string) => {
  const { setHouseAdded } = useContext(HouseAddedContext);

  const [houses, setHouses] = useState<House[]>([]);
  const [error, setError] = useState<string>("");
  const [isLoading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    const controller = new AbortController();

    setLoading(true);

    axiosInstance
      .get<ApiResponse<House[]>>("/house", {
        params: { sort_by: sortBy },
        signal: controller.signal,
      })
      .then(({ data }) => setHouses(data.data))
      .catch((err) => {
        if (!(err instanceof CanceledError)) {
          setError(err?.response?.data?.message);
        }
      })
      .finally(() => {
        setLoading(false);
        setHouseAdded(false);
      });

    return () => controller.abort();
  }, [isHouseAdded, sortBy]);

  return { houses, error, isLoading };
};

export default useHouses;
