"use client";
import React from "react";
import { useState } from "react";
import styles from "./Home.module.css";
import Footer from "./Footer";
import axios from "axios";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Loader from "./Loader";
const Home = () => {
  
  const server = process.env.NEXT_PUBLIC_API_URL;
  console.log("This is Server",server)
  const clientReviews = [
    {
      text: "Got my android and iOS application designed by the Speedomass, it was delivered earlier than I expected. I’ll definitely work with them again in the future for my app management and updates",
      author: "Brandon Farris",
      location: "Berlin",
    },
    {
      text: "I Love Working at SpeedoMass Communication Pvt Ltd , excellent work culture 🔥😎.",
      author: "Saharsh",
      location: "Ahmedabad",
    },
    {
      text: "It was very pleasure working with SpeedoMass.",
      author: "Siddhant Choudhery",
      location: "Ahmedabad",
    },
    {
      text: "SpeedoMass has good IT Services",
      author: "Hani Mewada",
      location: "Mehsana",
    },

  ];

  const [selectedCategory, setSelectedCategory] = useState(null);

  const [currentReviewIndex, setCurrentReviewIndex] = useState(0);

  const [Name, setName] = useState("");
  const [country, setcountry] = useState("");
  const [Email, setEmail] = useState("");
  const [Phone, setPhone] = useState("");
  const [Service, setService] = useState("");
  const [message, setmessage] = useState("");
  const [loading, setLoading] = useState(false);

  const handleArrowClick = (direction) => {
    if (direction === "next") {
      console.log("Saharsh Shrivasatava Next");
      setCurrentReviewIndex((prevIndex) =>
        prevIndex === clientReviews.length - 1 ? 0 : prevIndex + 1
      );
    } else if (direction === "prev") {
      console.log("Saharsh Shrivasatava Previous");
      setCurrentReviewIndex((prevIndex) =>
        prevIndex === 0 ? clientReviews.length - 1 : prevIndex - 1
      );
    }
  };

  const handleButtonClick = (category) => {
    setSelectedCategory(category);
  };

  const NameHandler = (e) => {
    setName(e.target.value);
    console.log("This is Name", Name);
  };

  const CountryHandler = (e) => {
    setcountry(e.target.value);
  };

  const EmailHandler = (e) => {
    setEmail(e.target.value);
  };

  const NumberHandler = (e) => {
    setPhone(e.target.value);
  };
  const ServiceHandler = (e) => {
    setService(e.target.value);
  };
  const RequirementsHandler = (e) => {
    setmessage(e.target.value);
    console.log(message);
  };
  const SubmitHandler = async (e) => {
    e.preventDefault();

    setLoading(true);
    try {
      const formData = {
        name: Name,
        country: country,
        email: Email,
        phone: Phone,
        serviceRequired: Service,
        message: message,
      };
      const response = await axios.post(
        `${server}homedata`,
        formData
      );

      console.log(response.data);

      // alert("")
      if (response.data) {
        toast.success("Form Submitted Successfully 😎");
      }
    } catch (error) {
      // alert("")
      toast.error("Error Submitting Form 😪 ");
      console.log(error);
    }
    finally {
      setLoading(false); // Hide loader when the request is completed
    }
    console.log("Form Submitted");
  };

  return (
    
    <div>
     
      <div className={styles.main}>
          <ToastContainer />
        <div className={styles.left}>
          <h2 className={styles.weBuilt}>We Build Teams That Build</h2>
          <h1 className={styles.your}>YOUR SOFTWARE</h1>
          <p className={styles.homepara}>
            Welcome to SpeedoMass, Your Gateway to Innovation! At SpeedoMass, we
            are not just a software agency we are the architects of
            technological transformations and the maestros of unforgettable
            events. We pride ourselves on being a dynamic and innovative
            company, dedicated to pushing the boundaries of IT development and
            event management.
          </p>
          <button className={styles.discover}>Discover More</button>
        </div>
        <div className={styles.right}>
          <div className={styles.rmain}>
            <form className={styles.form1} onSubmit={SubmitHandler}>
              <input
                type="text"
                onChange={NameHandler}
                value={Name}
                placeholder="Enter Your Name"
              />
              <input
                type="text"
                onChange={CountryHandler}
                value={country}
                placeholder="Country Of Residence"
              />
              <div className={styles.middle}>
                <input
                  onChange={EmailHandler}
                  value={Email}
                  type="email"
                  placeholder="Email"
                />
                <input
                  onChange={NumberHandler}
                  value={Phone}
                  type="number"
                  placeholder="Phone"
                />
              </div>
              <input
                type="text"
                onChange={ServiceHandler}
                value={Service}
                placeholder="Service Required"
              />
              <h2 className={styles.req}>Type Your Requirements Here...</h2>
              <input
                onChange={RequirementsHandler}
                value={message}
                type="text"
              />
              <button className={styles.request}>REQUEST A QUOTE</button>
            </form>
          </div>
        </div>
      </div>

      <div className={styles.main2}>
        <div className={styles.main2left}>
          <h2 className={styles.aoc}>About Our Company</h2>
          <h1 className={styles.stay}>
            Stay Up Stay Running Stay
            <br />
            Protected
          </h1>
          <p className={styles.home2para}>
            At SpeedoMass, we go beyond coding; we sculpt digital stories and
            curate exceptional events. As a dynamic software agency, we blend
            creativity, technology, and meticulous event management to redefine
            excellence.
          </p>
          <div className={styles.awards}>
            <div className={styles.aw}>
              <img src="/award.png" alt="" />
              <h3 style={{ fontWeight: "500" }}>Award Winning</h3>
            </div>
            <div className={styles.tf}>
              <img src="/twentyfour.png" alt="" />
              <h3 style={{ fontWeight: "500" }}>24/7 Support</h3>
            </div>
          </div>
          <div className={styles.prof}>
            <div className={styles.ps}>
              <img src="/sword.png" alt="" />
              <h3 style={{ fontWeight: "500" }}>Professional Staff</h3>
            </div>
            <div className={styles.fp}>
              <img src="/dollar.png" alt="" />
              <h3 style={{ fontWeight: "500" }}>Fair Prices</h3>
            </div>
          </div>
          <button className={styles.sap}>Start A Project</button>
        </div>
        <div className={styles.main2right}>
          <img className={styles.officemark} src="/officemark.png" alt="" />
          <img className={styles.office} src="/office.png" alt="" />
        </div>
      </div>

      <div className={styles.main3}>
        <div className={styles.main3top}>
          <div className={styles.ek}>
            <img className={styles.leaf} src="/leaf.png" alt="" />
            <div className={styles.ekinfo}>
              <h1 style={{ marginBottom: "-15px" }}>2013</h1>
              <p>Founded Years</p>
            </div>
          </div>
          <div className={styles.line}></div>
          <div className={styles.ek}>
            <img className={styles.leaf} src="/materailgroup.png" alt="" />
            <div className={styles.ekinfo}>
              <h1 style={{ marginBottom: "-15px" }}>50+</h1>
              <p>Team Member</p>
            </div>
          </div>
          <div className={styles.line}></div>
          <div className={styles.ek}>
            <img className={styles.leaf} src="/contact.png" alt="" />
            <div className={styles.ekinfo}>
              <h1 style={{ marginBottom: "-15px" }}>550+</h1>
              <p>Happy Customers</p>
            </div>
          </div>
          <div className={styles.line}></div>
          <div className={styles.ek}>
            <img className={styles.leaf} src="/gridone.png" alt="" />
            <div className={styles.ekinfo}>
              <h1 style={{ marginBottom: "-15px" }}>500+</h1>
              <p>Successful Projects</p>
            </div>
          </div>
        </div>
        <h1
          style={{ fontFamily: "Gilroy", color: "#11235d", marginLeft: "11vw" }}
        >
          Case Studies Our Featured Projects
        </h1>
        <div className={styles.main3middle}>
          <div className={styles.m3mleft}>
            <button
              onClick={() => handleButtonClick("Mobile Apps")}
              className={styles.other}
            >
              Mobile Apps
            </button>
            <button
              onClick={() => handleButtonClick("Website")}
              className={styles.other}
            >
              Web Development
            </button>
            <button
              onClick={() => handleButtonClick("Dashboard Design")}
              className={styles.other}
            >
              Dashboard Designs
            </button>
            <button
              onClick={() => handleButtonClick("Artifical Intelligence")}
              className={styles.other}
            >
              Artificial Intelligence
            </button>
            <button
              onClick={() => handleButtonClick("Blockchain Development")}
              className={styles.other}
            >
              Blockchain Development
            </button>
          </div>
          <div className={styles.m3mright}>
            <div className={styles.hereleft}>
              <h1 className={styles.hereleftheading}>{selectedCategory}</h1>
              <p className={styles.hereleftpara}>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it
              </p>
              <button className={styles.rm}>Read More</button>
            </div>
            <div className={styles.hereright}>
              <img className={styles.phones} src="/phones.png" alt="" />
            </div>
          </div>
        </div>
      </div>

      <h1
        className={styles.serv}
        style={{
          fontFamily: "Gilroy",
          color: "#11235d",
          marginLeft: "11vw",
          marginBottom: "-2vw",
          marginTop: "5vw",
        }}
      >
        Services
      </h1>

      <div className={styles.main4}>
      <div className={styles.mruboxw}>
        <div className={styles.mruboxwup}>

        <div className={styles.mruboxwcircle}> <img src="/phonelogo.png" alt="" /></div>
        <div className={styles.mruboxwhead}>
          <p>Mobile App  <br /> <b>Development</b> </p>
        </div>
        </div>
        
            
              <p>
              Crafting seamless experiences that reside in your
users' pockets. Our mobile app development team
breathes life into your ideas, ensuring user-friendly
interfaces and cutting-edge functionality. Elevate
your brand with apps that captivate and convert.
              </p>
            </div>
            <div className={styles.mruboxw1}>
        <div className={styles.mruboxwup1}>

        <div className={styles.mruboxwcircle1}> <img src="/vectorw.png" alt="" /></div>
        <div className={styles.mruboxwhead1}>
          <p>Website  <br /> <b>Development</b> </p>
        </div>
        </div>
        
            
              <p>
              In the digital landscape, we guide your brand to new heights. Tailored strategies amplify your voice, engage your audience, and drive conversions. From SEO to PPC campaigns, we boost your online visibilit
              </p>
            </div>
            <div className={styles.mruboxw2}>
        <div className={styles.mruboxwup2}>

        <div className={styles.mruboxwcircle2}> <img src="/vectorspeaker.png" alt="" /></div>
        <div className={styles.mruboxwhead2}>
          <p>Digital<br /> <b>Marketing</b> </p>
        </div>
        </div>
        
            
              <p>
              Crafting seamless experiences that reside in your
users' pockets. Our mobile app development team
breathes life into your ideas, ensuring user-friendly
interfaces and cutting-edge functionality. Elevate
your brand with apps that captivate and convert.
              </p>
            </div>
          
      </div>

      <div className={styles.main5}>
        <div className={styles.fivecenter}>
          <div className={styles.fivecenterleft}>
            <h1>
              Unleash Innovation: Let's Build
              <br />
              Together !
            </h1>
            <p>
              Welcome to the dynamic realm of SpeedoMass, where innovation is
              not just a goal but a way of life. At SpeedoMass, we extend a
              heartfelt invitation to embark on an exhilarating journey of
              creativity and collaboration. Together, let's build something
              truly remarkable. Our passion lies in transforming your visionary
              ideas into tangible realities, be it groundbreaking mobile apps,
              dynamic websites, or a revolutionized digital presence.
            </p>
            <p>
              Through collaborative excellence, our team of skilled
              professionals, each an expert in their field, forms a synergy that
              transforms concepts into tangible solutions, pushing the
              boundaries of what's possible.
            </p>
          </div>
          <div className={styles.fivecenterright}>
            <img src="/fiveImage.png" alt="" />
          </div>
        </div>
      </div>

      <div className={styles.main6}>
        <h1
          className={styles.main6h}
          style={{ fontFamily: "Gilroy", color: "#11235d" }}
        >
          Let's Build Long-Lasting Software Together
        </h1>
        <div className={styles.main6center}>
          <div className={styles.flutter}>
            <img src="/flutter.png" alt="" />
            <h3 style={{ color: "#11235d" }}>FLUTTER</h3>
          </div>
          <div className={styles.react}>
            <img src="/react.png" alt="" />
            <h3 style={{ color: "#11235d" }}>REACT.JS</h3>
          </div>
          <div className={styles.python}>
            <img src="/python.png" alt="" />
            <h3 style={{ color: "#11235d" }}>PYTHON</h3>
          </div>
          <div className={styles.jango}>
            <img src="/jango.png" alt="" />
            <h3 style={{ color: "#11235d" }}>DJANGO</h3>
          </div>
          <div className={styles.angular}>
            <img src="/angular.png" alt="" />
            <h3 style={{ color: "#11235d" }}>ANGULAR</h3>
          </div>
        </div>
      </div>

      <div className={styles.main7}>
        <div className={styles.main7left}>
          <h2>What We Do</h2>
          <h1>
            Perfect Solution For Your
            <br />
            Bussiness
          </h1>
          <p>
            our commitment to excellence extends to providing perfect solutions
            tailored for your business needs. We specialize in a spectrum of
            services designed to elevate your brand and streamline your
            operations. From innovative mobile app development and captivating
            web design to strategic digital marketing, we deliver comprehensive
            solutions that are finely tuned to perfection.
          </p>
          <button className={styles.sap1}>Start A Project</button>
        </div>
        <div className={styles.main7right}>
          <div className={styles.main7rightup}>
            <div className={styles.mrubox1}>
              <img src="/carbon.png" alt="" />
              <h2 style={{ marginBottom: "-7px" }}>Saas</h2>
              <p>
                Unlock operational efficiency with SpeedoMass's innovative
                Software as a Service (SaaS) solutions. Tailored to your needs,
                our SaaS offerings streamline processes and provide scalable
                solutions.
              </p>
            </div>
            <div className={styles.mrubox2}>
              <img src="/nimbus.png" alt="" />
              <h2 style={{ marginBottom: "-7px" }}>Marketing</h2>
              <p>
                Amplify your brand presence with SpeedoMass's strategic
                marketing expertise. From comprehensive digital strategies to
                targeted campaigns, we ensure your brand reaches & reso-nates
                with your audience effectively.
              </p>
            </div>
          </div>
          <div className={styles.main7rightdown}>
            <div className={styles.mrubox3}>
              <img src="/tech.png" alt="" />
              <h2 style={{ marginBottom: "-7px" }}>Technology</h2>
              <p>
                Stay ahead in the digital landscape with SpeedoMass's
                cutting-edge technology solutions. Our services embrace the
                latest trends & overall performance for your business.
              </p>
            </div>
            <div className={styles.mrubox4}>
              <img src="/scale.png" alt="" />
              <h2 style={{ marginBottom: "-7px" }}>Designing</h2>
              <p>
                Make a lasting impression with SpeedoMass's creative designing
                services. Our team combines artistic flair with user-centric
                design principles, crafting visually stunning solutions
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.main8}>
        <h1 style={{ color: "#11235d" }}>Why Choose Us</h1>
        <p>
          Choosing SpeedoMass means choosing excellence. Our innovative
          solutions go beyond expectations, keeping your business ahead in the
          digital landscape. With a collaborative approach, we prioritize your
          vision, working closely to understand and deliver tailored solutions.
          Our team of experts ensures proven expertise in every domain,
          translating into unparalleled results. From boosting online visibility
          to creating user-centric designs, our strategies are results-driven.
          At SpeedoMass, customer satisfaction is at the core – your trust and
          needs are our priority. Choose SpeedoMass for a partnership that
          merges innovation, collaboration, expertise, and tangible results,
          propelling your business to new heights.
        </p>
      </div>

      <div className={styles.main9}>
        <div className={styles.main9center}>
          <div className={styles.main9left}>
            <img src="/video.png" alt="" />
          </div>
          <div className={styles.main9right}>
            <h2>Join Our</h2>
            <h1>Community As An Investor</h1>
            <p>
              Embark on a journey of shared success by becoming part of our
              investor community. At Speedomass, we extend a warm invitation to
              individuals eager to contribute to and benefit from the growth and
              innovation we're cultivating. As an investor, you join a dynamic
              community where your insights and support play a pivotal role in
              shaping the future. Let's build success together – join our
              community and be a key player in our exciting ventures.
            </p>
            <button className={styles.gst}>Get Started</button>
          </div>
        </div>
      </div>

      <h1
        className={styles.variety}
        style={{ fontFamily: "Gilroy", color: "#11235d" }}
      >
        Variety Of Articles And Posts
      </h1>
      <div className={styles.main10}>
        <div className={styles.main10card1}>
          <div className={styles.main10upper}>
            <button>Category here</button>
            <img src="/discuss.png" alt="" />
          </div>
          <h4 style={{ color: "black" }}>Lorem Ipsum is simply dummy text</h4>
          <div className={styles.profile}>
            <div className={styles.profiledata}>
              <img src="/user.png" alt="" />
              <p>By Admin</p>
            </div>
            <p style={{ fontSize: "12px", color: "orange" }}>Oct 25, 2023</p>
          </div>
        </div>
        <div className={styles.main10card1}>
          <div className={styles.main10upper}>
            <button>Category here</button>
            <img src="/twopoeplediscuss.png" alt="" />
          </div>
          <h4 style={{ color: "black" }}>Lorem Ipsum is simply dummy text</h4>
          <div className={styles.profile}>
            <div className={styles.profiledata}>
              <img src="/user.png" alt="" />
              <p>By Admin</p>
            </div>
            <p style={{ fontSize: "12px", color: "orange" }}>Oct 25, 2023</p>
          </div>
        </div>
        <div className={styles.main10card1}>
          <div className={styles.main10upper}>
            <button>Category here</button>
            <img src="/managerdiscuss.png" alt="" />
          </div>
          <h4 style={{ color: "black" }}>Lorem Ipsum is simply dummy text</h4>
          <div className={styles.profile}>
            <div className={styles.profiledata}>
              <img src="/user.png" alt="" />
              <p>By Admin</p>
            </div>
            <p style={{ fontSize: "12px", color: "orange" }}>Oct 25, 2023</p>
          </div>
        </div>
      </div>

      <div className={styles.main11}>
        <button>See More</button>
      </div>

      <div className={styles.main12}>
        <div className={styles.main12left}>
          <img src="/planetgroup.png" alt="" />
        </div>
        <div className={styles.main12right}>
          <h3>Our Client Feedback</h3>
          <h1>
            We Are Happy To Say Our
            <br />
            Client Review
          </h1>
          <p>
            Discover the joy in our client reviews. Short, sweet, and straight
            from the source - our clients share their happiness with Speedomass
          </p>
          <div className={styles.clientdetail}>
            <img src="/text.png" alt="" />
            <p> {clientReviews[currentReviewIndex].text}</p>
            <div className={styles.clientdetailbelow}>
              <div className={styles.clientdetailbelowleft}>
                <img src="/dp.png" alt="" />
                <h3
                  style={{
                    color: "black",
                    marginBottom: "13px",
                    fontWeight: "900",
                    width: "fit-content",
                  }}
                >
                  {clientReviews[currentReviewIndex].author}
                  <br />
                  <span style={{ fontWeight: "500" }}>
                    {clientReviews[currentReviewIndex].location}
                  </span>
                </h3>
              </div>
              <div className={styles.clientdetailbelowright}>
                <img src="/fivestar.png" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.scroller}>
        <div className={styles.arrow}>
          <img
            src="/back.png"
            alt="left"
            onClick={() => handleArrowClick("prev")}
          />
          <img
            src="/forward.png"
            alt="right"
            onClick={() => handleArrowClick("next")}
          />
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Home;
