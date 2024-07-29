import { Box, FormControlLabel, styled } from "@mui/material";
import React from "react";

export const SwitchMode = () => {

  return (
    <Box sx={{display: "flex", justifyContent:"end"}}>
      <FormControlLabel
        // control={<MaterialUISwitch sx={{ m: 1 }} defaultChecked />}
        label="MUI switch"
      />
    </Box>
  );
};
