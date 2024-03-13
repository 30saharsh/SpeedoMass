"use client"
import {useState , useEffect } from 'react'
import styles from '../components/AppDev.module.css'
import NavBar from './NavBar'
import Footer from './Footer'
const AppDev = () => {


    const [currentIndex, setCurrentIndex] = useState(0);


    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex < cards.length - 1 ? prevIndex + 1 : 0));
      };

    useEffect(() => {
        const intervalId = setInterval(() => {
          nextSlide();
        }, 2500);
    
        return () => {
          clearInterval(intervalId);
        };
      }, [currentIndex]);
  
    const cards = [
        {
          title: 'Got my android and iOS application…',
          content: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s',
        },
        {
          title: 'Got my android and iOS application…',
          content: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s',
        },
        {
            title: 'Got my android and iOS application…',
            content: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s',
          },
      ];


  return (
    <div>
        <NavBar/>
<div className={styles.adpage1}>

<div className={styles.page1left}>
    <h3>Master App Development With Us</h3>
    <h1>Get Started Today!</h1>
    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
    <button className={styles.dmappdevpage} >Discover More</button>
</div>
<div className={styles.page1right}>
    <img className={styles.iphone1}  src="/phonepre.png" alt="" />
    <img className={styles.iphone2} src="/iphproone.png" alt="" />
</div>
</div>

<div className={styles.adpage2}>
    <div className={styles.page2top}>
        <h1>We Provide Various Kind Of Services For You</h1>
    </div>
    <div className={styles.page2bottom}>
        <div className={styles.appcard}>
            <img src="/twoppl.png" alt="" />
            <h3>Unique App Ui</h3>
            <p>Keep things looking sleek and modern with a unique and intuitive app UI.</p>
        </div>
        <div className={styles.appcard}>
            <img style={{width:"75px" , height:"90px"}} src="/coder.png" alt="" />
            <h3>Exclient <b>Dashboard</b></h3>
            <p>Keep things looking sleek and modern with a unique and intuitive app UI.</p>
        </div>
        <div className={styles.appcard}>
            <img  style={{width:"75px" , height:"90px"}} src="/teacher.png" alt="" />
            <h3>By <b>Construction</b></h3>
            <p>Keep things looking sleek and modern with a unique and intuitive app UI.</p>
        </div>
    </div>
</div>


<div className={styles.adpage3}>
    <div className={styles.adthreeleft}>
        <h1 style={{color:"#071c54"}} >We Built The App That <br />Everyone Love</h1>
        <p  >Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500sLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
        <p  >Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
        <button className={styles.appdevem} >Explore More</button>
    </div>
    <div className={styles.adthreeright}>
        <img src="/grouppic.png" alt="" />
    </div>
</div>

<div className={styles.adpage4}>
    <h1 style={{marginLeft:"11vw" ,  color:"#11235d"}} className={styles.success} >Successful & Counting</h1>
    <p style={{marginLeft:"11vw" , marginTop:"-10px" }}  className={styles.experience} >Experience the power of success! Our platform has been used and endorsed by hundreds of satisfied users.</p>
    <div className={styles.adpage4down}>
<div className={styles.adpage4downcard}>
    <img src="/check.png" alt="" />
    <div className={styles.cardinfoadpf}>
        <h1 style={{marginBottom:"-10px"} } >100+</h1>
        <p>Project Complete</p>
    </div>
</div>
<div className={styles.adpage4downcard}>
    <img src="/build.png" alt="" />
    <div className={styles.cardinfoadpf}>
        <h1 style={{marginBottom:"-10px"} } >100+</h1>
        <p>Active Project</p>
    </div>
</div>
<div className={styles.adpage4downcard}>
    <img src="/smile.png" alt="" />
    <div className={styles.cardinfoadpf}>
        <h1 style={{marginBottom:"-10px"} } >150+</h1>
        <p>Client Satisfied</p>
    </div>
</div>
<div className={styles.adpage4downcard}>
    <img src="/earth.png" alt="" />
    <div className={styles.cardinfoadpf}>
        <h1 style={{marginBottom:"-10px"} } >50+</h1>
        <p>Country Available</p>
    </div>
</div>

    </div>
</div>


<div className={styles.adpage5}>
    <div className={styles.extremeleft}>
        <img src="/trap.png" alt="" />
    </div>
    <div className={styles.extremecenter}>
        <img src="/p1.png" alt="" />
        <img src="/p2.png" alt="" />
        <img src="/p3.png" alt="" />
    </div>
    <div className={styles.extremeright}>
        <img src="/trapr.png" alt="" />
    </div>
</div>


<div className={styles.adpage6}>
    <div className={styles.adpage6top}>
        <h1 style={{color:"#11235d" , fontFamily:"Gilroy" , marginLeft:'11vw'}} >Mobile App Reviews</h1>
    </div>
    <div className={styles.adpage6down}>
        <div className={styles.slidecard}>
        <div className={styles.slidercontainer}>
      <div className={styles.slider}>
      <div className={styles.cards} style={{ transform: `translateX(-${currentIndex * 30}%)` }}>
          {cards.map((card, index) => (
            <div key={index} className={styles.card}>
                <div className={styles.topinfo}>
                    <img src="/fivestar.png" alt="" />
                    <p>Jun 25,2023</p>
                </div>
              <h4>{card.title}</h4>
              <p>{card.content}</p>
              <div className={styles.bottominfo}>
                <p><b>Date of experience : </b>June 14, 2023</p>
              </div>
            </div>
          ))}
        </div>
      </div>   
    </div>
        </div>
    </div>
</div>


<Footer/>
    </div>
  )
}

export default AppDev
