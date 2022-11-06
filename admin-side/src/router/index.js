import { createBrowserRouter, redirect } from "react-router-dom";
import HomePage from "../pages/HomePage";
import Layout from "../pages/Layout";
import Matches from "../pages/MatchesPage";
import NewsPage from "../pages/NewsPage";

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/fixtures",
        element: <Matches />,
      },
      {
        path: "/news",
        element: <NewsPage />,
      },
    ],
    loader: () => {
      if (!localStorage.getItem("access_token")) {
        redirect("/login");
      } else {
        redirect("/");
      }
    },
  },
]);

export default router;
