import { Navbar, Nav } from "react-bootstrap";
import { useProSidebar } from "react-pro-sidebar";
export default function NavBarAdmin() {
  const { collapseSidebar } = useProSidebar();
  return (
    <Navbar style={{ backgroundColor: "#000064" }} variant="dark">
      <div className="row m-1">
        <Navbar.Brand>
          <button
            style={{ borderRadius: 5, paddingX: 8 }}
            className="btn btn-outline"
            onClick={() => collapseSidebar()}
          >
            <h3 style={{ color: "#caf0f8" }}>EAGLE F.C</h3>
          </button>
        </Navbar.Brand>
        <Nav className="me-auto"></Nav>
      </div>
    </Navbar>
  );
}
