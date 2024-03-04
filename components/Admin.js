"use client"
import React from 'react'
import styles from './Admin.module.css'
import { useRouter } from 'next/navigation'

const Admin = () => {

  const router = useRouter();

  const LoginHandler = () =>{
router.push("/admin-login")
  }
  return (
    <div>
<div className={styles.main}>
    <div className={styles.center}>
        <form>
       <h3>Admin Email</h3>
       <input type="email" required placeholder='Enter Email' />
       <h3>Password</h3>
       <input type="password" required placeholder='Enter Password' />
        </form>
        <button onClick={LoginHandler} >Login</button>
    </div>
</div>
    </div>
  )
}

export default Admin
