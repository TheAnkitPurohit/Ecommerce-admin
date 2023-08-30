import prismadb from "@/lib/prismadb";
import ProductsClient from "./components/ProductsClient";
import { ProductTypes } from "@/app/(protected)/store.types";

const ProductsPage = async ({ params }: { params: { storeId: string } }) => {
  const products: any = await prismadb.product.findMany({
    where: {
      storeId: params.storeId,
    },
    include: {
      category: true,
      size: true,
      color: true,
    },
    orderBy: {
      createdAt: "desc",
    },
  });

  return (
    <div>
      <ProductsClient products={products} />
    </div>
  );
};

export default ProductsPage;
