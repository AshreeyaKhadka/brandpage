const HeroSection = () => {
  return (
    <main className="hero container">
      <div className="hero-content">
        <h1>Welcome to Our Website</h1>
        <p>
          Your success starts here. Explore our services and offerings to find
          out how we can help you achieve your goals.
        </p>
        <div className="hero-btn">
          <button className="primary-btn">Shop Now</button>
          <button className="secondary-btn">Category</button>
        </div>
        <div className="shopping">
          <p>Also Available On</p>
          <div className="brand-icons">
            <img src="/images/amazon.png" alt="Amazon Logo" />
            <img src="/images/flipkart.png" alt="Flipkart Logo" />
          </div>
        </div>
      </div>
      <div className="hero-image">
        <img src="/images/hero-image.png" alt="Hero Image" />
      </div>
    </main>
  );
};
export default HeroSection;
