import { createBrowserRouter } from "react-router-dom";
import Layout from "../pages/Layout";
import Home from "../pages/Home";
import DetailNews from "../pages/DetailNews";
import ListNews from "../pages/ListNews";

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/news",
        element: <ListNews />,
      },
      {
        path: "/detail-news/:id",
        element: <DetailNews />,
      },
    ],
  },
]);

export default router;
