"use client"
import {useState} from 'react'
import styles from './AdminDashboard.module.css'
import axios from 'axios'

const AdminDashboard = () => {

  const [data, setData] = useState([]);
  const [Contcatdata, setContcatdata] = useState([]);
  const [JobApplications, setJobApplications] = useState([]);

const HomePageDataFetch = async () =>{
const response = await axios.get("http://localhost:8080/viewhomedata")
setData(response.data.ITServiceData || []);
console.log("Home Page Data",response.data.ITServiceData)
}
const ContactUsDataFetch = async () =>{
  const response = await axios.get("http://localhost:8080/viewcontactdata")
setContcatdata(response.data.ContactUsData || []);
console.log("Contact Page Data",response.data.ContactUsData)
}
const JobApplicationsFetch = async () =>{
  const response = await axios.get("http://localhost:8080/viewjobdata")
setJobApplications(response.data.JobApplications || []);
console.log("Contact Page Data",response.data.JobApplications)
}
const ShowPdf = (pdf) =>{
  console.log(pdf)
window.open(`http://localhost:8080/files/${pdf}` , "_blank" , "noreferrer")
}
  return (
    <div>
<div className={styles.center}>
<button onClick={HomePageDataFetch} >IT Service Required Data</button>
<button onClick={ContactUsDataFetch} >Contact Us Form Data</button>
<button onClick={JobApplicationsFetch} >Job Applications</button>
</div>
<div className={styles.down}>
{data.map((item) => (
          <div key={item._id} className={styles.card}>
            <h1>IT Service Required Data</h1>
            <h3>Name: {item.name}</h3>
            <p>Country: {item.country}</p>
            <p>Email: {item.email}</p>
            <p>Phone: {item.phone}</p>
            {/* Add more fields as needed */}
          </div>
        ))}
        {Contcatdata.map((item) => (
          <div key={item._id} className={styles.card}>
            <h1>Contact Us Form Data</h1>
            <h3>First Name: {item.fullname}</h3>
            <h3>Last Name: {item.lastname}</h3>
            <p>Country: {item.country}</p>
            <p>Email: {item.email}</p>
            <p>Phone: {item.phone}</p>
            <p>Subject: {item.subject}</p>
            <p>Message: {item.message}</p>

            {/* Add more fields as needed */}
          </div>
        ))}
           {JobApplications.map((item) => (
          <div key={item._id} className={styles.card}>
            <h1>Job Applications</h1>
            <h3>First Name: {item.fullname}</h3>
            <h3>Last Name: {item.lastname}</h3>
            <p>Country: {item.country}</p>
            <p>Email: {item.email}</p>
            <p>Phone: {item.phone}</p>
            <p>Subject: {item.subject}</p>
            <p>Message: {item.message}</p>
            <p>Applied Position: {item.appliedposition}</p>
            <p>Cover Letter: {item.coverletter}</p>
            <p>Prefered Interview Date: {item.pinterviewdate}</p>
              <p>{item.filename}</p>
           <button onClick={()=>ShowPdf(item.filename)} >View Resume</button>
          </div>
        ))}

</div>
    </div>
  )
}

export default AdminDashboard
