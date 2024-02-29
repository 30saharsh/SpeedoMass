"use client";
import { useState } from "react";
import NavBar from "./NavBar";
import styles from "./Services.module.css";
import Footer from "./Footer";
import Link from "next/link";
import { useRouter } from "next/navigation";

const Services = () => {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  const [isOpen1, setIsOpen1] = useState(false);
  const [isOpen2, setIsOpen2] = useState(false);
  const [isOpen3, setIsOpen3] = useState(false);
  const [isOpen4, setIsOpen4] = useState(false);
  const [isOpen5, setIsOpen5] = useState(false);


  const toggleDropdown = () => {
    console.log("Saharsh");
    setIsOpen(!isOpen);
  };

  const toggleDropdown1 = () => {
    setIsOpen1(!isOpen1);
  };

  const toggleDropdown2 = () => {
    setIsOpen2(!isOpen2);
  };

  const toggleDropdown3 = () => {
    setIsOpen3(!isOpen3);
  };

  const toggleDropdown4 = () => {
    setIsOpen4(!isOpen4);
  };

  const toggleDropdown5 = () => {
    setIsOpen5(!isOpen5);
  };
  const Navigate = () =>{
    console.log("saharsh Shrivastava")
router.push("/appdev");
  }
  const NavigateWeb = () =>{
    console.log("saharsh Shrivastava Web")
router.push("/webdev");
  }

  return (
    <div className={styles.services}>


      <NavBar />

      
      <div className={styles.page1}>
        <h1 className={styles.servicesheading}>Our Services</h1>
      </div>
      <div className={styles.page2}>
        <div className={styles.page2up}>
          <div className={styles.page2card}>
            <div  onClick={Navigate}  className={styles.page2cardup}>
              <div className={styles.page2cardupleft}>
                <img src="/carbonphone.png" alt="" />
              </div>
              <div className={styles.page2cardupright}>
                <p style={{ marginBottom: "-15px" }}>Mobile App</p>
                <h3>Development</h3>
              </div>
            </div>
            <div className={styles.page2carddown}>
              <p style={{ marginBottom: "-30px" }}>
                Crafting seamless experiences that reside in your users'
                pockets. Our mobile app development team breathes life into your
                ideas, ensuring user-friendly interfaces and cutting-edge
                functionality. Elevate your brand with apps that captivate and
                convert.
              </p>
            </div>
          </div>
          <div className={styles.page2card}>
            <div onClick={NavigateWeb}  className={styles.page2cardup}>
              <div className={styles.page2cardupleft}>
                <img src="/fluent.png" alt="" />
              </div>
              <div className={styles.page2cardupright}>
                <p style={{ marginBottom: "-15px" }}>Web</p>
                <h3>Development</h3>
              </div>
            </div>
            <div className={styles.page2carddown}>
              <p style={{ marginBottom: "-30px" }}>
                Empower your brand online. Our web development wizards turn
                ideas into visually stunning websites, from elegant portfolios
                to robust e-commerce platforms. Transform your vision into a
                captivating online presence
              </p>
            </div>
          </div>
          <div className={styles.page2card}>
            <div className={styles.page2cardup}>
              <div className={styles.page2cardupleft}>
                <img src="/backendless.png" alt="" />
              </div>
              <div className={styles.page2cardupright}>
                <p style={{ marginBottom: "-15px" }}>Backend</p>
                <h3>Development</h3>
              </div>
            </div>
            <div className={styles.page2carddown}>
              <p style={{ marginBottom: "-30px" }}>
                In the digital landscape, we guide your brand to new heights.
                Tailored strategies amplify your voice, engage your audience,
                and drive conversions. From SEO to PPC campaigns, we boost your
                online visibilit
              </p>
            </div>
          </div>
        </div>
        <div className={styles.page2down}>
          <div className={styles.page2card}>
            <div className={styles.page2cardup}>
              <div className={styles.page2cardupleft}>
                <img src="/window.png" alt="" />
              </div>
              <div className={styles.page2cardupright}>
                <p style={{ marginBottom: "-15px" }}>Dashboard</p>
                <h3>Designs</h3>
              </div>
            </div>
            <div className={styles.page2carddown}>
              <p style={{ marginBottom: "-30px" }}>
                In the digital landscape, we guide your brand to new heights.
                Tailored strategies amplify your voice, engage your audience,
                and drive conversions. From SEO to PPC campaigns, we boost your
                online visibilit
              </p>
            </div>
          </div>
          <div className={styles.page2card}>
            <div className={styles.page2cardup}>
              <div className={styles.page2cardupleft}>
                <img src="/game.png" alt="" />
              </div>
              <div className={styles.page2cardupright}>
                <p style={{ marginBottom: "-15px" }}>Artificial</p>
                <h3>Intelligence</h3>
              </div>
            </div>
            <div className={styles.page2carddown}>
              <p style={{ marginBottom: "-30px" }}>
                In the digital landscape, we guide your brand to new heights.
                Tailored strategies amplify your voice, engage your audience,
                and drive conversions. From SEO to PPC campaigns, we boost your
                online visibilit
              </p>
            </div>
          </div>
          <div className={styles.page2card}>
            <div className={styles.page2cardup}>
              <div className={styles.page2cardupleft}>
                <img src="/block.png" alt="" />
              </div>
              <div className={styles.page2cardupright}>
                <p style={{ marginBottom: "-15px" }}>Blockchain</p>
                <h3>Development</h3>
              </div>
            </div>
            <div className={styles.page2carddown}>
              <p style={{ marginBottom: "-30px" }}>
                In the digital landscape, we guide your brand to new heights.
                Tailored strategies amplify your voice, engage your audience,
                and drive conversions. From SEO to PPC campaigns, we boost your
                online visibilit
              </p>
            </div>
          </div>
        </div>
      </div>


      <div className={styles.page3}>
        <div className={styles.page3tech}>
          <div className={styles.page3techleft}>
            <h1>Tech & Efficiency Focus</h1>
            <div className={styles.page3techleftdown}>
              <div className={styles.techinfo}>
                <div className={styles.circle}>
                  <img src="/arrowcross.png" alt="" />
                </div>
                <div className={styles.techinforight}>
                  <h3>Strategy & Business</h3>
                  <p>
                    We design business models and growth strategies to be
                    effective and competitive.
                  </p>
                </div>
              </div>
              <div className={styles.techinfo}>
                <div className={styles.circle}>
                  <img src="/pd.png" alt="" />
                </div>
                <div className={styles.techinforight}>
                  <h3>Product Development</h3>
                  <p>Innovative product development for the modern age.</p>
                </div>
              </div>
              <div className={styles.techinfo}>
                <div className={styles.circle}>
                  <img src="/set.png" alt="" />
                </div>
                <div className={styles.techinforight}>
                  <h3>Futures Research</h3>
                  <p>
                    Exploring the possibilities of tomorrow through Futures
                    Research.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.page3techright}>
            <img src="/finaldashboard.png" alt="" />
          </div>
        </div>
      </div>

      <div className={styles.page4}>
        <div className={styles.page4up}>
          <h1>Let's Build Long-Lasting Software Together</h1>
        </div>
        <div className={styles.page4down}>
          <div className={styles.skill1}>
            <img src="/flutter.png" alt="" />
            <h3>FLUTTER</h3>
          </div>
          <div className={styles.skill2}>
            <img src="/react.png" alt="" />
            <h3>REACT.JS</h3>
          </div>
          <div className={styles.skill3}>
            <img src="/python.png" alt="" />
            <h3>PYTHON</h3>
          </div>
          <div className={styles.skill4}>
            <img src="/jango.png" alt="" />
            <h3>DJANGO</h3>
          </div>
          <div className={styles.skill5}>
            <img src="/angular.png" alt="" />
            <h3>ANGULAR</h3>
          </div>
        </div>
      </div>


   
      <div className={styles.page5}>
        <div className={styles.page5top}>
          <h1 style={{ color: "#11235d" }}>Frequently Asked Questions</h1>
          <p

          className={styles.pp}
          >
            We hope this section will help you better understand the issues
            related to software
          </p>
        </div>
        <div className={styles.page5down}>
          <div className={styles.pagedownleft}>
            <div className={styles.dropdowncontainer}>
              <div className={styles.dropdownheader} onClick={toggleDropdown}>
                <span className={styles.plusicon}>+</span>
                <span className={styles.question}>What is your question?</span>
              </div>
              {isOpen && (
                <div className={styles.dropdowncontent}>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Ipsam sint commodi esse sed mollitia minus quod laboriosam,
                    aliquid, distinctio placeat cumque, quis autem repellat cum
                    molestias. Quo corporis dolorem officia pariatur accusantium
                    deleniti accusamus ab asperiores aliquam! Sapiente, officiis
                    nobis!
                  </p>
                  {/* Add more content as needed */}
                </div>
              )}
            </div>
            <div className={styles.dropdowncontainer}>
              <div className={styles.dropdownheader} onClick={toggleDropdown1}>
                <span className={styles.plusicon}>+</span>
                <span className={styles.question}>What is your question?</span>
              </div>
              {isOpen1 && (
                <div className={styles.dropdowncontent}>
                  <p>This is the answer to the question.</p>
                  {/* Add more content as needed */}
                </div>
              )}
            </div>
            <div className={styles.dropdowncontainer}>
              <div className={styles.dropdownheader} onClick={toggleDropdown2}>
                <span className={styles.plusicon}>+</span>
                <span className={styles.question}>What is your question?</span>
              </div>
              {isOpen2 && (
                <div className={styles.dropdowncontent}>
                  <p>This is the answer to the question.</p>
                  {/* Add more content as needed */}
                </div>
              )}
            </div>
          </div>
          <div className={styles.pagedownright}>
            <div className={styles.dropdowncontainer}>
              <div className={styles.dropdownheader} onClick={toggleDropdown3}>
                <span className={styles.plusicon}>+</span>
                <span className={styles.question}>What is your question?</span>
              </div>
              {isOpen3 && (
                <div className={styles.dropdowncontent}>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Ipsam sint commodi esse sed mollitia minus quod laboriosam,
                    aliquid, distinctio placeat cumque, quis autem repellat cum
                    molestias. Quo corporis dolorem officia pariatur accusantium
                    deleniti accusamus ab asperiores aliquam! Sapiente, officiis
                    nobis!
                  </p>
                  {/* Add more content as needed */}
                </div>
              )}
            </div>
            <div className={styles.dropdowncontainer}>
              <div className={styles.dropdownheader} onClick={toggleDropdown4}>
                <span className={styles.plusicon}>+</span>
                <span className={styles.question}>What is your question?</span>
              </div>
              {isOpen4 && (
                <div className={styles.dropdowncontent}>
                  <p>This is the answer to the question.</p>
                  {/* Add more content as needed */}
                </div>
              )}
            </div>
            <div className={styles.dropdowncontainer}>
              <div className={styles.dropdownheader} onClick={toggleDropdown5}>
                <span className={styles.plusicon}>+</span>
                <span className={styles.question}>What is your question?</span>
              </div>
              {isOpen5 && (
                <div className={styles.dropdowncontent}>
                  <p>This is the answer to the question.</p>
                  {/* Add more content as needed */}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
 




      <Footer/>



    </div>
  );
};

export default Services;
