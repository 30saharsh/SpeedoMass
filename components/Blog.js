import React from 'react'
import styles from "./Blog.module.css"
import NavBar from './NavBar'
import Footer from './Footer'

const Blog = () => {
  return (
    <div>
    <NavBar/>
    <div className={styles.bpage1}>
        <h1>Blogs</h1>
      </div>

      <div className={styles.bpagemiddle}>

<div className={styles.bgmup}>
    <button>Category here</button>
    <button>Category here</button>
    <button>Category here</button>
    <button>Category here</button>
<div className={styles.search}>
    <input placeholder='Search here...' type="text" />
    <img src="/uisearch.png" alt="" />
</div>
</div>
<div className={styles.bgmdown}>
    <div className={styles.bgmdownleft}>
<h1 style={{color:"#071c54" , fontFamily:"Gilroy"}} >Popular Posts</h1>
    <div className={styles.main10card12}>
          <div className={styles.main10upper}>
            <button>Category here</button>
            <img src="/discuss.png" alt="" />
          </div>
          <h4 style={{color:"black"}} >Lorem Ipsum is simply dummy text Lorem Ipsum is simply...</h4>
          <div className={styles.profile}>
          <div className={styles.profiledata}>
            <img src="/user.png" alt="" />
            <p>By Admin</p>
          </div>
          <p style={{fontSize:"12px" , color:"orange"}} >Oct 25, 2023</p>
          </div>
        </div>
    </div>
    <div className={styles.bgmdownright}>
    <h1 style={{color:"#071c54" , fontFamily:"Gilroy"}} >Recent Post</h1>


    <div className={styles.main10card13}>
          <h4 style={{color:"black"}} >Lorem Ipsum is simply dummy text <br /> Lorem Ipsum is simply...</h4>
          <div className={styles.profile}>
          <div className={styles.profiledata}>
            <img src="/user.png" alt="" />
            <p>By Admin</p>
          </div>
          <p style={{fontSize:"12px" , color:"orange"}} >Oct 25, 2023</p>
          </div>
        </div>
        <div className={styles.main10card13}>
          <h4 style={{color:"black"}} >Lorem Ipsum is simply dummy text <br /> Lorem Ipsum is simply...</h4>
          <div className={styles.profile}>
          <div className={styles.profiledata}>
            <img src="/user.png" alt="" />
            <p>By Admin</p>
          </div>
          <p style={{fontSize:"12px" , color:"orange"}} >Oct 25, 2023</p>
          </div>
        </div>
        <div className={styles.main10card13}>
          <h4 style={{color:"black"}} >Lorem Ipsum is simply dummy text <br /> Lorem Ipsum is simply...</h4>
          <div className={styles.profile}>
          <div className={styles.profiledata}>
            <img src="/user.png" alt="" />
            <p>By Admin</p>
          </div>
          <p style={{fontSize:"12px" , color:"orange"}} >Oct 25, 2023</p>
          </div>
        </div>


    </div>
</div>
</div>

<div className={styles.bpage2}>

<div className={styles.main10}>
  <div className={styles.main10card1}>
    <div className={styles.main10upper}>
      <button>Category here</button>
      <img src="/discuss.png" alt="" />
    </div>
    <h4 style={{color:"black"}} >Lorem Ipsum is simply dummy text</h4>
    <div className={styles.profile}>
    <div className={styles.profiledata}>
      <img src="/user.png" alt="" />
      <p>By Admin</p>
    </div>
    <p style={{fontSize:"12px" , color:"orange"}} >Oct 25, 2023</p>
    </div>
  </div>
  <div className={styles.main10card1}>
    <div className={styles.main10upper}>
      <button>Category here</button>
      <img src="/twopoeplediscuss.png" alt="" />
    </div>
    <h4 style={{color:"black"}} >Lorem Ipsum is simply dummy text</h4>
    <div className={styles.profile}>
    <div className={styles.profiledata}>
      <img src="/user.png" alt="" />
      <p>By Admin</p>
    </div>
    <p style={{fontSize:"12px" , color:"orange"}} >Oct 25, 2023</p>
    </div>
  </div>
  <div className={styles.main10card1}>
    <div className={styles.main10upper}>
      <button>Category here</button>
      <img src="/managerdiscuss.png" alt="" />
    </div>
    <h4 style={{color:"black"}} >Lorem Ipsum is simply dummy text</h4>
    <div className={styles.profile}>
    <div className={styles.profiledata}>
      <img src="/user.png" alt="" />
      <p>By Admin</p>
    </div>
    <p style={{fontSize:"12px" , color:"orange"}} >Oct 25, 2023</p>
    </div>
  </div>
</div>
<div className={styles.main11}>
  <div className={styles.main10card1}>
    <div className={styles.main10upper}>
      <button>Category here</button>
      <img src="/discuss.png" alt="" />
    </div>
    <h4 style={{color:"black"}} >Lorem Ipsum is simply dummy text</h4>
    <div className={styles.profile}>
    <div className={styles.profiledata}>
      <img src="/user.png" alt="" />
      <p>By Admin</p>
    </div>
    <p style={{fontSize:"12px" , color:"orange"}} >Oct 25, 2023</p>
    </div>
  </div>
  <div className={styles.main10card1}>
    <div className={styles.main10upper}>
      <button>Category here</button>
      <img src="/twopoeplediscuss.png" alt="" />
    </div>
    <h4 style={{color:"black"}} >Lorem Ipsum is simply dummy text</h4>
    <div className={styles.profile}>
    <div className={styles.profiledata}>
      <img src="/user.png" alt="" />
      <p>By Admin</p>
    </div>
    <p style={{fontSize:"12px" , color:"orange"}} >Oct 25, 2023</p>
    </div>
  </div>
  <div className={styles.main10card1}>
    <div className={styles.main10upper}>
      <button>Category here</button>
      <img src="/managerdiscuss.png" alt="" />
    </div>
    <h4 style={{color:"black"}} >Lorem Ipsum is simply dummy text</h4>
    <div className={styles.profile}>
    <div className={styles.profiledata}>
      <img src="/user.png" alt="" />
      <p>By Admin</p>
    </div>
    <p style={{fontSize:"12px" , color:"orange"}} >Oct 25, 2023</p>
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
  )
}

export default Blog
