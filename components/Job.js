"use client";
import { useState } from "react";
import styles from "./Job.module.css";
import NavBar from "./NavBar";
import Footer from "./Footer";
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Job = () => {

  const server = process.env.NEXT_PUBLIC_API_URL;
  const [file, setFile] = useState("");
  const [fileName, setFileName] = useState("");
  const [Firstname, setFirstname] = useState("");
  const [Lastname, setLastname] = useState("");
  const [Email, setEmail] = useState("");
  const [Phone, setPhone] = useState("");
  const [Appliedposition, setAppliedposition] = useState("");
  const [InterviewDate, setInterviewDate] = useState("");
  const [CoverLetter, setCoverLetter] = useState("");

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    setFile(selectedFile);
    setFileName(selectedFile.name);
  };
  const FirstnameHandler = (e) => [setFirstname(e.target.value)];

  const LastnameHandler = (e) =>{
    setLastname(e.target.value)
  }
  const EmailHandler = (e) =>{
    setEmail(e.target.value)
  }
  const PhoneNumberHandler = (e) =>{
    setPhone(e.target.value)
  }
  const PositionHandler = (e)=>{
    setAppliedposition(e.target.value)
  }
  const InterviewDateHandler = (e)=>{
    setInterviewDate(e.target.value)
  }
  const CoverLetterHandler = (e)=>{
    setCoverLetter(e.target.value);
  }
  console.log(CoverLetter)
  const formData = new FormData();

  const JobApplicationSubmitHandler = async (e) => {
    e.preventDefault();
    if(!Firstname || !Lastname || !Email || !Phone || !Appliedposition || !InterviewDate || !CoverLetter || !file){
      toast.error("Please Input All Fields");
    }
    formData.append("file", file);
    formData.append("firstname", Firstname);
    formData.append("lastname" , Lastname)
    formData.append("email" , Email)
    formData.append("phone" , Phone)
    formData.append("appliedposition" , Appliedposition)
    formData.append("pinterviewdate" , InterviewDate)
    formData.append("coverletter" , CoverLetter)
    try {

      const response = await axios.post(`${server}/jobuserdata`, formData);
      console.log(response)
      const json = response.data;
      if (json.success) {
        toast.success("Form Submitted Successfully 😎");
      }
      else if (json.success === false) {
        toast(json.error)
      }
    } catch (error) {
      toast.error("Error Submititng Form 😪");
      console.log(error)
    }


    console.log("This is Formdata", [...formData]);
  };

  console.log("This is File", file);
  return (
    <div>
      <NavBar />
      <ToastContainer />
      <div className={styles.jobpage1}>
        <h1>Job application form</h1>
        <p>Please fill out the form below to submit your job application</p>
      </div>

      <div className={styles.jobpage2}>
        <div className={styles.jobpage2left}>
          <img src="/working.png" alt="" />
        </div>
        <div className={styles.jobpage2right}>
          <div className={styles.cpage2centerright}>
            <form
              action=""
              onSubmit={JobApplicationSubmitHandler}
              className={styles.joinusform}
            >
              <div className={styles.oneinp}>
                <input
                  type="text"
                  value={Firstname}
                  onChange={FirstnameHandler}
                  placeholder="First Name"
                />
                <input type="text" value={Lastname} onChange={LastnameHandler}  placeholder="Last Name" />
              </div>
              <div className={styles.twoinp}>
                <input type="email" value={Email} onChange={EmailHandler} placeholder="Email" />
                <input type="number" value={Phone} onChange={PhoneNumberHandler} placeholder="Phone Number" />
              </div>
              <div className={styles.twoinp}>
                <input type="text" value={Appliedposition} onChange={PositionHandler} placeholder="Applied position" />
                <input type="text" value={InterviewDate} onChange={InterviewDateHandler} placeholder="Preferred Interview Date" />
              </div>

              <div className={styles.fiveinp}>
                <h4 style={{ color: "black" }}>Cover Letter</h4>
                <input
                  type="text"
                  placeholder="Please do not exceed 200 words."
                  onChange={CoverLetterHandler}
                  value={CoverLetter}
                />
              </div>
              <div className={styles.sixinp}>
                <h5 style={{ color: "black" }}>Upload Resume</h5>
                <div className={styles.drop}>
                  <input
                    type="file"
                    accept="application/pdf"
                    onChange={handleFileChange}
                  />
                  <p style={{ color: "black" }}>{fileName}</p>
                  <p>Drag & Drop File Here</p>
                </div>
              </div>
              <button className={styles.formsm}>Submit</button>
            </form>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Job;
