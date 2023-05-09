import React from "react";

import { Card, CardContent, Box, Typography } from "@material-ui/core";

import Table from "../dashboards/dashboard1-components/Table";

const Supermarket = () => {
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
            <Table />
          </Box>
        </CardContent>
      </Card>
    </Box>
  );
};

export default Supermarket;
