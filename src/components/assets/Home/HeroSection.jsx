import React from "react";
import styles from './HeroSection.module.css'; // Correct

import heroImage from "../images/hero.jpg"; 
import About from "../About/About";// Path to your uploaded image

const HeroSection = () => {
  return (
    <section className={styles.heroSection}>
      <div className={styles.overlay}>
        <div className={styles.content}>
          <h1 className={styles.heading}>An Angel Baby's Cuddle Sent To A Family In Need</h1>
          <p className={styles.text}>
            Molly Bears exists to create a positive & comforting impact for families enduring any form of infant loss.
          </p>
          <button className={styles.button}>Donate Today</button>
        </div>
      </div>
      <img src={heroImage} alt="Hero" className={styles.heroImage} />
    </section>
  );
  <About/>
};

export default HeroSection;
