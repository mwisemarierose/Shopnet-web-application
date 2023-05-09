import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { useEffect, useState } from 'react';
import axios from 'axios';

export default function CustomizedMenus(props) {
  const [location, setLocation] = useState("My location");
  const [addresses,setAddresses]=useState([]);

  useEffect(()=>{
    const fetchLocation=async()=>{
      try {
        const response=await axios.get("https://shopnet-api.onrender.com/api/supermarket/address");
        setAddresses(response.data.result);
        console.log(response);
      } catch (error) {
        console.log(error);
      }

    }
    fetchLocation();
  },[])

  const handleChange = (event) => {
    setLocation(event.target.value);
    props.changedLocation(event.target.value);
  };
  return (
    <div>
      <FormControl variant="outlined" color="success" size='small' sx={{ m: 1, minWidth: 120 }} className="select_location">
        <Select
          value={location}
          onChange={handleChange}
          displayEmpty
          inputProps={{ 'aria-label': 'Without label' }}
          style={{color:"white"}}
        >
          <MenuItem value="My location">
            <em>My location</em>
          </MenuItem>
          {
            !addresses && <MenuItem value=""><div style={{height:"100px",display:"flex",flex:1,alignSelf:"center",justifySelf:"center"}}>Loading...</div></MenuItem>
          }
          {
            addresses && addresses.map(address=>(<MenuItem value={address} key={address}>{ address }</MenuItem>))
          }
        </Select>
      </FormControl>
    </div>
  );
}