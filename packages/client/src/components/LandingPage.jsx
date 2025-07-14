import { ImBook } from "react-icons/im";
import "./LandingPage.css";
import Button from "@mui/material/Button";
import BookImage from "../assets/images/dad.png";
import Ikigai from "../assets/images/ikigai.png";
import ProductCard from "./ProductCard";

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
            <a href="#bestSellers">BestSellers</a>
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
        <h2>Featured Books</h2>
        <div className="book-grid">
          {Array.from({ length: 8 }, (_, i) => (
            <div key={i} className="book-card">
              {/* <div className="book-image wireframe-box">
                <img
                  src={Ikigai}
                  alt="book"
                  style={{ width: "100%", height: "100%" }}
                />
              </div> */}
              <ProductCard />
              {/* <div className="book-info">
                <div className="book-title wireframe-box">Book Title</div>
                <div className="book-author wireframe-box">Author Name</div>
                <div className="book-price wireframe-box">$19.99</div>
                <div className="wireframe-box add-to-cart">Add to Cart</div>
              </div> */}
            </div>
          ))}
        </div>
      </section>

      {/* Sidebar Filters (for category pages) */}
      <section className="product-section">
        <div className="sidebar">
          <h3>Filters</h3>
          <div className="filter-group">
            <div className="wireframe-box">Price Range</div>
            <div className="wireframe-box">Author</div>
            <div className="wireframe-box">Rating</div>
            <div className="wireframe-box">Format</div>
            <div className="wireframe-box">Language</div>
          </div>
        </div>
        <div className="main-content">
          <div className="sort-options">
            <div className="wireframe-box">Sort by: Popularity</div>
            <div className="wireframe-box">View: Grid</div>
          </div>
          <div className="book-grid">
            {Array.from({ length: 12 }, (_, i) => (
              <div key={i} className="book-card wireframe-box">
                <div className="book-image wireframe-box">BOOK IMAGE</div>
                <div className="book-info">
                  <div className="book-title wireframe-box">Book Title</div>
                  <div className="book-author wireframe-box">Author</div>
                  <div className="book-price wireframe-box">$24.99</div>
                  <div className="wireframe-box add-to-cart">Add to Cart</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="newsletter">
        <div className="wireframe-box newsletter-content">
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
            <div className="wireframe-box">Company Info</div>
            <div className="wireframe-box">About Us</div>
            <div className="wireframe-box">Contact</div>
            <div className="wireframe-box">Careers</div>
          </div>
          <div className="footer-section">
            <div className="wireframe-box">Customer Service</div>
            <div className="wireframe-box">Help Center</div>
            <div className="wireframe-box">Returns</div>
            <div className="wireframe-box">Shipping Info</div>
          </div>
          <div className="footer-section">
            <div className="wireframe-box">Account</div>
            <div className="wireframe-box">My Orders</div>
            <div className="wireframe-box">Wishlist</div>
            <div className="wireframe-box">Account Settings</div>
          </div>
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
          <div className="wireframe-box">
            © 2024 Bookstore. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
