"use client";

import { useState } from "react";
import { Box, Container, Divider, Stack } from "@mui/material";
import { Billboard, Category } from "@prisma/client";
import { GridColDef, GridValueGetterParams } from "@mui/x-data-grid";
import { format } from "date-fns";

import MainHeading from "@/components/headings/MainHeading";
import CreateButton from "@/components/button/CreateButton";
import CategoryFormModal from "./CategoryFormModal";
import DataTableComponent from "@/components/table/DataTableComponent";
import { CategoryBillBoard } from "../../../../store.types";

interface CategoryClientProps {
  categories: CategoryBillBoard[];
  billboards: Billboard[];
}

const CategoryClient = ({ categories, billboards }: CategoryClientProps) => {
  const [open, setOpen] = useState<boolean>(false);
  const [category, setCategory] = useState<CategoryBillBoard | null>(null);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const columns: GridColDef[] = [
    { field: "name", headerName: "Name", width: 200 },
    {
      field: "date",
      headerName: "Date",
      width: 530,
      valueGetter: (params: GridValueGetterParams) =>
        `${params.row.date && format(params.row.date, "MMMM do, yyyy")} `,
    },
  ];

  const data = categories.map((category) => ({
    id: category.id,
    name: category.name,
    date: category.createdAt,
    billboard: category.billboard,
  }));

  const handleRowClick = (params: any) => {
    setCategory(params.row);
    handleClickOpen();
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
          title={`Categories(${categories?.length})`}
          subtitle="Manage Categories for your store"
        />

        <CreateButton text="Category" onClick={handleClickOpen} />
      </Stack>

      <Divider color="white" />

      <Box>
        <DataTableComponent
          data={data}
          columns={columns}
          handleRowClick={handleRowClick}
        />
      </Box>

      {open && (
        <CategoryFormModal
          open={open}
          handleClose={handleClose}
          category={category}
          setCategory={setCategory}
          billboards={billboards}
        />
      )}
    </>
  );
};

export default CategoryClient;
