"use client";

import { Box, Typography } from "@mui/material";

interface Props {
  title: string;
  subtitle: string;
}

const MainHeading = ({ title, subtitle }: Props) => {
  return (
    <Box>
      <Typography variant="h4" component="h1" sx={{ fontWeight: 700 }}>
        {title}
      </Typography>
      <Typography variant="body2">{subtitle}</Typography>
    </Box>
  );
};

export default MainHeading;
