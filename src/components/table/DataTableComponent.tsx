import { DataGrid } from "@mui/x-data-grid";
import React from "react";

interface DataTableComponentProps {
  data: any[];
  columns: any[];
  handleRowClick: (params: any) => void;
}

const DataTableComponent = ({
  data,
  columns,
  handleRowClick,
}: DataTableComponentProps) => {
  return (
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
      disableRowSelectionOnClick
    />
  );
};

export default DataTableComponent;
