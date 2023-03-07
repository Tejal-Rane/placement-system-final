import React from 'react'
import { DataGrid } from '@material-ui/data-grid';
import { useEffect,useState } from 'react';
import axios from 'axios';
// import { Link } from 'react-router-dom';

const Viewnotice = () => {
    const [notice,allnotice]=useState([]);
   
    const columns = [
     { field: '_id', headerName: 'ID', width: 90,
    //  renderCell: (params) => 
    //  <Link to={`/vprofile/${params.row._id}`}>${params.row._id}</Link>
    },
      {
        field: 'notice',
        headerName: 'Notices',
        width: 180,
        editable: true,
      },
      {
        field: 'postedBy',
        headerName: 'Posted By',
        width: 130,
        editable: true,
      },
    

    ];
    useEffect(()=>{
        axios.get("/api/v1/get-all-notice/").then((response) => {
      allnotice(response.data);
      console.log(notice);
    }).catch(()=>{
        alert("error!");
    });allnotice();
  },[]);
      return (
        <div style={{ height: 600, width: '100%', }}>
          <DataGrid
           getRowId={(row) => row._id}
            rows={notice}
            columns={columns}
            pageSize={5}
          />
        </div>
      );
    }

export default Viewnotice;