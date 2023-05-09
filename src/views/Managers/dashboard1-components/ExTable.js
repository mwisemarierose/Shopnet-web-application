import * as React from 'react';
import { DataGrid  } from '@mui/x-data-grid';
import Avatar from "@mui/material/Avatar";
import  Avatar5 from "../../../assets/5.jpg";
import  Avatar2 from "../../../assets/2.jpeg";
import  Avatar3 from "../../../assets/3.png";
import  Avatar4 from "../../../assets/4.png";

const columns = [
  { field: 'id', headerName: 'ID', width: 70 },
  { field: 'imageUrl', headerName: 'Image', width: 130, renderCell: (params) => <Avatar src={params.value} alt="Avatar" /> },
  { field: 'name', headerName: 'Name', width: 230 },
  { field: 'location', headerName: 'Location', width: 230 },
  {
    field: 'phone',
    headerName: 'Phone',
    type: 'number',
    width: 120,
  },
  { field: 'action', headerName: 'Action', width: 130, 
  renderCell: (params) =>
  <div className="dropdown" style={{position:'absolute'}}>
      <button style ={{backgroundColor:'white',color:'black',height:'30px'}} className="btn dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
          <i  style ={{marginTop:'0px'}}className="bx bx-dots-horizontal-rounded"></i>
      </button>
      <ul style= {{color:'black'}}className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
          <li><a className="dropdown-item" href="#"><i className='bx bx-pencil'></i> Edit</a></li>
          <li><a className="dropdown-item" href="#"><i className='bx bx-trash'></i> Remove</a></li>
      </ul>
  
  </div>

}, 

  
];

const rows = [
  { id: 1,imageUrl:Avatar5 , name: 'Simba Supermarket', location: 'Kicukiro/Rwanda', phone: '0788888 '},
  { id: 2,imageUrl:Avatar3, name: 'Marina Supermarket', location: 'Kicukiro/Rwanda', phone: '0788888 '},
  { id: 3,imageUrl:Avatar2, name: 'Best Food Supermarket', location: 'Kicukiro/Rwanda', phone: '0788888 '},
  { id: 4,imageUrl:Avatar4, name: 'Galaxy Supermarket', location: 'Kicukiro/Rwanda', phone: '0788888 '},
  
];

const ExTable = () => {
  return (
    <div style={{ height: 400, width: '100%' }}>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        
      />
    </div>
  );
}
export default ExTable;