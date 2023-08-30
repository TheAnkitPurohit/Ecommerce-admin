"use client";

import { useState } from "react";
import { Box, Divider, Stack } from "@mui/material";
import { Color } from "@prisma/client";
import { GridColDef, GridValueGetterParams } from "@mui/x-data-grid";
import { format } from "date-fns";

import MainHeading from "@/components/headings/MainHeading";
import CreateButton from "@/components/button/CreateButton";
import ColorFormModal from "./ColorFormModal";
import DataTableComponent from "@/components/table/DataTableComponent";

interface ColorsClientProps {
  colors: Color[];
}

const ColorsClient = ({ colors }: ColorsClientProps) => {
  const [open, setOpen] = useState<boolean>(false);
  const [color, SetColor] = useState<Color | null>(null);

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

  const data = colors.map((color) => ({
    id: color.id,
    name: color.name,
    value: color.value,
    date: color.createdAt,
  }));

  const handleRowClick = (params: any) => {
    SetColor(params.row);
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
          title={`Colors(${colors?.length})`}
          subtitle="Manage colors for your store"
        />

        <CreateButton text="Color" onClick={handleClickOpen} />
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
        <ColorFormModal
          open={open}
          handleClose={handleClose}
          color={color}
          SetColor={SetColor}
        />
      )}
    </>
  );
};

export default ColorsClient;
