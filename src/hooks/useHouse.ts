import { CanceledError } from "axios";
import { useEffect, useState } from "react";
import axiosInstance from "../services/apiClient";
import { House } from "./useHouses";

const useHouse = (id: string) => {
  const [isLoading, setLoading] = useState<boolean>(false);
  const [house, setHouse] = useState<House | null>(null);
  const [error, setError] = useState<string>("");

  useEffect(() => {
    const controller = new AbortController();

    setLoading(true);

    axiosInstance
      .get<House>(`house-detail/${id}`, { signal: controller.signal })
      .then(({ data }) => setHouse(data))
      .catch((err) => {
        if (!(err instanceof CanceledError)) {
          setError(err);
        }
      })
      .finally(() => setLoading(false));

    return () => controller.abort();
  }, []);

  return { house, error, isLoading };
};

export default useHouse;
