import { Link, useLocation } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "./UserContext";

const Menu = () => {
  const location = useLocation();
  const { user } = useContext(UserContext);

  const isActive = (path) => location.pathname === path;

  const menuClass = "menu";
  const activeMenuClass = "menu selected";

  // Helper to get initials from user name
  const getInitials = (name) => {
    if (!name) return "?";
    const parts = name.trim().split(" ");
    if (parts.length === 1) return parts[0][0].toUpperCase();
    return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase();
  };

  return (
    <div className="menu-container">
      <img src="logo.png" style={{ width: "50px" }} />
      <div className="menus">
        <ul>
          <li>
            <Link to="/" style={{ textDecoration: "none" }}>
              <p className={isActive("/") ? activeMenuClass : menuClass}>Dashboard</p>
            </Link>
          </li>
          <li>
            <Link to="/orders" style={{ textDecoration: "none" }}>
              <p className={isActive("/orders") ? activeMenuClass : menuClass}>Orders</p>
            </Link>
          </li>
          <li>
            <Link to="/holdings" style={{ textDecoration: "none" }}>
              <p className={isActive("/holdings") ? activeMenuClass : menuClass}>Holdings</p>
            </Link>
          </li>
          <li>
            <Link to="/positions" style={{ textDecoration: "none" }}>
              <p className={isActive("/positions") ? activeMenuClass : menuClass}>Positions</p>
            </Link>
          </li>
          <li>
            <Link to="/funds" style={{ textDecoration: "none" }}>
              <p className={isActive("/funds") ? activeMenuClass : menuClass}>Funds</p>
            </Link>
          </li>
          <li>
            <Link to="/apps" style={{ textDecoration: "none" }}>
              <p className={isActive("/apps") ? activeMenuClass : menuClass}>Apps</p>
            </Link>
          </li>
        </ul>
        <hr />
        <div className="profile">
          <div className="avatar">{getInitials(user?.name)}</div>
          <p className="username">{user?.name || "USERID"}</p>
        </div>
      </div>
    </div>
  );
};
 

export default Menu;