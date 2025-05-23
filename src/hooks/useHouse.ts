import { CanceledError } from "axios";
import { useEffect, useState } from "react";
import axiosInstance from "../services/apiClient";
import ApiResponse from "../types/apiResponse";
import House from "../types/house";

const useHouse = (id: string) => {
  const [isLoading, setLoading] = useState<boolean>(false);
  const [house, setHouse] = useState<House | null>(null);
  const [error, setError] = useState<string>("");

  useEffect(() => {
    const controller = new AbortController();

    setLoading(true);

    axiosInstance
      .get<ApiResponse<House>>(`house/${id}`, { signal: controller.signal })
      .then(({ data }) => setHouse(data.data))
      .catch((err) => {
        if (!(err instanceof CanceledError)) {
          setError(err?.response?.data?.message);
        }
      })
      .finally(() => setLoading(false));

    return () => controller.abort();
  }, []);

  return { house, error, isLoading };
};

export default useHouse;
