import { Outlet } from "react-router-dom";
// import NavBarAll from "../components/NavBarAll";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";

function Layout() {
  return (
    <>
      <NavBar />
      <Outlet />
      <Footer />
    </>
  );
}

export default Layout;
