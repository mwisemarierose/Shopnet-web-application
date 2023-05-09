import React, { useEffect, useState } from "react";
import {
  Card,
  CardContent,
  Divider,
  Box,
  Typography,
  TextField,
  FormControlLabel,
  Checkbox,
  Button,
  Grid,
  RadioGroup,
  Radio,
  FormControl,
  MenuItem,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";

const ManagerForm = () => {
  const [state, setState] = React.useState({
    checkedA: false,
    checkedB: false,
    checkedC: false,
  });
  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };

  const [value, setValue] = React.useState("");

  const handleChange2 = (event) => {
    setValue(event.target.value);
  };

  const [number, setNumber] = React.useState("");

  const handleChange3 = (event) => {
    setNumber(event.target.value);
  };

  const useStyles = makeStyles(() => ({
    input: {
      display: "none",
    },
    button: {
      // margin: theme.spacing(1),
    },
  }));
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [fullname, setfullname] = useState("");
  const [image, setImage] = useState("");
  const [role, setRole] = useState("");
  const [registered, setRegistered] = useState(false);
 

  function handleRegister() {
    const token = localStorage.getItem("token");
    const Data = new FormData();
    Data.append("full_name", fullname);
    Data.append("email", email);
    Data.append("profile", image);
    Data.append("password", password);
    Data.append("role", role);
    fetch("https://shopnet-api.onrender.com/api/users/signup", {
      method: "POST",
      body: Data,
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }).then((response) => {
      if (response.ok) {
        setRegistered(true);
      } else {
        throw new Error("Failed to Register");
      }
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
              Add New Manager
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
            {registered && (
              <p style={{ color: "#328EFB" }}>Manager Created Successfully</p>
            )}
            <TextField
              id="email"
              label=" full name "
              type='email'
              variant="outlined"
              onChange={(e) => {
                setfullname(e.target.value);
              }}
              fullWidth
              sx={{
                mb: 2,
              }}
            />
            <TextField
              id="email"
              label="Email"
              type="email"
              variant="outlined"
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              fullWidth
              sx={{
                mb: 2,
              }}
            />
            <Grid
              container
              spacing={0}
              sx={{
                mb: 2,
              }}
            ></Grid>
            <TextField
              id="password"
              label="Password"
              type="password"
              variant="outlined"
              onChange={(e) => setPassword(e.target.value)}
              fullWidth
              sx={{
                mb: 2,
              }}
            />
            <Grid
              container
              spacing={0}
              sx={{
                mb: 2,
              }}
            ></Grid>
             <TextField
              id="role"
              label="Role"
              type="email"
              variant="outlined"
              onChange={(e) => setRole(e.target.value)}
              fullWidth
              sx={{
                mb: 2,
              }}
            />
            <Grid
              container
              spacing={0}
              sx={{
                mb: 2,
              }}
            ></Grid>
          
            <TextField
              accept="image/*"
              id="raised-button-file"
              multiple
              type="file"
              onChange={(e) => setImage(e.target.files[0])}
            />
            <Grid
              container
              spacing={0}
              sx={{
                mb: 2,
              }}
            ></Grid>
            <div>
              <Button
                color="primary"
                variant="contained"
                size="large"
                onClick={handleRegister}
                style={{ marginLeft: "800px" }}
              >
                Add manager
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default ManagerForm;
