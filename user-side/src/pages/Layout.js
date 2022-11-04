import { Outlet } from "react-router-dom";
import NavBarAll from "../components/NavBarAll";
import Footer from "../components/Footer";

function Layout() {
  return (
    <>
      <NavBarAll />
      <Outlet />
      <Footer />
    </>
  );
}

export default Layout;
