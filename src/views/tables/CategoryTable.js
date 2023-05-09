import React from "react";

import { Card, CardContent, Box, Typography } from "@material-ui/core";

import Categories from "../dashboards/dashboard1-components/Categories"

const CategoryTable = () => {
  return (
    <Box>
      <Card variant="outlined">
        <CardContent>
          <Typography variant="h3"></Typography>
          <Box
            sx={{
              overflow: {
                xs: "auto",
                sm: "unset",
              },
            }}
          >
            <Categories />
          </Box>
        </CardContent>
      </Card> 
    </Box>
  );
};

export default CategoryTable;
