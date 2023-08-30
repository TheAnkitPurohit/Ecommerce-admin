import prismadb from "@/lib/prismadb";
import CategoryClient from "./components/CategoryClient";

const CategoriesPage = async ({ params }: { params: { storeId: string } }) => {
  const categories: any = await prismadb.category.findMany({
    where: {
      storeId: params.storeId,
    },
    include: {
      billboard: true,
    },
    orderBy: {
      createdAt: "desc",
    },
  });

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
      <CategoryClient categories={categories} billboards={billboards} />
    </>
  );
};

export default CategoriesPage;
