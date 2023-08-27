"use client";

import StoreSwitcher from "@/components/header/StoreSwitcher";
import { Box, Typography } from "@mui/material";
import { Store } from "@prisma/client";

interface Props {
  stores: Store[];
}

const ChangeStore = ({ stores }: Props) => {
  return (
    <Box sx={{ display: "flex", gap: 4 }}>
      <Typography variant="h5" sx={{ fontWeight: 500 }}>
        Change Store
      </Typography>

      <StoreSwitcher items={stores} />
    </Box>
  );
};

export default ChangeStore;
