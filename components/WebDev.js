"use client"
import {useState , useEffect} from 'react'
import styles from '../components/WebDev.module.css'
import NavBar from './NavBar'


const WebDev = () => {

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
        <div className={styles.wdpage1}>
            <div className={styles.wdpage1left}>
                <h3>Modern Web Development</h3>
                <h1>Innovations</h1>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                <button className={styles.dmoreweb} >Discover More</button>
            </div>
            <div className={styles.wdpage1right}>
                <img src="/opensource.png" alt="" />
            </div>
        </div>

        <div className={styles.wdpage2}>
<div className={styles.wdpage2left}>
    <img src="/style.png" alt="" />
</div>
<div className={styles.wdpage2right}>
    <h1>Partner with Us for Your Next Web<br />
Development Project</h1>
<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500sLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
</div>
</div> 

<div className={styles.wdpage3}>
            <div className={styles.numwh}>
               <div className={styles.number}>
                <img src="/bcircle.png" alt="" />
                <h2 style={{position:"absolute"}} >1</h2>
               </div>
                <h4>Fully Responsive</h4>
            </div>
            <div className={styles.numwh}>
               <div className={styles.number}>
                <img src="/rcircle.png" alt="" />
                <h2 style={{position:"absolute"}} >2</h2>
               </div>
                <h4>Device Testing</h4>
            </div>
            <div className={styles.numwh}>
               <div className={styles.number}>
                <img src="/bcircle.png" alt="" />
                <h2 style={{position:"absolute"}} >3</h2>
               </div>
                <h4>Clean & Modern</h4>
            </div>
            <div className={styles.numwh}>
               <div className={styles.number}>
                <img src="/ycircle.png" alt="" />
                <h2 style={{position:"absolute"}} >4</h2>
               </div>
                <h4>Great Experience</h4>
            </div>
        </div>

        <div className={styles.wdpage4}>
            <div className={styles.wdpage4center}>
                <h1 style={{marginTop:"-40px"}} >Challenges into Opportunities with
 Our Expertise</h1>
 <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500sLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s

Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500sLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500sLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
            </div>
        </div>


        <div className={styles.wdpage5}>
            <div className={styles.wdpage5top}>
                <h1 style={{color:"#11235d"}} >Our Web development Portfolio</h1>
            </div>
            <div className={styles.wdpage5middle}>
                <div className={styles.box1}></div>
                <div className={styles.box2}></div>
            </div>
            <div className={styles.wdpage5down}>
            <div  style={{marginTop:"-50px"}}  className={styles.box2}></div>
                <div style={{marginTop:"50px"}} className={styles.box1}></div>
            </div>
        </div>


        
        <div className={styles.wdpage6}>
    <div className={styles.wdpage6top}>
        <h1 className={styles.wdr} style={{color:"#11235d" , fontFamily:"Gilroy"}} >Web Development Reviews</h1>
    </div>
    <div className={styles.wdpage6down}>
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





    </div>
  )
}

export default WebDev


