import React from "react";
import HeroImg from "../assets/hero.svg";
const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-center">
        <div className="hero-title">
          <h1>contentful CMS</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit
            inventore odio molestiae aliquam porro magnam modi laudantium.
            Consequuntur, aperiam alias recusandae corporis dolore saepe, sit
            sunt natus labore hic amet.
          </p>
        </div>
        <div className="img-container">
          <img src={HeroImg} alt="hero" className="img" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
