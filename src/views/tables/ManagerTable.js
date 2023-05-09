import React from "react";

import { Card, CardContent, Box, Typography } from "@material-ui/core";
import Manager from "../dashboards/dashboard1-components/ManagerList";


const ManagerTable = () => {
  return (
    <Box>
      <Card variant="outlined">
        <CardContent>
          <Typography variant="h3">Managers List</Typography>
          <Box
            sx={{
              overflow: {
                xs: "auto",
                sm: "unset",
              },
            }}
          >
            <Manager />
          </Box>
        </CardContent>
      </Card>
    </Box>
  );
};

export default ManagerTable;
