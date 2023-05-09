import React, { useState, useEffect } from "react";
import {
  Card,
  CardContent,
  Divider,
  Box,
  Typography,
  TextField,
  Button,
} from "@material-ui/core";
import axios from "axios";
import { useParams } from "react-router-dom";

const EditSupermarket = (props) => {
  const { id } = useParams();
  const [state, setState] = React.useState({
    checkedA: false,
    checkedB: false,
    checkedC: false,
  });
  const [market, setmarket] = useState({});
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [supername, setSupername] = useState("");
  const [image, setImage] = useState("");
  const [description, setDescription] = useState("");
  const [longitude, setLongitude] = useState("");
  const [latitude, setLatitude] = useState("");
  const [isLoading, setisLoading] = useState(false);
  const [address,setAddress]=useState("");
  const [edited, setEdited] = useState(false);

  const fetchSingleSupermarket = (id) => {
    const token = localStorage.getItem("token");
    axios({
      method: "GET",
      url: `https://shopnet-api.onrender.com/api/supermarket/single/${id}`,
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((response) => {
        setmarket(response.data);
        setLongitude(response.data.result.location.coordinates[0]);
        setLatitude(response.data.result.location.coordinates[1]);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  useEffect(() => {
    fetchSingleSupermarket(id);
  }, []);

  function handleUpdate() {
    const coordinates=JSON.stringify([longitude,latitude]);
    const Data = new FormData();
    Data.append("super_name", market.result?.super_name);
    Data.append("description", market.result?.description);
    Data.append("sup_images", market.result?.sup_images);
    Data.append("address", market.result?.address);
    Data.append("coordinates", coordinates);
    Data.append("contact.phone", market.result?.contact?.phone);
    Data.append("contact.email", market.result?.contact?.email);
    const token = localStorage.getItem("token");
    fetch(`https://shopnet-api.onrender.com/api/supermarket/update/${id}`, {
      method: "PUT",
      body: Data,
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((res) => res.json())
      .then((response) => {
        setisLoading(true);
        console.log(response);
        if (response.status === "success") {
          setEdited(true);
        } else {
          throw new Error("Failed to EDIT");
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }
  return (
    <div>
      <Card
        variant="outlined"
        sx={{
          p: 0,
        }}
      >
        <Box
          sx={{
            padding: "10px 10px",
          }}
          display="flex"
          alignItems="center"
        >
          <Box flexGrow={1}>
            <Typography
              sx={{
                fontSize: "18px",
                fontWeight: "500",
                color: "#1269AB",
              }}
            >
              Edit Supermarket
            </Typography>
          </Box>
        </Box>
        <Divider />
        <CardContent
          sx={{
            padding: "30px",
          }}
        >
          <form>
            {edited && (
              <p style={{ color: "#328EFB" }}>
                Supermarket edited Successfully{" "}
              </p>
            )}
            <TextField
              id="name-text"
              label={!market.result?.super_name && "Supermarket Name"}
              variant="outlined"
              value={market.result?.super_name}
              onChange={(e) => setmarket({
                ...market,
                result: {
                  ...market.result,
                  super_name: e.target.value
                }
              })}
              fullWidth
              sx={{
                mb: 2,
              }}
            />
            <TextField
              id="name-text"
              label={!market.result?.address && "address"}
              variant="outlined"
              required
              value={market.result?.address}
              onChange={(e) => setmarket({
                ...market,
                result: {
                  ...market.result,
                  address: e.target.value
                }
              })}
              fullWidth
              sx={{
                mb: 2,
              }}
            />
            <div style={{display:"flex",flex:1,gap:"30px"}}>
                  <TextField
                    id="name-text"
                    label={!longitude && "longitude"}
                    required
                    variant="outlined"
                    value={longitude}
                    onChange={(e) => setLongitude(e.target.value)}
                    fullWidth
                    sx={{
                      mb: 2,
                    }}
                />
                <TextField
                    id="name-text"
                    label={ !latitude && "latitude"}
                    variant="outlined"
                    required
                    value={latitude}
                    onChange={(e) => setLatitude(e.target.value)}
                    fullWidth
                    sx={{
                      mb: 2,
                    }}
                />
            </div>
            <TextField
              id="raised-button-file"
              type="file"
              accept="image/*"
              multiple
              onChange={(e) => setmarket({
                ...market,
                result: {
                  ...market.result,
                  sup_images: e.target.files[0]
                }
              })}
              sx={{
                mb: 2,
              }}
            />
            <TextField
              id="email-text"
              label={ !market.result?.contact?.email && "email"}
              type="email"
              variant="outlined"
              value={market.result?.contact?.email}
              onChange={(e) => setmarket({
                ...market,
                result: {
                  ...market.result,
                  contact: {
                    ...market.result.contact,
                    email: e.target.value
                  }
                }
              })}
              fullWidth
              sx={{
                mb: 2,
              }}
            />
            <TextField
              id="phone-text"
              label={!market.result?.contact?.phone && "Phone"}
              type="text"
              variant="outlined"
              value={market.result?.contact?.phone}
              onChange={(e) => setmarket({
                ...market,
                result: {
                  ...market.result,
                  contact: {
                    ...market.result.contact,
                    phone: e.target.value
                  }
                }
              })}
              fullWidth
              sx={{
                mb: 2,
              }}
            />
            <TextField
              id="outlined-multiline-static"
              label={ !market.result?.description && "Description" }
              multiline
              value={market.result?.description}
              rows={2}
              variant="outlined"
              onChange={(e) => setmarket({
                ...market,
                result: {
                  ...market.result,
                  description: e.target.value
                }
              })}
              fullWidth
              sx={{
                mb: 2,
              }}
            />
            <div>
              <Button
                color="primary"
                size="medium"
                variant="contained"
                onClick={handleUpdate}
                className={`btn ${isLoading && "disabled"}`}
                disabled={isLoading}
              >
                Save
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default EditSupermarket;
