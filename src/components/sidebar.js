import React from "react";
import { Link, NavLink } from "react-router-dom";
import logo from './../data/logo.jpg';
const Sidebar = () => {
  return (
    <div>
      <aside className="navbar-aside" id="offcanvas_aside">
        <div className="aside-top">
          <Link to="/" className="brand-wrap">
            <img
              src={logo}
              style={{ borderRadius:'50%' ,height: "46" }}
              className="logo"
              alt="Ecommerce dashboard template"
            />
          </Link>
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
                <i className="icon fas fa-home"></i>
                <span className="text">Home</span>
              </NavLink>
            </li>
            <li className="menu-item">
              <NavLink
                className="menu-link"
                activeClassName="active"
                to="/delivery"
                exact={true}
              >
                <i className="icon fas fa-truck"></i>
                <span className="text">Delivery Amount</span>
              </NavLink>
            </li>
            <li className="menu-item">
              <NavLink
                activeClassName="active"
                className="menu-link"
                to="/category"
              >
                <i className="icon fas fa-users"></i>
                <span className="text">Customers</span>
              </NavLink>
            </li>
            <li className="menu-item">
              <NavLink
                activeClassName="active"
                className="menu-link"
                to="/orders"
              >
                <i className="icon fas fa-bags-shopping"></i>
                <span className="text">Orders</span>
              </NavLink>
            </li>
            <li className="menu-item">
              <NavLink
                activeClassName="false"
                className="menu-link"
                to="#"
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
