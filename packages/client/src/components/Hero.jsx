import "./Hero.css";

function Hero() {
  return (
    <section className="hero">
      <div className="hero-container">
        <div className="hero-content">
          <div className="hero-text">
            <h1 className="hero-title">Discover Your Next Great Read</h1>
            <br />
            <p className="hero-description">
              “Books are a uniquely portable magic.” — Stephen King
            </p>
          </div>

          <div className="hero-cta">
            <button className="diary-button">Diary</button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
