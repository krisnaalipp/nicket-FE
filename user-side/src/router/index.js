import { createBrowserRouter } from "react-router-dom";
import Layout from "../pages/Layout";
import Home from "../pages/Home";
import DetailArticle from "../pages/DetailArticle";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    element: <Layout />,
    children: [
      {
        path: "/detail-article",
        element: <DetailArticle />,
      },
    ],
  },
]);

export default router;
