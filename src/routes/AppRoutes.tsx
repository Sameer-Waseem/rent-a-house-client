import { createBrowserRouter } from "react-router-dom";
import HouseDetails from "../components/House/HouseDetails";
import HouseListing from "../components/House/HouseListing";

const appRouter = createBrowserRouter([
  { path: "/", element: <HouseListing /> },
  { path: "/house-detail/:id", element: <HouseDetails /> },
]);

export default appRouter;
