import * as React from "react";

import { UserButton, auth } from "@clerk/nextjs";
import { redirect, useParams } from "next/navigation";

import { Box, Typography, AppBar, Toolbar, Container } from "@mui/material";
import AdbIcon from "@mui/icons-material/Adb";
import MainNav from "./MainNav";
import prismadb from "@/lib/prismadb";
import { Store } from "@prisma/client";

const Navbar = async ({ store }: { store: Store }) => {
  const { userId } = auth();

  if (!userId) {
    redirect("/sign-in");
  }

  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <AdbIcon sx={{ display: { xs: "none", md: "flex" }, mr: 1 }} />
          <Typography
            variant="h6"
            noWrap
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            {store?.name}
          </Typography>

          <MainNav />

          <Box sx={{ flexGrow: 0 }}>
            <UserButton afterSignOutUrl="/" />
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Navbar;
