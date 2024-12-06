import React from 'react';
import '@/app/styles/hero.css';



const Hero = () => {
  return (
    <section aria-label="Hero Section" className="heroSection">
      <div className="container">
        <header className="header">
          <div>
            <h1 className="title">I am Muzamil Ahmed</h1>
            <h4 className="subtitle">Frontend Developer</h4>
          </div>
          <div className="divider"></div>
          <div>
            <p className="description">
              Crafting modern, interactive, and responsive web applications with a focus on user experience.
            </p>
            <button
              aria-label="Learn more about Muzamil Ahmed"
              className="button"
            >
              Learn more
            </button>
          </div>
        </header>
      </div>
    </section>
  );
};

export default Hero;