import React from 'react';
import {useState,useEffect} from 'react';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';
// import './index.css';


const Viewdrive=()=>{
    const [post,setPost]=useState("");
    let {id}=useParams();
    useEffect(()=>{
         const drive=async ()=>{
            await axios.get(`/api/v1/user/placement/get-placement/${id}`).then((response) => {
            setPost(response.data[0]);
          }).catch(()=>{
              alert("error!");
          });
         }
         drive();
        },[]); 
        return(
            <>
            <div className='box1'><div className=' border w-75 p-3 h-75 mx-auto m-5'>               
                <h1 className='text-uppercase text-center'>COMPANY NAME:{post.companyName}</h1>
                <p className='h3'>
                DRIVE DATE:{new Date(post?.driveDate).toDateString()}<br/>
                <div dangerouslySetInnerHTML={{__html:post.editorData}}/></p>
                </div></div>
 
            </>
        )
}
export default Viewdrive;