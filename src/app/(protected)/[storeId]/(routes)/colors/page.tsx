import prismadb from "@/lib/prismadb";
import ColorsClient from "./components/ColorsClient";

const ColorsPage = async ({ params }: { params: { storeId: string } }) => {
  const colors = await prismadb.color.findMany({
    where: {
      storeId: params.storeId,
    },

    orderBy: {
      createdAt: "desc",
    },
  });

  return (
    <>
      <ColorsClient colors={colors} />
    </>
  );
};

export default ColorsPage;
