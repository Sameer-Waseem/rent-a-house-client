import Button from "@mui/material/Button";
import { useEffect } from "react";
import axiosInstance from "../services/apiClient";

const HouseListing = () => {
  useEffect(() => {
    axiosInstance
      .get("/house")
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  }, []);

  return <Button variant={"contained"}>sam</Button>;
};

export default HouseListing;
