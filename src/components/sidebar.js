import React from "react";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
  return (
    <div>
      <aside className="navbar-aside" id="offcanvas_aside">
        <div className="aside-top">
          <div>
            <button className="btn btn-icon btn-aside-minimize">
              <i className="text-muted fas fa-stream"></i>
            </button>
          </div>
        </div>

        <nav>
          <ul className="menu-aside">
          <li className="menu-item">
              <NavLink
                activeClassName="active"
                className="menu-link"
                to="/"
              >
                <i className="icon fas fa-user"></i>
                <span className="text">Users</span>
              </NavLink>
            </li>
            
          </ul>
          <br />
          <br />
        </nav>
      </aside>
    </div>
  );
};

export default Sidebar;
