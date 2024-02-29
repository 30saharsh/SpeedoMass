import React from "react";
import styles from "../components/About.module.css";
import NavBar from "./NavBar";
import Footer from "./Footer";

const About = () => {
  return (
    <div>
      <NavBar />
      <div className={styles.aboutcenter}>
        <h1 className={styles.aboutheading}>About Us</h1>
      </div>
      <div className={styles.aboutbelow}>
        <div className={styles.aboutbelowleft}>
          <h1>Our Client Say About Us</h1>
          <p>
            Explore the experiences shared by our clients as they offer insights
            into their journey with us. Uncover the stories of satisfaction,
            partnership, and success that define our collaborative efforts. Our
            client testimonials speak louder than words, providing a glimpse
            into the genuine trust and satisfaction that define our
            relationships
          </p>
          <p>
            Discover the genuine experiences of our valued clients as they share
            their thoughts on partnering with us. These testimonials reflect the
            trust, satisfaction, and success that define our relationships. Join
            us in celebrating the voices of those who have experienced the
            difference with us.
          </p>
        </div>
        <div className={styles.aboutbelowrihgt}>
          <img className={styles.oneimage} src="/blog.png" alt="" />
          <img className={styles.twoimage} src="/lay.png" alt="" />
        </div>
      </div>


      <div className={styles.aboutpage2}>
        <div className={styles.aboutpage2center}>
          <h1>Relating To Us</h1>
          <p>
            As you navigate through the fabric of SpeedoMass, envision a journey
            that transcends the ordinary. Uncover the core values that guide our
            endeavors, the significant milestones that shape our narrative, and
            the unwavering commitment to excellence propelling us forward.
            Relating to SpeedoMass isn't a mere alignment with a company; it's
            an immersive experience into a shared narrative where your
            aspirations intertwine with our collective vision.
          </p>
          <p>
            Join us in unraveling this story, forging connections that transform
            your journey into a meaningful part of ours within the expansive
            landscape of innovation and creativity.
          </p>
        </div>
      </div>


    
      <div className={styles.aboutpage3}>

<div className={styles.aboutpage3center}>
  <div className={styles.aboutpage3centerleft}>
    <img src="/analysis.png" alt="" />
  </div>
  <div className={styles.aboutpage3centerright}>
    <h1 style={{color:"#11235d"}} >Mission & Values Of Your Law Consult Firm</h1>
    <p>At the very core of SpeedoMass, our mission and values serve as the guiding compass, shaping our identity and directing our every endeavor. Our mission is crystal clear: to take the lead in innovation within the realms of IT Development and Event Management. We are dedicated to delivering nothing short of cutting-edge solutions and curating events that leave lasting impressions.</p>
    <div className={styles.ouranalysis}>
    <div className={styles.ouranalysisleft}>
      <h1>25+</h1>
      <h3 style={{marginTop:"-10px"}} >Apps Complete</h3>
    </div>
    <div className={styles.ouranalysisright}>
    <h1>50+</h1>
      <h3 style={{marginTop:"-10px"}}  >Website Live</h3>
    </div>
    </div>
  </div>
</div>






</div>



<h1  className={styles.ourtm} style={{color:"#11235d" , fontFamily:"Gilroy" , marginLeft:"11vw"}} >Our Team Members</h1>
<div className={styles.aboutpage4} >
  
<div className={styles.aboutpage4card}>
  
<div className={styles.aboutpage4cardinside}>
<img src="/women.png" alt="" />
<div className={styles.cardinfo}>
<h2>Lorem Ipsum</h2>
<p style={{marginTop:"-16px"}} >Designation</p>
</div>
</div>
</div>
<div className={styles.aboutpage4card}>
<div className={styles.aboutpage4cardinside}>
<img src="/women.png" alt="" />
<div className={styles.cardinfo}>
<h2>Lorem Ipsum</h2>
<p style={{marginTop:"-16px"}} >Designation</p>
</div>
</div>
</div>
<div className={styles.aboutpage4card}>
<div className={styles.aboutpage4cardinside}>
<img src="/women.png" alt="" />
<div className={styles.cardinfo}>
<h2>Lorem Ipsum</h2>
<p style={{marginTop:"-16px"}} >Designation</p>
</div>
</div>
</div>
</div>

<div className={styles.aboutpage5}>
<div className={styles.aboutpage5center}>
  <h1 style={{marginTop:"-22px"}}>Join Our Newsletter</h1>
  <p style={{marginTop:"-2px"}} >Stay Informed and Inspired: Join Our Newsletter Today!</p>
  <div className={styles.aboutpage5inputs}>
    <input type="text"  placeholder="Full Name"/>
    <input className={styles.aboutemailinput} type="email" placeholder="Enter Your Email Address..." />
    <button className={styles.aboutsubs} >SUBSCRIBE</button>
  </div>
</div>
</div>



      <Footer/>
    </div>
  );
};

export default About;
