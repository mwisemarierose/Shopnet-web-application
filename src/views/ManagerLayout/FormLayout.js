import React from "react";

import { Grid } from "@material-ui/core";

import {ManagerForm} from "./fb-elements/index"

const FormLayout = () => {
  return (
    <Grid container spacing={0}>
      <Grid item lg={12} md={12} xs={12}>
        <ManagerForm />
      </Grid>
    </Grid>
  );
};

export default FormLayout;
