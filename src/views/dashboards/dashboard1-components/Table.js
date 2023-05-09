import React, { useEffect, useState } from "react";
import { DataGrid } from "@mui/x-data-grid";
import Avatar from "@mui/material/Avatar";
import axios from "axios";
import { Delete, BorderColorIcon } from "@material-ui/icons";
import { Link, useNavigate } from "react-router-dom";
import ConfirmationDialog from "./ConfirmationDialog";

const Table = () => {
  const [supermarket, setSupermarket] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetchSupermarket();
  }, [supermarket]);

  const fetchSupermarket = () => {
    axios({
      method: "GET",
      url: "https://shopnet-api.onrender.com/api/supermarket/all",
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Content-Type": "application/json",
        accept: "application/json",
      },
    })
      .then((response) => {
        setSupermarket(
          response.data.result.map((res) => ({
            id: res._id,
            super_name: res.super_name,
            super_images: res.sup_images[0],
            phone: res.contact.phone,
            email: res.contact.email,
          }))
        );
      })
      .catch((error) => {
        console.log(error);
      });
  };
 

  const columns = [
    { field: "id", headerName: "ID", width: 70 },
    {
      field: "super_images",
      headerName: "Image",
      width: 130,
      renderCell: (params) => <Avatar src={params.value} alt="Avatar" />,
    },
    { field: "super_name", headerName: "Supermarket Name", width: 230 },
    { field: "phone", headerName: "Phone", type: "number", width: 140 },
    { field: "email", headerName: "Email", type: "number", width: 140 },
]
  return (
    <div style={{ height: 400, width: "100%" }}>
      <DataGrid
        rows={supermarket}
        columns={columns}
        pageSize={8}
        rowsPerPageOptions={[8]}
        checkboxSelection
      />
 
    </div>
  );
};
export default Table;
