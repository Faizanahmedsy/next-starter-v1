import {
  ColumnDef,
  ColumnFiltersState,
  SortingState,
  VisibilityState,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table";
import React, { useState } from "react";

import { Input } from "@/components/ui/input";
// import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { cn } from "@/lib/utils";
import { Select } from "antd";
import { DataTableFacetedFilter } from "./MultiSelect";
import { DataTablePagination } from "./pagination";
import UILoader from "../loaders/UISpin";

interface SelectOption {
  label: string;
  value: string;
}

interface DynamicTableProps<T> {
  tableTitle?: string;
  data: T[];
  columns: ColumnDef<T>[];
  filterOptions?: {
    column: string;
    options: { label: string; value: string }[];
  }[];
  loading?: boolean;
  onSearchChange?: (searchTerm: string) => void;
  searchColumn?: string;
  searchPlaceholder?: string;
  totalCount: number;
  className?: string;
  moduleName?: string;
  pageSize?: number | undefined;
  pageIndex?: number;
  onPaginationChange?: (pageIndex: number, pageSize: number) => void;
  selectFilters?: {
    key: string;
    placeholder: string;
    options: SelectOption[];
    onSelectChange: (value: string) => void;
    defaultValue?: string;
  }[];
  handleRowClick?: (id: number) => void;
  dateRangePicker?: React.ReactNode;
  showPagination?: boolean;
}

export function DynamicTable<T>({
  showPagination = true,
  tableTitle,
  data,
  className,
  columns,
  filterOptions,
  searchColumn,
  searchPlaceholder,
  totalCount,
  pageSize = 10,
  pageIndex,
  onPaginationChange,
  selectFilters,
  dateRangePicker,
  loading,
  onSearchChange,
  moduleName,
  handleRowClick,
}: DynamicTableProps<T>) {
  const [sorting, setSorting] = useState<SortingState>([]);
  const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([]);
  const [columnVisibility, setColumnVisibility] = useState<VisibilityState>({});
  const [rowSelection, setRowSelection] = useState({});

  // State to track selected values for each select filter
  const [_, setSelectedFilterValues] = useState<{
    [key: string]: string;
  }>({});

  const table = useReactTable({
    data,
    columns,
    pageCount: Math.ceil(totalCount / (pageSize ?? 1)),
    state: {
      sorting,
      columnFilters,
      columnVisibility,
      rowSelection,
      pagination: {
        pageIndex: pageIndex ?? 0,
        pageSize,
      },
    },
    onSortingChange: setSorting,
    onColumnFiltersChange: setColumnFilters,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    onColumnVisibilityChange: setColumnVisibility,
    onRowSelectionChange: setRowSelection,
    manualPagination: true,
    onPaginationChange: (updater) => {
      if (typeof updater === "function") {
        const newPagination = updater(table.getState().pagination);
        onPaginationChange?.(newPagination.pageIndex, newPagination.pageSize);
      } else {
        onPaginationChange?.(updater.pageIndex, updater.pageSize);
      }
    },
    // state: {
    //   sorting,
    //   columnFilters,
    //   columnVisibility,
    //   rowSelection,
    // },
  });

  // Function to handle select change for each select filter
  const handleSelectChange = (key: string, value: string) => {
    setSelectedFilterValues((prev) => ({
      ...prev,
      [key]: value,
    }));

    // Call the corresponding onSelectChange handler for each select filter
    const selectFilter = selectFilters?.find((filter) => filter.key === key);
    if (selectFilter) {
      selectFilter.onSelectChange(value);
    }
  };
  console.log("columnscolumnscolumnscolumns", columns);
  return (
    <div className="w-full">
      <div className="text-base font-semibold text-slate-500">{tableTitle}</div>
      <div
        className={cn(
          "py-4 flex flex-wrap gap-4 justify-start sm:justify-start md:justify-start lg:gap-6",
          className
        )}
      >
        {moduleName && (
          <h2 className="mt-1">
            {moduleName} : {totalCount}
          </h2>
        )}

        {searchColumn && (
          <Input
            placeholder={searchPlaceholder}
            onChange={(event) => {
              const searchTerm = event.target.value;
              onSearchChange?.(searchTerm);
            }}
            style={{
              width: "100%",
              maxWidth: "300px",
              height: "42px",
            }}
            className="flex-shrink-0"
          />
        )}
        {selectFilters?.map((selectFilter) => (
          <Select
            key={selectFilter.key}
            onChange={(value) => handleSelectChange(selectFilter.key, value)}
            placeholder={selectFilter.placeholder}
            className="flex-shrink-0 w-full sm:w-[200px] lg:w-[250px] mb-3"
            allowClear
            defaultValue={selectFilter.defaultValue}
          >
            {selectFilter.options.map((option) => (
              <Select.Option key={option.value} value={option.value}>
                {option.label}
              </Select.Option>
            ))}
          </Select>
        ))}
        {filterOptions?.map((filter) => (
          <DataTableFacetedFilter
            key={filter.column}
            column={table.getColumn(filter.column)}
            title={filter.column}
            options={filter.options}
            className="flex-shrink-0 w-full sm:w-auto lg:w-[250px]"
          />
        ))}
        <div className="flex-shrink-0">{dateRangePicker}</div>
      </div>

      <div className="border rounded-lg overflow-auto">
        <Table>
          <TableHeader className="bg-gray-50  h-[50px] rounded-3xl">
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map((header) => (
                  <TableHead key={header.id}>
                    {header.isPlaceholder
                      ? null
                      : flexRender(
                          header.column.columnDef.header,
                          header.getContext()
                        )}
                  </TableHead>
                ))}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody>
            {loading ? (
              <TableRow>
                <TableCell
                  colSpan={columns.length}
                  className="h-24 text-center"
                >
                  <UILoader />
                </TableCell>
              </TableRow>
            ) : (
              <>
                {table.getRowModel().rows?.length ? (
                  table.getRowModel().rows.map((row) => (
                    <TableRow
                      key={row.id}
                      data-state={row.getIsSelected() && "selected"}
                      className="cursor-pointer"
                      onClick={() => {
                        let originalData: any = row?.original;
                        handleRowClick?.(Number(originalData?.id));
                      }}
                    >
                      {row.getVisibleCells().map((cell) => (
                        <TableCell key={cell.id}>
                          {flexRender(
                            cell.column.columnDef.cell,
                            cell.getContext()
                          )}
                        </TableCell>
                      ))}
                    </TableRow>
                  ))
                ) : (
                  <TableRow>
                    <TableCell
                      colSpan={columns.length}
                      className="h-24 text-center"
                    >
                      No results.
                    </TableCell>
                  </TableRow>
                )}
              </>
            )}
          </TableBody>
        </Table>
      </div>
      {showPagination && (
        <DataTablePagination table={table} totalCount={totalCount} />
      )}
    </div>
  );
}
