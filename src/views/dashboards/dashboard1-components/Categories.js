import React, { useEffect, useState } from "react";
import { DataGrid } from "@mui/x-data-grid";
import Avatar from "@mui/material/Avatar";
import axios from "axios";
import { Delete, BorderColorIcon } from "@material-ui/icons";
import { Link, useNavigate } from "react-router-dom";
import ConfirmDelete from "./ConfirmDelete"; 


const Categories = () => {
  const [category, setCategory] = useState([]);
  const navigate = useNavigate();
  const [deleted, setDeleted] = useState(false);
  const [error, setError] = useState(null);
  const [deleteId, setDeleteId] = useState("");
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = (deleteid) => {
    setDeleteId(deleteid);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
 

  const fetchCategory = () => {
    axios({
      method: "GET",
      url: "https://shopnet-api.onrender.com/api/category/all",
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Content-Type": "application/json",
        accept: "application/json",
      },
    })
      .then((response) => {
        setCategory(
          response.data.result.map((res) => ({
            id: res._id,
            category_name: res.category_name,
            category_image: res.category_image.original,
          }))
        );
      })
      .catch((error) => {
        console.log(error);
      });
  };
  useEffect(() => {
    fetchCategory();
  }, [category]);

  const handleDelete = async(id) => {
    const token = localStorage.getItem("token");
    await fetch(`https://shopnet-api.onrender.com/api/category/delete/${id}`, {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((response) => {
        if (response.ok) {
          setDeleted(true);
          category.filter((item) => item.id !== id);
          setCategory([...category]);
          handleClose();
          navigate("/manager/form-layouts/category-list");
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
      field: "category_image",
      headerName: "Image",
      width: 130,
      renderCell: (params) => <Avatar src={params.value} alt="Avatar" />,
    },
    { field: "category_name", headerName: "Category Name", width: 230 },
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
  
]
  return (
    <div style={{ height: 400, width: "100%" }}>
      <DataGrid
        rows={category}
        columns={columns}
        pageSize={8}
        rowsPerPageOptions={[8]}
        checkboxSelection
      />
 <ConfirmDelete  handleDelete={()=>handleDelete(deleteId)} open={open} handleClose={handleClose}/>
    </div>
  );
};
export default Categories;
