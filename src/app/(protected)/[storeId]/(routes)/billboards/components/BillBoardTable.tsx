"use client";

import * as React from "react";
import { DataGrid, GridColDef, GridValueGetterParams } from "@mui/x-data-grid";
import { format } from "date-fns";

import { Billboard } from "@prisma/client";
import { useParams, useRouter } from "next/navigation";

const columns: GridColDef[] = [
  { field: "label", headerName: "Label", width: 200 },
  {
    field: "date",
    headerName: "Date",
    width: 530,
    valueGetter: (params: GridValueGetterParams) =>
      `${
        params.row.createdAt && format(params.row.createdAt, "MMMM do, yyyy")
      } `,
  },
];

interface BillBoardTableProps {
  data: Billboard[];
}

const BillBoardTable = ({ data }: BillBoardTableProps) => {
  const router = useRouter();
  const parmas = useParams();

  const handleRowClick = (params: any) => {
    router.push(`/${parmas.storeId}/billboards/${params.row.id}`);
  };

  return (
    <div style={{ height: 400, width: "100%" }}>
      <DataGrid
        rows={data}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 5 },
          },
        }}
        pageSizeOptions={[5, 10]}
        onRowClick={handleRowClick}
      />
    </div>
  );
};

export default BillBoardTable;
