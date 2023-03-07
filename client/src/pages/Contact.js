import React from 'react'
import axios from 'axios';
import { useState } from 'react';
// import './css/Contact.css';
import "../styles/mainpage.css";

const Contact = () => {
 
    const [formStatus, setFormStatus] = useState({
      name:'',
      email:'',
      message:''
    });

    const handleSubmit=(e)=>{
        e.preventDefault();
        axios.post('/contact/add-contact',formStatus).then((response)=>{
          console.log(response)
          alert(response.data);
        }).catch((error)=>{
            alert(error);
          })
        console.log(formStatus)
  }
  return (
    <div className='back'>
    <div className="container1 mt-5 w-50 text-center mx-auto">
      <h2 className="mb-3 text-center ">CONTACT FORM</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3 ">
          <label className="form-label " htmlFor="name">
            NAME
          </label>
          <input className="form-control " type="text" id="name" required  value={formStatus.name} onChange={(e)=>setFormStatus({...formStatus,name:e.target.value})}/>
        </div>
        <div className="mb-3">
          <label className="form-label" htmlFor="email">
            EMAIL
          </label>
          <input className="form-control" type="email" id="email" required value={formStatus.email} onChange={(e)=>setFormStatus({...formStatus,email:e.target.value})}/>
        </div>
        <div className="mb-3">
          <label className="form-label" htmlFor="message">
            MESSAGE
          </label>
          <textarea className="form-control" id="message" required value={formStatus.message} onChange={(e)=>setFormStatus({...formStatus,message:e.target.value})}/>
        </div>
        <button className="btn btn-danger" type="submit" onClick={()=>handleSubmit()}>SUBMIT
        </button>
      </form>
    </div></div>
  )
}
export default Contact