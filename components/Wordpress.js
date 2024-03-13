"use client"
import React from 'react'
import styles from './Wordpress.module.css'
import NavBar from './NavBar'
import Footer from './Footer'
import Link from 'next/navigation'
import { useRouter } from 'next/navigation'

const Wordpress = () => {

const router = useRouter();



const JobHandler = () =>{
router.push("/job")
}



  return (
    <div>
        <NavBar/>
        <div className={styles.wdpage1}>
        <h1>WordPress Developer</h1>
      </div>


      <div className={styles.wdpage2}>
        <div className={styles.wdpage2center}>
            <img src="/bimage.png" alt="" />
        </div>
      </div>


      <div className={styles.wdpage3}>
        <div className={styles.wdpage3left}>
            <h1>WordPress Developer</h1>
            <div className={styles.data}>
                <h3 >Who Are We Looking For</h3>
                <ul>
                    <li>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </li>
                    <li>Nullam dictum ligula a gravida porta.</li>
                    <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. </li>
                    <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. </li>
                    <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. </li>
                    <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. </li>
                    <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. </li>
                    <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. </li>
                    <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. </li>
                </ul>
            </div>
            <div className={styles.data}>
                <h3 className={styles.last} >What You Will Be Doing</h3>
                <ul>
                    <li>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </li>
                    <li>Nullam dictum ligula a gravida porta.</li>
                    <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. </li>
                    <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. </li>
                    <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. </li>
                    <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. </li>
                    <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. </li>
                    <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. </li>
                    <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. </li>
                </ul>
            </div>
            <div className={styles.data}>
                <h3 style={{marginTop:"-110px"}}  >Bonus Points for Familiarity with</h3>
                <ul>
                    <li>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </li>
                    <li>Nullam dictum ligula a gravida porta.</li>
                    <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. </li>
                    <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. </li>
                    <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. </li>
        
                </ul>
            </div>
            <div className={styles.data}>
                <h3 className={styles.er} >Educational Requirement</h3>
             <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going</p>
            </div>
            <div className={styles.data}>
                <h3 style={{marginTop:"-112px"}}  >Salary</h3>
                <ul>
                    <li>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </li>
                    <li>Nullam dictum ligula a gravida porta.</li>

                </ul>
            </div>
            <div className={styles.data}>
                <h3>Working Hours</h3>
                <ul>
                    <li>
                    8 AM – 5 PM
                    </li>

                </ul>
            </div>
            <div className={styles.data}>
                <h3 style={{marginTop:"-142px"}}  >Working Days</h3>
                <ul>
                    <li>
                    Weekly: 5 days.
                    </li>
                    <li>
                    Weekend: Friday.Saturday
                    </li>

                </ul>
            </div>
            <div className={styles.data}>
                <h3>Perks & Benefits You’ll Get </h3>
                <ul>
                    <li>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </li>
                    <li>Nullam dictum ligula a gravida porta.</li>
                    <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. </li>
                    <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. </li>
                    <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. </li>

                </ul>
            </div>
      {/* <div className={styles.line}></div> */}
            <div className={styles.data}>
                <h3 className={styles.tap} >The Application Process </h3>
                <ul>
                    <li>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </li>
                    <li>Nullam dictum ligula a gravida porta.</li>
                    <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. </li>
                    <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. </li>
                    <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. </li>

                </ul>
            </div>
            <div className={styles.data}>
                <h3 style={{marginTop:"-112px"}} >The Application Process </h3>
             <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going</p>

     </div>
     <button className={styles.apn} onClick={JobHandler} >Apply Now</button>       
            

        </div>
        <div className={styles.wdpage3right}>
        <h2 style={{marginTop:"30px"}} >Job Summary</h2>
        <div className={styles.know}>
            <img src="/location.png" alt="" />
            <div className={styles.knowmore}>
                <h4 className={styles.ohf} >Location</h4>
                <h4 className={styles.thf} >Shouth Breeze Center,Bananill</h4>
            </div>
        </div>
        <div className={styles.know}>
            <img src="/sc.png" alt="" />
            <div className={styles.knowmore}>
                <h4 className={styles.ohf} >Job Type</h4>
                <h4 className={styles.thf} >Full Time</h4>
            </div>
        </div>
        <div className={styles.know}>
            <img src="/calendar.png" alt="" />
            <div className={styles.knowmore}>
                <h4 className={styles.ohf} >Date posted</h4>
                <h4 className={styles.thf} >posted 1 month ago</h4>
            </div>
        </div>
        <div className={styles.know}>
            <img src="/ob.png" alt="" />
            <div className={styles.knowmore}>
                <h4 className={styles.ohf} >Experience</h4>
                <h4 className={styles.thf} >Experience: 1-3 year</h4>
            </div>
        </div>
        <div className={styles.know}>
            <img src="/time.png" alt="" />
            <div className={styles.knowmore}>
                <h4 className={styles.ohf} >Working Hours</h4>
                <h4 className={styles.thf} >9 AM - 6 PM</h4>
            </div>
        </div>
        <div className={styles.know}>
            <img src="/ph.png" alt="" />
            <div className={styles.knowmore}>
                <h4 className={styles.ohf} >Working Days</h4>
                <h4 className={styles.thf} >Weekly : 5 days<br />Weekend : Saturday , Sunday</h4>
            </div>
        </div>
        <div className={styles.know}>
            <img src="/chair.png" alt="" />
            <div className={styles.knowmore}>
                <h4 className={styles.ohf} >Vacancy</h4>
                <h4 className={styles.thf} >No. of Vacancy : 3</h4>
            </div>
        </div>

        <a href=""  className={styles.beecha} >View all job</a>
        <h4 className={styles.beechh}  >Share this:</h4>
      

      <div className={styles.icons}>

            <a href="">  <img src="/fb.png" alt="" /></a>
             <a href=""> <img src="/insta.png" alt="" /></a>
             <a href=""> <img src="/li.png" alt="" /> </a>
              <a href="">  <img src="twitter.png" alt="" /></a>
              </div>
        </div>
      </div>



      <Footer/>
    </div>
  )
}

export default Wordpress
