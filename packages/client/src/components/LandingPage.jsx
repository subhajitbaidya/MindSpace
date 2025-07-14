import { ImBook } from "react-icons/im";
import "./LandingPage.css";
import Button from "@mui/material/Button";
import ProductCard from "./ProductCard";
import BookImage from "../assets/images/dad.png";

const LandingPage = () => {
  return (
    <div className="landing-container">
      <header className="header">
        <div className="header-content">
          <div className="logo">
            <div className="logo-icon">
              <ImBook
                style={{ fontSize: "50px", paddingTop: "4px", height: "100px" }}
              />
            </div>
            <span className="logo-text">BookShelp</span>
          </div>

          <nav className="nav">
            <a href="#collections">Collections</a>
            <a href="#bestSellers">Featured</a>
            <a href="#sellonbookshelp">Sell on BookShelp</a>
            <a href="#support">Support</a>
          </nav>
          <Button variant="contained" id="diary-btn">
            Diary
          </Button>
        </div>
      </header>

      <section className="hero">
        <div className="hero-content">
          <div className="hero-text">
            <span>Books keep you away from distractions</span>
            <br></br>
            <button variant="contained" id="shop-btn">
              Shop Now
            </button>
          </div>
          <div className="hero-image">
            <img src={BookImage} alt="book" />
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="categories">
        <h2>Book Categories</h2>
        <div className="category-grid">
          <div className="category-item">Fiction</div>
          <div className="category-item">Non-Fiction</div>
          <div className="category-item">Mystery</div>
          <div className="category-item">Romance</div>
          <div className="category-item">Sci-Fi</div>
          <div className="category-item">Biography</div>
        </div>
      </section>

      {/* Featured Books */}
      <section className="featured-books">
        <h2>Non-Fiction</h2>
        <div className="book-grid">
          {Array.from({ length: 10 }, (_, i) => (
            <div key={i} ProductCard>
              <ProductCard />
            </div>
          ))}
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="newsletter">
        <div className="newsletter-content">
          <h3>Subscribe to Our Newsletter</h3>
          <div className="newsletter-form">
            <div className="wireframe-box email-input">Email Address</div>
            <div className="wireframe-box subscribe-btn">Subscribe</div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-content">
          <div className="footer-section">
            <div className="wireframe-box">Follow Us</div>
            <div className="social-links">
              <div className="wireframe-box">Facebook</div>
              <div className="wireframe-box">Twitter</div>
              <div className="wireframe-box">Instagram</div>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          © 2025 Bookshelp. All rights reserved.
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
