import React, { useEffect, useState } from "react";
import { DataGrid } from "@mui/x-data-grid";
import Avatar from "@mui/material/Avatar";
import axios from "axios";
import { Delete, BorderColorIcon } from "@material-ui/icons";
import { Link, useNavigate } from "react-router-dom";
import Confirmation from "./Confirmation";

const Product = () => {
  const [product, setProduct] = useState([]);
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

  useEffect(() => {
    fetchProduct();
  }, [product]);

  const fetchProduct = () => {
    axios({
      method: "GET",
      url: "https://shopnet-api.onrender.com/api/product/all",
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Content-Type": "application/json",
        accept: "application/json",
      },
    })
      .then((response) => {
        setProduct(
          response.data.result.map((res) => ({
            id: res._id,
            product_name: res.product_name,
            price : res.price,
            product_image: res.product_image,
            super_name: res.supermarket.super_name,
          }))
        );
        console.log(response.data.result)
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const handleDelete = async(id) => {
    const token = localStorage.getItem("token");
    await fetch(`https://shopnet-api.onrender.com/api/product/delete/${id}`, {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((response) => {
        if (response.ok) {
          setDeleted(true);
          product.filter((item) => item.id !== id);
          setProduct([...product]);
          handleClose();
          navigate("/manager/form-layouts/product-list");
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
      field: "product_image",
      headerName: "Image",
      width: 130,
      renderCell: (params) => <Avatar src={params.value} alt="Avatar" />,
    },
    { field: "product_name", headerName: "Product Name", width: 200 },
    { field: "price", headerName: "Price", width: 100 },
    { field: "super_name", headerName: "Supermarket", width: 180 },
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
        rows={product}
        columns={columns}
        pageSize={8}
        rowsPerPageOptions={[8]}
        checkboxSelection
      />
  <Confirmation handleDelete={()=>handleDelete(deleteId)} open={open} handleClose={handleClose}/>
    </div>
  );
};
export default Product;
