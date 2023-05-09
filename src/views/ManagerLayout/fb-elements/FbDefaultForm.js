import React from "react";
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
import { makeStyles  } from '@material-ui/styles';
import { createTheme } from '@material-ui/core/styles'
const numbers = [
  {
    value: "one",
    label: "One",
  },
  {
    value: "two",
    label: "Two",
  },
  {
    value: "three",
    label: "Three",
  },
  {
    value: "four",
    label: "Four",
  },
];

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

  const [number, setNumber] = React.useState("");

  const handleChange3 = (event) => {
    setNumber(event.target.value);
  };
 
  const useStyles = makeStyles(() => ({
    input: {
      display: 'none',
    },
    button: {
      // margin: theme.spacing(1),
    },
  }));
  const classes = useStyles();
  return (
    <div>
      {/* ------------------------------------------------------------------------------------------------ */}
      {/* Basic Checkbox */}
      {/* ------------------------------------------------------------------------------------------------ */}
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
            padding: "30px",
          }}
        >
          <form>
            <TextField
              id="name-text"
              label="name of supermarket"
              variant="outlined"
              fullWidth
              sx={{
                mb: 2,
              }}
            />
            <TextField
              id="email-text"
              label="Email"
              type="email"
              variant="outlined"
              fullWidth
              sx={{
                mb: 2,
              }}
            />
            <TextField
              id="outlined-password-input"
              label="Password"
              type="password"
              autoComplete="current-password"
              variant="outlined"
              fullWidth
              sx={{
                mb: 2,
              }}
            />
            <TextField
              id="outlined-multiline-static"
              label="Description"
              multiline
              rows={2}
              variant="outlined"
              fullWidth
              sx={{
                mb: 2,
              }}
            />
            <TextField
              accept="image/*"
            //   className={classes.input}
              id="raised-button-file"
              multiple
              type="file"
            />
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
              </Grid>
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
            <div>
            <Button
                color="primary"
                size="medium"
                variant="contained"
                style={{ marginLeft: "800px" }}
              >
                Add supermarket
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default FbDefaultForm;
