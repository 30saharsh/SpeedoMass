"use client";
import { useState } from "react";
import styles from "../components/NavBar.module.css";
import Link from "next/link";
import { useRouter } from "next/navigation";

const NavBar = () => {
  const [showMenu, setShowMenu] = useState(false);

  const router = useRouter();
  const toggleMenu = () => {
    setShowMenu(!showMenu);
    console.log(showMenu)
  };

  const JoinButton = () =>{
router.push("/joinus")
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
          <Link href="/about">About Us</Link>
          <Link href="/services">Services</Link>
          <Link href="">Case Studies</Link>
          <Link href="">Investor</Link>
          <Link href="/contact">Contact Us</Link>
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
    </div>
  );
};

export default NavBar;
