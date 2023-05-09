import * as React from "react";
import { DataGrid } from "@mui/x-data-grid";
import Avatar from "@mui/material/Avatar";
import profile from "../../../assets/profile.jpg";
import { useEffect, useState } from "react";
import axios from "axios";

const columns = [
  { field: "id", headerName: "ID", width: 70 },
  {
    field: "profile",
    headerName: "Image",
    width: 130,
    renderCell: (params) => <Avatar src= '' alt="Avatar" />,
  },
  { field: "full_name", headerName: "Full Name", width: 130 },
  { field: "email", headerName: "Email", width: 130 },
  { field: "role",headerName: "Role",width: 100,},

//   { field: 'assignedTo', headerName: 'Assigned To', width: 150, 
//   renderCell: (params) =>
//   <div className="dropdown" style={{position:'absolute'}}>
//     <div style={{color:'black'}}>{params.row.assignedTo}</div>
//       <button style ={{backgroundColor:'white',color:'black',height:'30px'}} className="btn dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
//           <i  style ={{marginTop:'-100px',marginLeft:'140px'}}className="bx bx-dots-horizontal-rounded"></i>
//       </button>
//       <ul style= {{color:'black'}}className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
//           <li><a className="dropdown-item" href=""> Simba supermarket</a></li>
//           <li><a className="dropdown-item" href=""> Marina supermarket</a></li>
//           <li><a className="dropdown-item" href=""> Best Food supermarket</a></li>
//       </ul>
  
//   </div>

// }, 
];

const Manager = () => {

  const [manager,setManager] = useState([]);
  
  useEffect(() => {
    fetchManagers();
  }, []);
  const fetchManagers = () => {
    const token = localStorage.getItem("token");
    axios({
      method: "GET",
      url: "https://shopnet-api.onrender.com/api/users/role/Manager",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    
      .then((response) => {
        setManager(response.data.result.map(res => ({
          id: res._id ,
          full_name:res.full_name,
          profile:res.profile[0],
          email: res.email,
          role: res.role,
         
        })))
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div style={{ height: 400, width: "85%"}}>
      <DataGrid
        rows={manager}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
      />
    </div>
  );
};
export default Manager;
