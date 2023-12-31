import { Box, Container, Divider, Stack } from "@mui/material";

import prismadb from "@/lib/prismadb";

import MainHeading from "@/components/headings/MainHeading";
import NewBillboard from "./components/NewBillboard";
import BillBoardTable from "./components/BillBoardTable";

const StoreBillboardsPage = async ({
  params,
}: {
  params: { storeId: string };
}) => {
  const billboards = await prismadb.billboard.findMany({
    where: {
      storeId: params.storeId,
    },
    orderBy: {
      createdAt: "desc",
    },
  });

  return (
    <>
      <Stack
        spacing={2}
        sx={{ pb: 2 }}
        direction={"row"}
        justifyContent={"space-between"}
        alignItems={"center"}
      >
        <MainHeading
          title={`Billboards(${billboards?.length})`}
          subtitle="Manage Billboards for your store"
        />

        <NewBillboard />
      </Stack>

      <Divider color="white" />

      <Box>
        <BillBoardTable data={billboards} />
      </Box>
    </>
  );
};

export default StoreBillboardsPage;
