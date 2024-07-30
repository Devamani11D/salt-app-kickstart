import { useDensity, useTheme } from "@salt-ds/core";
import { LicenseManager } from "ag-grid-enterprise";
import { useMemo, useRef, useState } from "react";
// Set the license key for ag-grid-enterprise
LicenseManager.setLicenseKey("your license key");
// Helps to set className, rowHeight and headerHeight depending on the current density
export function useAgGridHelpers(compact = false) {
  const apiRef = useRef();
  const [isGridReady, setGridReady] = useState(false);
  const density = useDensity();
  const { mode } = useTheme();
  const [rowHeight, listItemHeight] = useMemo(() => {
    switch (density) {
      case compact && "high":
        return [20, 20];
      case "high":
        return [24, 24];
      case "medium":
        return [36, 36];
      case "low":
        return [48, 48];
      case "touch":
        return [60, 60];
      default:
        return [20, 24];
    }
  }, [density, compact]);

  const className = `ag-theme-salt${compact && density === "high" ? "-compact" : ""}-${mode}`;
  const onGridReady = ({ api, columnApi }) => {
    apiRef.current = { api, columnApi };
    api.sizeColumnsToFit();
    setGridReady(true);
  };
  return {
    containerProps: {
      className,
      style: { height: 500, width: "100%" },
    },
    agGridProps: {
      onGridReady,
      rowHeight,
      headerHeight: rowHeight,
      suppressMenuHide: true,
      defaultColDef: {
        filter: true,
        resizable: true,
        sortable: true,
        filterParams: {
          cellHeight: listItemHeight,
        },
      },
    },
    isGridReady,
    api: apiRef.current?.api,
    columnApi: apiRef.current?.columnApi,
  };
}
