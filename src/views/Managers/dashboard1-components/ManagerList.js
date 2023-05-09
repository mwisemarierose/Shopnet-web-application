import * as React from "react";
import { DataGrid } from "@mui/x-data-grid";
import Avatar from "@mui/material/Avatar";
import profile from "../../../assets/profile.jpg";

const columns = [
  { field: "id", headerName: "ID", width: 70 },
  {
    field: "imageUrl",
    headerName: "Image",
    width: 130,
    renderCell: (params) => <Avatar src={profile} alt="Avatar" />,
  },
  { field: "firstName", headerName: "First name", width: 130 },
  { field: "lastName", headerName: "Last name", width: 130 },
  { field: "age",headerName: "Age",type: "number",width: 90,},
  { field: 'assignedTo', headerName: 'Assigned To', width: 150, 
  renderCell: (params) =>
  <div className="dropdown" style={{position:'absolute'}}>
    <div style={{color:'black'}}>{params.row.assignedTo}</div>
      <button style ={{backgroundColor:'white',color:'black',height:'30px'}} className="btn dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
          <i  style ={{marginTop:'0px'}}className="bx bx-dots-horizontal-rounded"></i>
      </button>
      <ul style= {{color:'black'}}className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
          <li><a className="dropdown-item" href=""> Simba supermarket</a></li>
          <li><a className="dropdown-item" href=""> Marina supermarket</a></li>
          <li><a className="dropdown-item" href=""> Best Food supermarket</a></li>
      </ul>
  
  </div>

}, 
];
const rows = [
  { id: 1, lastName: "Snow", firstName: "Jon", age: 35,assignedTo:"Simba supermarket" },
  { id: 2, lastName: "Lannister", firstName: "Cersei", age: 42,assignedTo:'Marina supermarket'},
  { id: 3, lastName: "Lannister", firstName: "Jaime", age: 45, assignedTo:'Best Food supermarket'},

];
const Manager = () => {
  return (
    <div style={{ height: 400, width: "100%" }}>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
      />
    </div>
  );
};
export default Manager;
