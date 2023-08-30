"use client";

import { useParams, useRouter } from "next/navigation";

import { Box, Divider, Stack } from "@mui/material";
import { Category, Color, Product, Size } from "@prisma/client";
import { GridColDef, GridValueGetterParams } from "@mui/x-data-grid";
import { format } from "date-fns";

import MainHeading from "@/components/headings/MainHeading";
import CreateButton from "@/components/button/CreateButton";
import DataTableComponent from "@/components/table/DataTableComponent";
import { formatter } from "@/lib/utils";
import { ProductTypes } from "@/app/(protected)/store.types";

interface ProductsClientProps {
  products: ProductTypes[];
}

const ProductsClient = ({ products }: ProductsClientProps) => {
  const params = useParams();
  const router = useRouter();

  const columns: GridColDef[] = [
    { field: "name", headerName: "Name", width: 200 },
    { field: "price", headerName: "Price", width: 200 },
    { field: "category", headerName: "Category", width: 200 },
    { field: "size", headerName: "Size", width: 200 },
    { field: "color", headerName: "Color", width: 200 },
    {
      field: "date",
      headerName: "Date",
      width: 530,
      valueGetter: (params: GridValueGetterParams) =>
        `${params.row.date && format(params.row.date, "MMMM do, yyyy")} `,
    },
  ];

  console.log({ products });

  const data = products.map((item) => ({
    id: item.id,
    name: item.name,
    price: formatter.format(item.price),
    category: item.category.name,
    size: item.size.name,
    color: item.color.value,
    date: item.createdAt,
    isFeatured: item.isFeatured,
    isArchived: item.isArchived,
  }));

  const handleRowClick = (params: any) => {
    console.log(params.row);
    // SetColor(params.row);
    // handleClickOpen();
  };

  const handleCreateProduct = () => {
    router.push(`/${params.storeId}/products/new`);
  };

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
          title={`Products(${products?.length})`}
          subtitle="Manage products for your store"
        />

        <CreateButton text="Product" onClick={handleCreateProduct} />
      </Stack>

      <Divider color="white" />

      <Box>
        <DataTableComponent
          data={data}
          columns={columns}
          handleRowClick={handleRowClick}
        />
      </Box>
    </>
  );
};

export default ProductsClient;
