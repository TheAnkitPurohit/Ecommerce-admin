import prismadb from "@/lib/prismadb";
import { Box } from "@mui/material";
import BillboardForm from "./components/BillboardForm";

const page = async ({
  params,
}: {
  params: {
    storeId: string;
    billboardId: string;
  };
}) => {
  const billboard = await prismadb.billboard.findUnique({
    where: {
      id: params.billboardId,
    },
  });

  return (
    <Box>
      <BillboardForm initialData={billboard} />
    </Box>
  );
};

export default page;
