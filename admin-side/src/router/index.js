import { createBrowserRouter, redirect } from "react-router-dom";
import HomePage from "../pages/HomePage";
import Layout from "../pages/Layout";
import LoginPage from "../pages/LoginPage";
import Matches from "../pages/MatchesPage";
import NewsPage from "../pages/NewsPage";
import RegisterAdmin from "../pages/RegisterAdmin";

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
      {
        path: "/register",
        element: <RegisterAdmin />,
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
  {
    element: <LoginPage />,
    path: "/login",
    loader: () => {
      if (localStorage.getItem("access_token")) {
        redirect("/");
      } else {
        redirect("/login");
      }
    },
  },
]);

export default router;
