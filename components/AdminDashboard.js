import React from 'react'
import styles from './AdminDashboard.module.css'

const AdminDashboard = () => {
  return (
    <div>
<h1 className={styles.head} >Admin Dashboard</h1>
<button>IT Service Required Data</button>
<button>Contact Us Form Data</button>
<button>Job Applications</button>
    </div>
  )
}

export default AdminDashboard
