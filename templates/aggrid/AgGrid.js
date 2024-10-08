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
      buttons: ["reset", "apply"],
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

export const Default = () => {
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
      style={{ height: 500, width: "100%" }}
    >
      <AgGridReact
        columnDefs={columnDefs}
        rowData={defaultData}
        rowSelection="single"
        enableRangeSelection={true}
        onGridReady={onGridReady}
        rowHeight={rowHeight}
      />
    </div>
  );
};