import React from "react";
import { Box, Button, Typography } from "@material-ui/core";
import sidebarBuynow from "../../../assets/images/backgrounds/sidebar-buynow.png";

const Buynow = () => {
  //const customizer = useSelector((state)=> state.CustomizerReducer);

  return (
    <Box pb={5} mt={5}>
      <Box
        p={2}
        sx={{
          backgroundColor: (theme) => theme.palette.primary.light,
          borderRadius: "10px",
        }}
        style={{ position: "relative" }}
      >
        <img
          src={sidebarBuynow}
          alt={sidebarBuynow}
          style={{
            position: "absolute",
            right: "-10px",
            top: "-18px",
          }}
        />
        <Box pb={1} pt={2} sx={{ width: "100%" }}>
          <Typography
            variant="h5"
            mb={2}
            sx={{
              color: (theme) => theme.palette.secondary.main,
              zIndex: "9",
              position: "relative",
            }}
          >
          
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default Buynow;
