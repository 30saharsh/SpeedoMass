"use client";
import { useState } from "react";
import styles from "../components/Contact.module.css";
import NavBar from "./NavBar";
import Footer from "./Footer";
import axios from "axios";
import React from 'react';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Contact = () => {
  const [Firstname, setFirstname] = useState("");
  const [Lastname, setLastname] = useState("");
  const [Email, setEmail] = useState("");
  const [Phonnumber, setPhonnumber] = useState("");
  const [Message, setMessage] = useState("");
  const [selectedCountry, setSelectedCountry] = useState("India");
  const [selectedSubject, setSelectedSubject] = useState("");

  const FirstnameHandler = (e) => {
    setFirstname(e.target.value);
  };

  const LastnameHandler = (e) => {
    setLastname(e.target.value);
  };
  const EmailHandler = (e) => {
    setEmail(e.target.value);
  };
  const PhoneNumberHandler = (e) => {
    setPhonnumber(e.target.value);
  };
  const MessageHandler = (e) => {
    setMessage(e.target.value);
  };

  const handleCountryChange = (e) => {
    setSelectedCountry(e.target.value);
  };
  const handleSubjectChange = (e) => {
    setSelectedSubject(e.target.value);
  };

  console.log(Firstname)


  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("This is Message",Message)

    try {
      const response = await axios.post("http://localhost:8080/contactdata", {
        fullname: Firstname,
        lastname: Lastname,
        email: Email,
        phone: Phonnumber,
        country: selectedCountry,
        subject: selectedSubject,
        message: Message,
      });

      console.log(response);
      toast.success("Successful Contact Form Submition");
    } catch (error) {
      toast.error("Error Submiting Contact Form");
      console.log(error);
    }
  };

  console.log("This is the selected Country", selectedCountry);
  console.log("Selected Subject:", selectedSubject);


  return (
    <div>
      <NavBar />
      <ToastContainer />
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
            <form
              className={styles.contactform}
              onSubmit={handleSubmit}
              action=""
            >
              <div className={styles.oneinp}>
                <input
                  type="text"
                  value={Firstname}
                  onChange={FirstnameHandler} 
                  placeholder="First Name"
                />
                <input
                  type="text"
                  value={Lastname}
                  onChange={LastnameHandler}
                  placeholder="Last Name"
                />
              </div>
              <div className={styles.twoinp}>
                <input
                  onChange={EmailHandler}
                  value={Email}
                  type="email"
                  placeholder="Email"
                />
                <input
                  onChange={PhoneNumberHandler}
                  value={Phonnumber}
                  type="number"
                  placeholder="Phone Number"
                />
              </div>
              <div className={styles.threeinp}>
                <h4 style={{ color: "black" }}>Country Of Residence</h4>
                <select
                  id="dropdown"
                  name="dropdown"
                  onChange={handleCountryChange}
                >
                  <option value="India">India</option>
                  <option value="Pakistan">Pakistan</option>
                  <option value="USA">USA</option>
                </select>
              </div>
              <div className={styles.fourinp}>
                <h4 style={{ color: "black" }}>Select Subject</h4>

                <div className={styles.fourinpinside}>
                  <input
                    value="General Inquiry 1"
                    onChange={handleSubjectChange}
                    type="radio"
                    name="General Inquiry"
                    id=""
                  />
                  <h4 style={{ color: "black" }}>General Inquiry</h4>
                  <br />
                  <input
                    value="General Inquiry 2"
                    onChange={handleSubjectChange}
                    type="radio"
                    name="General Inquiry"
                    id=""
                  />
                  <h4 style={{ color: "black" }}>General Inquiry</h4>
                  <input
                    value="General Inquiry 3"
                    onChange={handleSubjectChange}
                    type="radio"
                    name="General Inquiry"
                    id=""
                  />
                  <h4 style={{ color: "black" }}>General Inquiry</h4>
                  <input
                    value="General Inquiry 4"
                    onChange={handleSubjectChange}
                    type="radio"
                    name="General Inquiry"
                    id=""
                  />
                  <h4 style={{ color: "black" }}>General Inquiry</h4>
                </div>
              </div>
              <div className={styles.fiveinp}>
                <h4 style={{ color: "black" }}>Message</h4>
                <input onChange={MessageHandler} value={Message} type="text" />
              </div>
              <button className={styles.formsm}>Send Message</button>
            </form>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Contact;
