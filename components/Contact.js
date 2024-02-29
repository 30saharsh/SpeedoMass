import React from "react";
import styles from "../components/Contact.module.css";
import NavBar from "./NavBar";
import Footer from "./Footer";

const Contact = () => {
  return (
    <div>
      <NavBar />
      <div className={styles.cpage1}>
        <h1>Contact Us</h1>
        <p>Any question or remarks? Just write us a message!</p>
      </div>

      <div className={styles.cpage2}>
        <div className={styles.cpage2center}>
          <div className={styles.cpage2centerleft}>
            <h1>Contact Information </h1>
            <div className={styles.phonenumber}>
              <img src="/bxcphone.png" alt="" />
              <p>+91 134 123456</p>
            </div>
            <div className={styles.mail}>
              <img src="/onemsg.png" alt="" />
              <p>Info@speedomasscommunication.com</p>
            </div>
            <div className={styles.locate}>
              <img src="/locate.png" alt="" />
              <p>G 223 hub town near modhera circle Mahesana, India</p>
            </div>
            <div className={styles.icons}>
              <img src="/fb.png" alt="" />
              <img src="/insta.png" alt="" />
              <img src="/li.png" alt="" />
              <img src="twitter.png" alt="" />
            </div>
          </div>

          <div className={styles.cpage2centerright}>
 <div className={styles.oneinp}>
   <input type="text" placeholder="First Name" />
  <input type="text" placeholder="Last Name" />
 </div>
 <div className={styles.twoinp}>
  <input type="email" placeholder="Email" />
   <input type="number" placeholder="Phone Number" />
 </div>
 <div className={styles.threeinp}>
   <h4 style={{color:"black"}} >Country Of Residence</h4>
   <select id="dropdown" name="dropdown">
     <option value="option1"></option>
     <option value="option2"></option>
     <option value="option3"></option>
   </select>
 </div>
 <div className={styles.fourinp}>
   <h4 style={{color:"black"}} >Select Subject</h4>

   <div className={styles.fourinpinside}>
     <input type="radio" name="General Inquiry" id="" />
     <h4 style={{color:"black"}} >General Inquiry</h4>
   <br />
     <input type="radio" name="General Inquiry" id="" />
     <h4 style={{color:"black"}} >General Inquiry</h4>
     <input type="radio" name="General Inquiry" id="" />
     <h4 style={{color:"black"}} >General Inquiry</h4>
     <input type="radio" name="General Inquiry" id="" />
     <h4 style={{color:"black"}} >General Inquiry</h4>
   </div>
 </div>
 <div className={styles.fiveinp}>
   <h4 style={{color:"black"}}  >Message</h4>
   <input type="text"/>
 </div>
 <button className={styles.formsm} >Send Message</button>
 </div>
      
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Contact;




