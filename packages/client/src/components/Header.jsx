import "./Header.css";
import { ImBook } from "react-icons/im";

function Header() {
  return (
    <header className="header">
      <div className="header-container">
        <div className="logo">
          <div className="logo-bars">
            <div className="bar"></div>
            <div className="bar"></div>
            <ImBook style={{ fontSize: "20px" }} />
          </div>
          <span className="logo-text">MindMap</span>
        </div>

        <nav className="nav">
          <a href="#" className="nav-link">
            Collections
          </a>
          <a href="#" className="nav-link">
            Sell on Bookshelp
          </a>
          <a href="#" className="nav-link">
            Support
          </a>
        </nav>
      </div>
    </header>
  );
}

export default Header;
