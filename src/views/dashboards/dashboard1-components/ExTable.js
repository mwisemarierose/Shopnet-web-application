import React, { useEffect, useState } from "react";
import { DataGrid } from "@mui/x-data-grid";
import Avatar from "@mui/material/Avatar";
import axios from "axios";
import { Delete, BorderColorIcon } from "@material-ui/icons";
import { Link, useNavigate } from "react-router-dom";
import ConfirmationDialog from "./ConfirmationDialog";

const ExTable = () => {
  const [supermarket, setSupermarket] = useState([]);
  const [deleted, setDeleted] = useState(false);
  const [error, setError] = useState(null);
  const [deleteId, setDeleteId] = useState("");
  const [open, setOpen] = React.useState(false);
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
  const handleClickOpen = (deleteid) => {
    setDeleteId(deleteid);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const handleDelete = async(id) => {
    const token = localStorage.getItem("token");
    await fetch(`https://shopnet-api.onrender.com/api/supermarket/delete/${id}`, {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((response) => {
        if (response.ok) {
          setDeleted(true);
          // console.log(supermarket);
          supermarket.filter((item) => item.id !== id);
          setSupermarket([...supermarket]);
          handleClose();
          navigate("/dashboard/tables/basic-table");
        } else {
          throw new Error("Failed to delete");
        }
      })
      .catch((error) => {
        setError(error);
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
    {
      field: "action",
      headerName: "Action",
      width: 150,
      renderCell: (params) => (
        <div className="dropdown" style={{ position: "absolute" }}>
          <button
            style={{ backgroundColor: "white", color: "black", height: "30px" }}
            className="btn dropdown-toggle"
            type="button"
            id="dropdownMenuButton1"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            <i
              style={{ marginTop: "0px" }}
              className="bx bx-dots-horizontal-rounded"
            ></i>
          </button>
          <ul
            style={{ color: "black" }}
            className="dropdown-menu"
            aria-labelledby="dropdownMenuButton1"
          >
            <li>
              <Link className="dropdown-item" to={`/dashboard/form-layouts/Edit-supermarket/${params.id}`}>
                <i className="bx bx-pencil"></i> Edit
              </Link>
            </li>
            <li>
              <a
                className="dropdown-item"
                onClick={()=>handleClickOpen(params.id)}
              >
                <Delete /> Remove
              </a>
            </li>
          </ul>
        </div>
      ),
    },
  ];
  // add handleDelete method in action field of columns

  return (
    <div style={{ height: 400, width: "100%" }}>
      <DataGrid
        rows={supermarket}
        columns={columns}
        pageSize={8}
        rowsPerPageOptions={[8]}
        checkboxSelection
      />
      <ConfirmationDialog handleDelete={()=>handleDelete(deleteId)} open={open} handleClose={handleClose}/>
    </div>
  );
};
export default ExTable;
