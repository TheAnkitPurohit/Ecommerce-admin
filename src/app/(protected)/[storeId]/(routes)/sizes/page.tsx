import prismadb from "@/lib/prismadb";
import SizesClient from "./components/SizesClient";

const CategoriesPage = async ({ params }: { params: { storeId: string } }) => {
  const sizes = await prismadb.size.findMany({
    where: {
      storeId: params.storeId,
    },

    orderBy: {
      createdAt: "desc",
    },
  });

  return (
    <>
      <SizesClient sizes={sizes} />
    </>
  );
};

export default CategoriesPage;
