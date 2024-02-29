import React from 'react'
import styles from "./Job.module.css"
import NavBar from './NavBar'
import Footer from './Footer'

const Job = () => {
  return (
    <div>
<NavBar/>
<div className={styles.jobpage1}>
        <h1>Job application form</h1>
        <p>Please fill out the form below to submit your job application</p>
      </div>

      <div className={styles.jobpage2}>
        <div className={styles.jobpage2left}>
            <img src="/working.png" alt="" />
        </div>
        <div className={styles.jobpage2right}>
        <div className={styles.cpage2centerright}>
            <div className={styles.oneinp}>
              <input type="text" placeholder="First Name" />
              <input type="text" placeholder="Last Name" />
            </div>
            <div className={styles.twoinp}>
              <input type="email" placeholder="Email" />
              <input type="number" placeholder="Phone Number" />
            </div>
            <div className={styles.twoinp}>
              <input type="text" placeholder="Applied position" />
              <input type="text" placeholder="Preferred Interview Date" />
            </div>

            <div className={styles.fiveinp}>
              <h4 style={{color:"black"}}  >Cover Letter</h4>
              <input type="text" placeholder="Please do not exceed 200 words."/>
            </div>
            <div className={styles.sixinp}>
                <h5 style={{color:"black"}} >Upload Resume</h5>
                <div className={styles.drop}>
                    <input type="file" />
                    <p>Drag & Drop File Here</p>
                </div>
            </div>
            <button className={styles.formsm} >Submit</button>
          </div>

        </div>
      </div>

      
      <Footer/>
    </div>
  )
}

export default Job
