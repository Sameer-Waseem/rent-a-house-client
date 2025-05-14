import { createBrowserRouter } from "react-router-dom";
import HouseDetailPage from "./pages/HouseDetailPage";
import HouseListingPage from "./pages/HouseListingPage";
import Layout from "./pages/Layout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <HouseListingPage />,
      },
      {
        path: "house/:id",
        element: <HouseDetailPage />,
      },
    ],
  },
]);

export default router;
