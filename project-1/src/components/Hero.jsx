import React from "react";

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = React.useState(0);
  const totalSlides = 5; // Number of images

  const handleSlide = (direction) => {
    if (direction === "next") {
      setCurrentSlide((prev) => (prev + 1) % totalSlides);
    } else {
      setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
    }
  };

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
        <button className="slider-btn prev" onClick={() => handleSlide("prev")}>
          &lt;
        </button>
        <div className="image-slider">
          <img
            src="/images/hero-image.png"
            alt="Hero Image"
            className={currentSlide === 0 ? "active" : ""}
          />
          <img
            src="/images/hero.png"
            alt="Hero"
            className={currentSlide === 1 ? "active" : ""}
          />
          <img
            src="/images/pink.png"
            alt="Pink"
            className={currentSlide === 2 ? "active" : ""}
          />
          <img
            src="/images/clothes.png"
            alt="Clothes"
            className={currentSlide === 3 ? "active" : ""}
          />
          <img
            src="/images/green.png"
            alt="Green"
            className={currentSlide === 4 ? "active" : ""}
          />
        </div>
        <button className="slider-btn next" onClick={() => handleSlide("next")}>
          &gt;
        </button>
      </div>
    </main>
  );
};
export default HeroSection;
