"use client";

import { useState } from "react";
import { Box, Divider, Stack } from "@mui/material";
import { Size } from "@prisma/client";
import { GridColDef, GridValueGetterParams } from "@mui/x-data-grid";
import { format } from "date-fns";

import MainHeading from "@/components/headings/MainHeading";
import CreateButton from "@/components/button/CreateButton";
import ColorFormModal from "./SizeFormModal";
import DataTableComponent from "@/components/table/DataTableComponent";

interface SizesClientProps {
  sizes: Size[];
}

const SizesClient = ({ sizes }: SizesClientProps) => {
  const [open, setOpen] = useState<boolean>(false);
  const [size, setSize] = useState<Size | null>(null);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const columns: GridColDef[] = [
    { field: "name", headerName: "Name", width: 200 },
    { field: "value", headerName: "Value", width: 200 },
    {
      field: "date",
      headerName: "Date",
      width: 530,
      valueGetter: (params: GridValueGetterParams) =>
        `${params.row.date && format(params.row.date, "MMMM do, yyyy")} `,
    },
  ];

  const data = sizes.map((size) => ({
    id: size.id,
    name: size.name,
    value: size.value,
    date: size.createdAt,
  }));

  const handleRowClick = (params: any) => {
    setSize(params.row);
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
          title={`Sizes(${sizes?.length})`}
          subtitle="Manage sizes for your store"
        />

        <CreateButton text="Size" onClick={handleClickOpen} />
      </Stack>

      {/* <Divider size="white" /> */}

      <Box>
        <DataTableComponent
          data={data}
          columns={columns}
          handleRowClick={handleRowClick}
        />
      </Box>

      {open && (
        <ColorFormModal
          open={open}
          handleClose={handleClose}
          size={size}
          setSize={setSize}
        />
      )}
    </>
  );
};

export default SizesClient;
