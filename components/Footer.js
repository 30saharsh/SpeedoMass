import React from "react";
import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <div>
      <div className={styles.footermain}>
        <div className={styles.section1}>
          <img src="/smlogo.png" alt="" />
          <h3>Looking To Get Started ?</h3>
          <p>
            Ready to get started on your project? Contact us today and let us
            help you bring your ideas to life.
          </p>
        </div>
        <div className={styles.section2}>
          <h3>Menu</h3>
          <a href="/">Home</a>
          <a href="/about">About Us</a>
          <a href="#">Case Study</a>
          <a href="/blog">Blogs</a>
          <a href="/job">Carrer / Job Opening</a>
          <a href="/privacy">Privacy Policy</a>
          <a href="/tc">Term & Condition</a>
        </div>
        <div className={styles.section3}>
          <h3>Services</h3>
          <a href="/appdev">Android App Development</a>
          <a href="#">IOS App Development</a>
          <a href="/webdev">Web Design & Development</a>
          <a href="#">Dashboard Design & Development</a>
          <a href="#">Blockchain Development</a>
          <a href="#">Artificial Intelligence</a>
        </div>
        <div className={styles.section4}>
          <h3 style={{ marginBottom: "25px" }}>Get In touch with us</h3>
          <p style={{ marginBottom: "-3px" }}>Phone: +91 134 123456</p>
          <p style={{ marginBottom: "-7px" }}>
            Email: info@Info@speedomassco mmunication.com
          </p>
          <p>Location: G 223 hub town near modhera circle Mahesana, India</p>
          <div className={styles.icons}>
            <img src="/fb.png" alt="" />
            <img src="/insta.png" alt="" />
            <img src="/li.png" alt="" />
            <img src="twitter.png" alt="" />
          </div>
        </div>
      </div>
      <div className={styles.footerlow}>
        <p>
          Copyright © 2023 speedomass | All rights reserved designed by Syed
          Sameed Ali
        </p>
      </div>
    </div>
  );
};

export default Footer;
