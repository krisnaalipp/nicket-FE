import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { useLocation, useNavigate } from "react-router-dom";

function NavBarAll() {
  const navigate = useNavigate();
  const location = useLocation();
  const { pathname } = location;
  const splitLocation = pathname.split("/");
  return (
    <>
      <Navbar
        collapseOnSelect
        expand="lg"
        bg="dark"
        variant="dark"
        className="fixed-top"
      >
        <Container>
          <Navbar.Brand onClick={() => navigate("/")}>NICKET</Navbar.Brand>
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
              <Nav.Link href="#pricing">Ticket</Nav.Link>
            </Nav>
            <Nav>
              <Nav.Link href="#deets">More deets</Nav.Link>
              <Nav.Link eventKey={2} href="#memes">
                Dank memes
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default NavBarAll;
