"use client";
import { useState  } from "react";
import styles from "./Join.module.css";
import NavBar from "./NavBar";
import Footer from "./Footer";
import { useRouter } from "next/navigation";

const Join = () => {
  const [Show, setShow] = useState(false);
  const router = useRouter();

  const DepartmentToggler = () => {
    setShow(!Show);
  };


  const jobOpenings = [
    {
      title: "Wordpress Developer",
      experience: "2 Years",
      deadline: "30 Dec, 2023",
    },
    {
        title: "JavaScript",
        experience: "2 Years",
        deadline: "30 Dec, 2023",
      },
      {
        title: "App Developer",
        experience: "2 Years",
        deadline: "30 Dec, 2023",
      },
      {
        title: "Node JS Developer",
        experience: "2 Years",
        deadline: "30 Dec, 2023",
      },
   
  ];

  const NavigateToggler = (title) =>{
    if(title === "Wordpress Developer"){
        router.push("/wd")
    }

  }

  return (
    <div>
      <NavBar />
      <div className={styles.jpage1}>
        <h1>Join Us</h1>
        <p>Any question or remarks? Just write us a message!</p>
      </div>

      <div className={styles.main7}>
        <div className={styles.main7left}>
          <h2>Benefits</h2>
          <h1>Why you Should Join Our Awesome Team</h1>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500sLorem Ipsum is simply dummy text of the printing
            and typesetting industry. Lorem Ipsum has been the industry's
            standard dummy text ever since the 1500s
          </p>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500sLorem Ipsum is simply dummy text of the printing
            and typesetting industry. Lorem Ipsum has been the industry's
            standard dummy text ever since the 1500s
          </p>
        </div>
        <div className={styles.main7right}>
          <div className={styles.main7rightup}>
            <div className={styles.mrubox1}>
              <img src="/tw.png" alt="" />
              <h2 style={{ marginBottom: "-7px" }}>Team Work</h2>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s
              </p>
            </div>
            <div className={styles.mrubox2}>
              <img src="/replay.png" alt="" />
              <h2 style={{ marginBottom: "-7px" }}>Secured Future</h2>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s
              </p>
            </div>
          </div>
          <div className={styles.main7rightdown}>
            <div className={styles.mrubox3}>
              <img src="/clg.png" alt="" />
              <h2 style={{ marginBottom: "-7px" }}>Learning Opportunity</h2>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s
              </p>
            </div>
            <div className={styles.mrubox4}>
              <img src="/graph.png" alt="" />
              <h2 style={{ marginBottom: "-7px" }}>Upgrade Skills</h2>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s
              </p>
            </div>
          </div>
        </div>
      </div>
            
      <div className={styles.jpage3}>
        <div className={styles.jpage3top}>
          <h2>Come Join Us</h2>
          <h1>Career Openings</h1>
          <p>
            We’re always looking for creative, talented self-starters to join
            the Speedomass <br />
            family. Check out our open roles below and fill out an application.
          </p>
        </div>
        <div className={styles.jpage3bottom}>
          <div className={styles.jpage3bottomleft}>
            <div className={styles.jcard}>
              <button>HT & Admin</button>
              <button onClick={DepartmentToggler}> Engineering (20)</button>
              <button>Support</button>
              <button>Design</button>
              <button>Digital Marketing</button>
            </div>
          </div>
          <div className={styles.jpage3bottomright}>
        {Show && 
         jobOpenings.map((job, index) => (
            <div className={styles.widecard} key={index}>
              <h4 style={{cursor:"pointer"}}   onClick={() => NavigateToggler(job.title)} >{job.title}</h4>
              <div className={styles.exp}>
                <h5>Experience</h5>
                <h4>{job.experience}</h4>
              </div>
              <div className={styles.dead}>
                <h5>Deadline</h5>
                <h4>{job.deadline}</h4>
              </div>
              <img src="/rightarrow.png" alt="" />
            </div>
          ))}
        
        
          </div>
        </div>
      </div>


      <Footer />
    </div>
  );
};

export default Join;
