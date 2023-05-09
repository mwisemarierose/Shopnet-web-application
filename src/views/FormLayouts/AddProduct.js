import React from "react";

import { Grid } from "@material-ui/core";

import {AddProduct} from "./fb-elements/index"

const Product= () => {
  return (
    <Grid container spacing={0}>
      <Grid item lg={12} md={12} xs={12}>
        <AddProduct />
      </Grid>
    </Grid>
  );
};

export default Product;
