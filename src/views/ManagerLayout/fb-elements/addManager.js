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
import { makeStyles } from "@material-ui/styles";
import { createTheme } from "@material-ui/core/styles";
const numbers = [
  {
    value: "Simba supermarket",
    label: "Simba supermarket",
  },
  {
    value: "Marina supermarket",
    label: "Marina supermarket",
  },
  {
    value: "Bata supermarket",
    label: "TBata supermarket",
  },
  {
    value: "Best Food supermarket",
    label: "Best Food supermarket",
  },
];

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
  const classes = useStyles();
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
            <TextField
              id="name-text"
              label="name "
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
            <Grid
              container
              spacing={0}
              sx={{
                mb: 2,
              }}
            ></Grid>
            <TextField
              fullWidth
              id="standard-select-number"
              variant="outlined"
              select
              label="Assigned To"
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
            </TextField>
            <TextField
              accept="image/*"
            //   className={classes.input}
              id="raised-button-file"
              multiple
              type="file"
            />
            <div>
              <Button
                color="primary"
                variant="contained"
                size="large"
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
