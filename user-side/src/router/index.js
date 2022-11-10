import { createBrowserRouter } from "react-router-dom";
import Layout from "../pages/Layout";
import Home from "../pages/Home";
import DetailNews from "../pages/DetailNews";
import ListNews from "../pages/ListNews";
import Ticket from "../pages/Ticket";
import RegulerSeatTicket from "../pages/RegulerSeatTicket";
import VipSeatTicket from "../pages/VipSeatTicket";
import Match from "../pages/Match";
import About from "../pages/About";

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
        path: "/match",
        element: <Match />,
      },
      {
        path: "/detail-news/:id",
        element: <DetailNews />,
      },
      {
        path: "/ticket/:matchId",
        element: <Ticket />,
      },
      {
        path: "/seat/:matchId",
        element: <RegulerSeatTicket />,
      },
      {
        path: "/seat-vip/:matchId",
        element: <VipSeatTicket />,
      },
      {
        path: "/about",
        element: <About />,
      },
    ],
  },
]);

export default router;
