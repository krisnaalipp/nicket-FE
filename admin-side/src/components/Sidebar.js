import { Sidebar, MenuItem, Menu, useProSidebar } from "react-pro-sidebar";
import { Outlet, useNavigate } from "react-router-dom";
import { PieChartFill, Newspaper, Calendar3 } from "react-bootstrap-icons";
import { RiLogoutBoxFill, RiRegisteredFill } from "react-icons/ri";

export default function SideBar() {
  const { collapseSidebar } = useProSidebar();
  const navigate = useNavigate();
  return (
    <div className="min-vh-100" style={{ display: "flex", height: "100%" }}>
      <Sidebar
        className="d-flex justify-content-center"
        style={{ backgroundColor: "#5887D0" }}
      >
        <div>
          <div
            className="d-flex justify-content-center"
            onClick={() => collapseSidebar()}
          >
            <img
              src="https://cdn.discordapp.com/attachments/1035515386172543087/1038008127443968030/logo.png"
              alt=""
              width={"60%"}
            />
          </div>
          <Menu>
            <MenuItem onClick={() => navigate("/")}>
              <PieChartFill size={25} style={{ marginRight: "10" }} />
              Chart
            </MenuItem>
            <MenuItem onClick={() => navigate("/news")}>
              <Newspaper size={25} style={{ marginRight: "10" }} />
              News
            </MenuItem>
            <MenuItem onClick={() => navigate("/fixtures")}>
              <Calendar3 size={25} style={{ marginRight: "10" }} />
              Matches
            </MenuItem>
            <MenuItem onClick={() => navigate("/register")}>
              <RiRegisteredFill size={25} style={{ marginRight: "10" }} />
              Register Admin
            </MenuItem>
            <MenuItem
              onClick={() => {
                localStorage.clear();
                navigate("/login");
              }}
            >
              <RiLogoutBoxFill size={25} style={{ marginRight: "10" }} />
              Log Out
            </MenuItem>
          </Menu>
        </div>
      </Sidebar>
      <Outlet />
    </div>
  );
}
