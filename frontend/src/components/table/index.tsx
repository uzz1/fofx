import React, { useMemo, useState } from 'react';
import MaterialReactTable, {
  MRT_ColumnDef,
  MRT_ColumnFiltersState,
  MRT_PaginationState,
  MRT_SortingState,
  MRT_RowSelectionState,
} from 'material-react-table';
import {Button, Container} from "@mui/material";
import FileDownloadIcon from '@mui/icons-material/FileDownload';
import "./table.css";

import { useDispatch, useSelector } from "react-redux";
import { getStocks } from "redux/actions/stock";
import { RootState } from "redux/reducers";
import { IStock } from "redux/types/stock";
import { IStockValue } from "redux/types/stock-values";
import { getStockValues } from 'redux/actions/stock-values';


type Stock = {
  id: any;
  stock: string;
  industry: string;
  sector: string;
  currency_code: string;
};

type StockValue = {
    stock_id: any;
    date: string;
    value: number;
    stock_name: any
  };

const StockTable = () => {
  //const stockData = require("../../data/Stocks.json")
  //const stockValues = require("../../data/Stock Values.json")
  //data and fetching state
  const [data, setData] = useState<IStock[]>([]);
  const [values, setValues] = useState<StockValue[]>([]);
  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isRefetching, setIsRefetching] = useState(false);
  const [rowCount, setRowCount] = useState();
  const [rowSelection, setRowSelection] = useState<MRT_RowSelectionState>({});
  const [filteredValues, setFilteredValues] = useState<StockValue[]>();
  const [activeStock, setActiveStock] = useState<String>("");
  const dispatch = useDispatch();
  const stock = useSelector((state: RootState) => state.stock);
  const stockValue = useSelector((state: RootState) => state.stockValue);

  const firstUpdate = React.useRef(true);
  React.useLayoutEffect(() => {
    if (firstUpdate.current) {
      firstUpdate.current = false;
      return;
    }
   
    filterValuesFunction() 
},[rowSelection]);

React.useEffect(() => {
    dispatch(getStocks());

  }, [dispatch]);

  React.useEffect(() => {
    setData(() => stock?.stocks);

  }, [stock]);

  React.useEffect(() => {
    dispatch(getStockValues());

  }, [dispatch]);

  React.useEffect(() => {
    setValues(() => stockValue?.stockValues);
    console.log(stockValue)
  }, [stockValue]);

  const [columnFilters, setColumnFilters] = useState<MRT_ColumnFiltersState>(
    [],
  );
  const [globalFilter, setGlobalFilter] = useState('');
  const [sorting, setSorting] = useState<MRT_SortingState>([]);
  const [pagination, setPagination] = useState<MRT_PaginationState>({
    pageIndex: 0,
    pageSize: 5,
  });
  const [pagination2, setPagination2] = useState<MRT_PaginationState>({
    pageIndex: 0,
    pageSize: 5,
  });


  const columns = useMemo<MRT_ColumnDef<Stock>[]>(
    () => [
      {
        accessorKey: 'id',
        header: 'ID',
        size: 100
      },
      {
        accessorKey: 'stock',
        header: 'Stock Name',
      },
      {
        accessorKey: 'industry',
        header: 'Industry',
      },
      {
        accessorKey: 'sector',
        header: 'Sector',
      },
      {
        accessorKey: 'currency_code',
        header: 'Currency Code',
        size: 100
      },
    ] as MRT_ColumnDef<(typeof data)[0]>[],
    [],
  );

  const valueColumns = useMemo<MRT_ColumnDef<StockValue>[]>(
    () => [
    
      {
        accessorKey: 'stock_name',
        header: 'Stock',
        enableSorting: false,
        enableColumnFilter: false
      },
      {
        accessorKey: 'date',
        header: 'Date',
        enableSorting: false,
      },
      {
        accessorKey: 'value',
        header: 'Value',
      },
     
    ],
    [],
  );


const filterValuesFunction = () => {
    let stockId = Number(Object.keys(rowSelection)[0])
    let stockActive = data.filter(
        (element) => element.id === stockId)
        
        if (!Object.keys(rowSelection)[0]) {
            setActiveStock("Select a Stock")
        } else  {
            setActiveStock(stockActive[0].stock)

        } 
    let newArray = values.filter(
        (element) => element.stock_id === stockId)
    
    const newArr = newArray.map(v => ({...v, stock_name: stockActive[0].stock}))
    setFilteredValues(newArr)

}
const handleExportData = () => {
    const jsonString = `data:text/json;chatset=utf-8,${encodeURIComponent(
        JSON.stringify(filteredValues)
      )}`;
      const link = document.createElement("a");
      link.href = jsonString;
      link.download = "data.json";
  
      link.click();
}



  return (
    <Container className="table__div">
        <div className='stock__header__div'>
        <h1>Stocks</h1>
        </div>
        <div className='stock__div'>     
        <MaterialReactTable
      columns={columns}
      data={data}
      initialState={{ showColumnFilters: true, density: 'compact' }}
      enableRowSelection
      getRowId={(row)=> row.id}
      muiTableBodyRowProps={({ row }) => ({
        onClick: row.getToggleSelectedHandler(),
        sx: { cursor: 'pointer' },
      })}
      onRowSelectionChange={setRowSelection} 
      enableSelectAll={false}
      enableMultiRowSelection={false}
      enableColumnFilters
      muiToolbarAlertBannerProps={
        isError
          ? {
              color: 'error',
              children: 'Error loading data',
            }
          : undefined
      }
      onColumnFiltersChange={setColumnFilters}
      onGlobalFilterChange={setGlobalFilter}
    //   onPaginationChange={setPagination}
      onSortingChange={setSorting}
      rowCount={rowCount}
      state={{
        columnFilters,
        globalFilter,
        isLoading,
        pagination,
        showAlertBanner: isError,
        showProgressBars: isRefetching,
        sorting,
        rowSelection
      }}
      onPaginationChange={setPagination}
      enableColumnResizing
      enableDensityToggle={false}
      enableStickyHeader
      enableGlobalFilter
      enableSorting
    />
    </div>
{filteredValues && rowSelection?
<>
<div className='stock__value__header__div'>
<h1>{activeStock}</h1>
{Object.keys(rowSelection)[0]?
<Button
                    style={{backgroundColor: "#400CCC"}}
                    onClick={handleExportData}
                    startIcon={<FileDownloadIcon />}
                    variant="contained"
                  >
                    Export Data
                  </Button>
                  :null}
        </div>
        <div className='stock__value__div'>


<MaterialReactTable
      columns={valueColumns}
      data={filteredValues}
      initialState={{ showColumnFilters: true, density: 'compact' }}      
      muiToolbarAlertBannerProps={
        isError
          ? {
              color: 'error',
              children: 'Error loading data',
            }
          : undefined
      }
      onColumnFiltersChange={setColumnFilters}
      onGlobalFilterChange={setGlobalFilter}
      onSortingChange={setSorting}
      rowCount={rowCount}
      state={{
        columnFilters,
        globalFilter,
        isLoading,
        pagination: pagination2,
        showAlertBanner: isError,
        showProgressBars: isRefetching,
        sorting,
      }}
      onPaginationChange={setPagination2}
      enableColumnResizing
      enableDensityToggle={false}
      enableStickyHeader
      enableGlobalFilter
      enableColumnFilters
      enableSorting

      
    />
    </div>

    </>
     :<h2>Select a stock to display values</h2>} 
    </Container>
   
  );
};

export default StockTable;
