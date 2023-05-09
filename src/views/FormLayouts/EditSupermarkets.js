import React from "react";

import { Grid } from "@material-ui/core";

import {EditSupermarket} from "./fb-elements/index"

const EditSupermarkets = () => {
  return (
    <Grid container spacing={0}>
      <Grid item lg={12} md={12} xs={12}>
        <EditSupermarket/>
      </Grid>
    </Grid>
  );
};

export default EditSupermarkets;
