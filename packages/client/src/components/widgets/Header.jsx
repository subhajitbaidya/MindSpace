import "./Header.css";
import Logo from "../../Brand/Logo";
import { LuSearch } from "react-icons/lu";
import { Link, NavLink } from "react-router-dom";
import { LuShoppingCart } from "react-icons/lu";
import { CgProfile } from "react-icons/cg";

function Header() {
  return (
    <header className="header">
      <div className="header-container">
        <Link to="/home">
          <Logo />
        </Link>

        <nav className="nav">
          <NavLink to="collections" className="nav-link">
            Collections
          </NavLink>
          <NavLink to="seller" className="nav-link">
            Become a Seller
          </NavLink>
          <NavLink to="community" className="nav-link">
            MindSpace Community
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
