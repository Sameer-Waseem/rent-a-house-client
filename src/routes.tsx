import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "./pages/ErrorPage";
import HomePage from "./pages/HomePage";
import HouseDetailPage from "./pages/HouseDetailPage";
import HouseListingPage from "./pages/HouseListingPage";
import Layout from "./pages/Layout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "houses",
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
