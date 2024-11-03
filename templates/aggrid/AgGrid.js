import { useDensity, useTheme } from "@salt-ds/core";
import { AgGridReact } from "ag-grid-react";
import { type ReactElement, useMemo } from "react";
import { defaultData } from "./data.js";
import "ag-grid-community/styles/ag-grid.css";
import "@salt-ds/ag-grid-theme/salt-ag-theme.css";
import { useAgGridHelpers } from "./useAgGridHelpers";

const columnDefs = [
  {
    headerName: "Name",
    field: "name",
    filterParams: {
      buttons: ["reset", "apply"], // Filter buttons for reset and apply
    },
    editable: false,
    autoHeight: true,
  },
  {
    headerName: "Code",
    field: "code",
  },
  {
    headerName: "Capital",
    field: "capital",
  },
];

const AgGridComponent = () => {
  const { mode } = useTheme();
  const density = useDensity();
  const { agGridProps, containerProps } = useAgGridHelpers();

  const onGridReady = ({ api }) => {
    api.sizeColumnsToFit();
  };

  const rowHeight = useMemo(() => {
    switch (density) {
      case "high":
        return 24;
      case "medium":
        return 36;
      case "low":
        return 48;
      case "touch":
        return 60;
      default:
        return 20;
    }
  }, [density]);

  return (
    <div
      {...containerProps}
      className="ag-theme-salt-variant-zebra"
      style={{
        height: 500,
        width: "800px", // Adjust width similar to login page
        margin: "auto", // Center align the grid horizontally
        padding: "20px", // Add padding to give some space
        border: "1px solid #ccc", // Optional: add border like in login form
        borderRadius: "8px", // Optional: round the corners
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)", // Optional: box-shadow for a subtle elevation
        background:
        "linear-gradient(135deg, var(--salt-color-blue-10) 0%, var(--salt-color-purple-20) 100%)",
      }}
    >
      <h2 style={{ textAlign: "center", marginBottom: "20px" }}>
        Data Grid Form
      </h2>
      <AgGridReact
        columnDefs={columnDefs}
        rowData={defaultData}
        rowSelection="single"
        enableRangeSelection={true}
        onGridReady={onGridReady}
        rowHeight={rowHeight}
        {...agGridProps}
      />
    </div>
  );
};
export default AgGridComponent;