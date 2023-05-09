import React ,{useState} from "react";
import { useDispatch, useSelector } from "react-redux";
import { createSupermarket } from "../../../features/supermarketSlice";
import {
  Card,
  CardContent,
  Divider,
  Box,
  Typography,
  TextField,
  Button,
  Grid,
  RadioGroup,
  Radio,
  FormControlLabel,
  FormControl,
  MenuItem,
  Input,
} from "@material-ui/core";
import { makeStyles  } from '@material-ui/styles';
import { createTheme } from '@material-ui/core/styles'
import MessageAlert from "./MessageAlert";



// const numbers = [
//   {
//     value: "one",
//     label: "One",
//   },
//   {
//     value: "two",
//     label: "Two",
//   },
//   {
//     value: "three",
//     label: "Three",
//   },
//   {
//     value: "four",
//     label: "Four",
//   },
// ];

const FbDefaultForm = () => {
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

  const initialCoord=JSON.parse(localStorage.getItem("coordinates"));
  const [supername, setSupername] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [description, setDescription] = useState("");
  const [longitude, setLongitude] = useState(initialCoord[0]);
  const [latitude, setLatitude] = useState(initialCoord[1]);
  const [isLoading, setisLoading] = useState(false);
  const [message,setMessage] =useState("");
  const [address,setAddress]=useState("");

  const [image, setImage] = useState("");
  const dispatch = useDispatch();
  const { supermarketCreated } = useSelector(
    (state) => state.supermarket
  );
  
  function handleAddSupermarket(e) {
    const coordinates=JSON.stringify([longitude,latitude]);
    const Data = new FormData();
    Data.append("super_name", supername);
    Data.append("address",address);
    Data.append("coordinates",coordinates);
    Data.append("sup_images", image);
    Data.append("contact.email", email);
    Data.append("contact.phone", phone);
    Data.append("description", description);
    e.preventDefault();
    setisLoading(true);
    dispatch(createSupermarket(Data ,setisLoading,setMessage ));
    
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
              Add New Supermarket
            </Typography>
          </Box>
        </Box>
        <Divider />
        <CardContent
          sx={{
            padding: "30px"
          }}
        >
          {message && <MessageAlert message={message}/>}
          <form method="POST" onSubmit={handleAddSupermarket}>
            <TextField
              id="name-text"
              label="name of supermarket"
              variant="filled"
              required
              onChange={(e) => {
                setSupername(e.target.value);
              }}
              fullWidth
              sx={{
                mb: 2,
              }}
            />
            <TextField
              id="name-text"
              label="Address of supermarket"
              variant="filled"
              required
              onChange={(e) => {
                setAddress(e.target.value);
              }}
              fullWidth
              sx={{
                mb: 2,
              }}
            />
            <div style={{display:"flex",flex:1,gap:"30px"}}>
                  <TextField
                    id="name-text"
                    label="longitude"
                    required
                    variant="filled"
                    value={longitude}
                    onChange={(e) => {
                      setLongitude(e.target.value);
                    }}
                    fullWidth
                    sx={{
                      mb: 2,
                    }}
                />
                <TextField
                    id="name-text"
                    label="latitude"
                    variant="filled"
                    required
                    value={latitude}
                    onChange={(e) => {
                      setLatitude(e.target.value);
                    }}
                    fullWidth
                    sx={{
                      mb: 2,
                    }}
                />
            </div>
             <Input
              accept="image/*"
              id="raised-button-file"
              variant="filled"
              multiple
              required
              style={{width:"100%"}}
              type="file"
              onChange={(e) => {
                setImage(e.target.files[0]);
              }}
              sx={{
                mb: 2,
              }}
            />
            <TextField
              id="email-text"
              label="Email"
              type="email"
              required
              variant="filled"
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              fullWidth
              sx={{
                mb: 2,
              }}
            />
             <TextField
              id="phone-text"
              label="Phone"
              type="number"
              required
              variant="filled"
              onChange={(e) => {
                setPhone(e.target.value);
              }}
              fullWidth
              sx={{
                mb: 2,
              }}
            />
            <TextField
              id="outlined-multiline-static"
              label="Description"
              required
              multiline
              rows={2}
              variant="filled"
              onChange={(e) => {
                setDescription(e.target.value);
              }}
              fullWidth
              sx={{
                mb: 2,
              }}
            />
            <div>
            <Button
                color="primary"
                type="submit"
                size="medium"
                variant="contained"
                style={{position:"relative" ,marginLeft: "80.5%",width:"180px" }}
                className={`btn ${isLoading && "disabled"}`}
                disabled={isLoading}
              >
                Add supermarket
              </Button>
            </div>
            {/* <TextField
              id="readonly-text"
              label="Read Only"
              defaultValue="Hello World"
              inputprops={{
                readOnly: true,
              }}
              variant="outlined"
              fullWidth
              sx={{
                mb: 2,
              }}
            /> */}
            {/* <Grid
              container
              spacing={0}
              sx={{
                mb: 2,
              }}
            > */}
            {/* <Grid item lg={4} md={6} sm={12}>
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={state.checkedA}
                      onChange={handleChange}
                      name="checkedA"
                      color="primary"
                    />
                  }
                  label="Check this custom checkbox"
                />
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={state.checkedB}
                      onChange={handleChange}
                      name="checkedB"
                      color="primary"
                    />
                  }
                  label="Check this custom checkbox"
                />
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={state.checkedC}
                      onChange={handleChange}
                      name="checkedC"
                      color="primary"
                    />
                  }
                  label="Check this custom checkbox"
                />
              </Grid> */}
            {/* <Grid item lg={4} md={6} sm={12}>
                <FormControl component="fieldset">
                  <RadioGroup
                    aria-label="gender"
                    name="gender1"
                    value={value}
                    onChange={handleChange2}
                  >
                    <FormControlLabel
                      value="radio1"
                      control={<Radio />}
                      label="Toggle this custom radio"
                    />
                    <FormControlLabel
                      value="radio2"
                      control={<Radio />}
                      label="Toggle this custom radio"
                    />
                    <FormControlLabel
                      value="radio3"
                      control={<Radio />}
                      label="Toggle this custom radio"
                    />
                  </RadioGroup>
                </FormControl>
              </Grid> */}
            {/* <TextField
              fullWidth
              id="standard-select-number"
              variant="outlined"
              select
              label="Select"
              value={number}
              onChange={handleChange3}
              sx={{
                mb: 2,
              }}
            >
              {numbers.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </TextField> */}
           
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default FbDefaultForm;
