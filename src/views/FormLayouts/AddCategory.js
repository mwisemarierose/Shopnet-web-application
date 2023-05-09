import React from "react";

import { Grid } from "@material-ui/core";

import {AddCategory} from "./fb-elements/index"

const Category= () => {
  return (
    <Grid container spacing={0}>
      <Grid item lg={12} md={12} xs={12}>
        < AddCategory />
      </Grid>
    </Grid>
  );
};

export default Category;
