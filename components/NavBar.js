"use client";
import { useState , useEffect } from "react";
import styles from "../components/NavBar.module.css";
import Link from "next/link";
import { useRouter } from "next/navigation";
import JoinUsPopup from "./JoinUsPopup";
import Loader from "./Loader";

const NavBar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const toggleMenu = () => {
    setShowMenu(!showMenu);
    console.log(showMenu)
  };

  const JoinButton = () =>{
    togglePopup();
// router.push("/joinus")
  }
  const togglePopup = () => {
    setShowPopup(!showPopup);
  };

  const handleRoleSelection = (role) => {
    // Handle the role selection (e.g., navigate to a specific page)
    console.log(`Selected role: ${role}`);

    if(role === "employee"){
      router.push("/job")
    }
    else if (role === "investor"){
      router.push("/investor")
    }
  };
const AboutHandler = ()=>{
  setLoading(true);
}
const ServiceHandler = ()=>{
  setLoading(true)
}
const CSHandler = ()=>{
  setLoading(true)
}
const ContactHandler = ()=>{
  setLoading(true)
}
const PortfolioHandler = () =>{
  setLoading(true)
}

  return (
    <div>
      <div className={styles.nav}>
      <button className={styles.hmbutton} onClick={toggleMenu}>
          <div className={styles.hamburgericon}>
            <span className={styles.line}></span>
            <span className={styles.line}></span>
            <span className={styles.line}></span>
          </div>
        </button>
        <img src="/smlogo.png" alt="" />
        <div className={styles.middle}>
          <Link href="/">Home</Link>
          <Link onClick={AboutHandler} href="/about">About Us</Link>
          <Link  onClick={ServiceHandler} href="/services">Services</Link>
          <Link onClick={CSHandler} href="">Case Studies</Link>
          <Link onClick={PortfolioHandler}  href="">Portfolio</Link>
          <Link onClick={ContactHandler} href="/contact">Contact Us</Link>
        </div>
        <button className={styles.join} onClick={JoinButton} >Join Us</button>
  
      </div>
   {showMenu &&  <div className={styles.menu}>
         <Link href="/">Home</Link>
          <Link href="/about">About Us</Link>
          <Link href="/services">Services</Link>
          <Link href="">Case Studies</Link>
          <Link href="">Portfolio</Link>
          <Link href="/contact">Contact Us</Link>
          <Link href="/joinus" >Join Us</Link>
         </div>}
         {showPopup && (
        <JoinUsPopup onClose={togglePopup} onSelectRole={handleRoleSelection} />
      )}
      {loading && <Loader/>}
    </div>
  );
};

export default NavBar;
