import React from "react";

import { Card, CardContent, Box, Typography } from "@material-ui/core";

import ProductTable from "../dashboards/dashboard1-components/Product"

const Product = () => {
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
            <ProductTable />
          </Box>
        </CardContent>
      </Card>
    </Box>
  );
};

export default Product;
