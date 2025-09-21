import "./Header.css";
import { ImBook } from "react-icons/im";
import { LuSearch } from "react-icons/lu";
import { Link, NavLink } from "react-router-dom";
import { LuShoppingCart } from "react-icons/lu";
import { CgProfile } from "react-icons/cg";

function Header() {
  return (
    <header className="header">
      <div className="header-container">
        <Link to="/home">
          <div className="logo">
            <div className="logo-bars">
              <div className="bar"></div>
              <div className="bar"></div>
              <ImBook style={{ fontSize: "20px" }} />
            </div>
            <span className="logo-text">MindMap</span>
          </div>
        </Link>

        <nav className="nav">
          <NavLink to="collections" className="nav-link">
            Collections
          </NavLink>
          <NavLink to="seller" className="nav-link">
            Sell on Bookshelp
          </NavLink>
          <NavLink to="support" className="nav-link">
            Support
          </NavLink>
          <LuSearch style={{ fontSize: "16px" }} />
          <NavLink to="cart" className="nav-link">
            <LuShoppingCart />
          </NavLink>
          <NavLink to="profile" className="nav-link">
            <CgProfile />
          </NavLink>
        </nav>
      </div>
    </header>
  );
}

export default Header;
