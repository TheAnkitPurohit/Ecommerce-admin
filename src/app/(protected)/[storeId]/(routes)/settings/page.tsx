import { Box, Container, Divider, Stack } from "@mui/material";

import { auth } from "@clerk/nextjs";
import { redirect } from "next/navigation";
import prismadb from "@/lib/prismadb";

import NewStore from "./components/NewStore";
import ChangeStore from "./components/ChangeStore";
import UpdateStore from "./components/UpdateStore";
import DeleteStore from "./components/DeleteStore";

import MainHeading from "@/components/headings/MainHeading";

const StoreSettingsPage = async () => {
  const { userId } = auth();

  if (!userId) {
    redirect("/sign-in");
  }

  const stores = await prismadb.store.findMany({
    where: {
      userId,
    },
  });

  return (
    <Container maxWidth="xl">
      <Stack
        spacing={2}
        sx={{ pb: 2 }}
        direction={"row"}
        justifyContent={"space-between"}
        alignItems={"center"}
      >
        <MainHeading title="Settings" subtitle="Manage Store" />

        <NewStore />
      </Stack>

      <Divider color="white" />

      <Box my={4}>
        <ChangeStore stores={stores} />
      </Box>

      <Divider color="white" />

      <Box my={4}>
        <UpdateStore />
      </Box>

      <Divider color="white" />

      <Box my={4}>
        <DeleteStore />
      </Box>
    </Container>
  );
};

export default StoreSettingsPage;
