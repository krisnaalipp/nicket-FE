import { useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { useLocation, useNavigate } from "react-router-dom";
import "../custom.css";

function NavBar() {
  const navigate = useNavigate();

  const location = useLocation();
  const { pathname } = location;
  const splitLocation = pathname.split("/");

  const [color, setColor] = useState(false);
  const changeColor = () => {
    if (window.scrollY >= 90) {
      setColor(true);
    } else {
      setColor(false);
    }
  };

  window.addEventListener("scroll", changeColor);

  return (
    <>
      <div className={color ? "header header-bg" : "header"}>
        <Navbar
          collapseOnSelect
          expand="lg"
          variant="dark"
          className={color ? "header header-bg" : "header"}
        >
          <Container>
            <Navbar.Brand onClick={() => navigate("/")}>EAGLE F.C</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link
                  className={splitLocation[1] === "news" ? "active" : ""}
                  onClick={() => navigate("/news")}
                >
                  News
                </Nav.Link>
                <Nav.Link
                  className={splitLocation[1] === "match" ? "active" : ""}
                  onClick={() => navigate("/match")}
                >
                  Match
                </Nav.Link>
                <Nav.Link
                  className={splitLocation[1] === "about" ? "active" : ""}
                  onClick={() => navigate("/about")}
                >
                  About
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
    </>
  );
}

export default NavBar;
