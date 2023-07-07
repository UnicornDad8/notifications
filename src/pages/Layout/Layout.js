import { Outlet, Link } from "react-router-dom";
import "./Layout.css";

function Layout() {
  return (
    <div className="layout-container">
      <nav className="navbar">
        <div className="logo">
          <Link className="logo-link" to="/">
            Logo
          </Link>
        </div>
        <div className="links-list">
          <Link className="link-item" to="/">
            Home
          </Link>
          <Link className="link-item" to="/notifications">
            Notifications
          </Link>
        </div>
      </nav>
      <Outlet />
    </div>
  );
}

export default Layout;
