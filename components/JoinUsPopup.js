import React from 'react'
import styles from "./JoinUsPopup.module.css"; 

const JoinUsPopup = ({ onClose, onSelectRole }) => {

  
  return (
    <div className={styles.overlay}>
    <div className={styles.popup}>
      <h2>Join Us</h2>
      <p>Select your role:</p>
      <div className={styles.buttons}>
        <button onClick={() => onSelectRole("investor")}>As Investor</button>
        <button onClick={() => onSelectRole("employee")}>As Employee</button>
      </div>
      <button className={styles.cb} onClick={onClose}>Close</button>
    </div>
  </div>
  )
}

export default JoinUsPopup
