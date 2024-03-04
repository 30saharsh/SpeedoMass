import React from 'react'
import styles from './Loader.module.css'

const Loader = () => {
  return (
    <div className={styles.loader} >
      <img src="/spinner.gif" alt="" />
    </div>
  )
}

export default Loader
