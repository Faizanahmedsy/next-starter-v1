import React, { useState } from "react";
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
import { ChevronDown } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import { DataTableFacetedFilter } from "./MultiSelect";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { DataTablePagination } from "./pagination";

interface SelectOption {
  label: string;
  value: string;
}

interface DynamicTableProps<T> {
  data: T[];
  columns: ColumnDef<T>[];
  filterOptions?: {
    column: string;
    options: { label: string; value: string }[];
  }[];
  searchColumn?: string;
  totalCount: number;
  pageSize: number | undefined;
  pageIndex: number;
  onPaginationChange: (pageIndex: number, pageSize: number) => void;
  selectFilters?: {
    key: string;
    placeholder: string;
    options: SelectOption[];
    onSelectChange: (value: string) => void;
  }[];
}

export function DynamicTable<T>({
  data,
  columns,
  filterOptions,
  searchColumn,
  totalCount,
  pageSize = 10,
  pageIndex,
  onPaginationChange,
  selectFilters,
}: DynamicTableProps<T>) {
  const [sorting, setSorting] = useState<SortingState>([]);
  const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([]);
  const [columnVisibility, setColumnVisibility] = useState<VisibilityState>({});
  const [rowSelection, setRowSelection] = useState({});

  // State to track selected values for each select filter
  const [selectedFilterValues, setSelectedFilterValues] = useState<{
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
        pageIndex,
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
        onPaginationChange(newPagination.pageIndex, newPagination.pageSize);
      } else {
        onPaginationChange(updater.pageIndex, updater.pageSize);
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

  return (
    <div className="w-full">
      <div className="flex items-center py-4 gap-4">
        {searchColumn && (
          <Input
            placeholder={`Filter ${searchColumn}...`}
            value={
              (table.getColumn(searchColumn)?.getFilterValue() as string) ?? ""
            }
            onChange={(event) =>
              table.getColumn(searchColumn)?.setFilterValue(event.target.value)
            }
            className="max-w-sm"
          />
        )}

        {/* Dynamically render multiple select dropdowns */}
        {selectFilters?.map((selectFilter) => (
          <Select
            key={selectFilter.key}
            onValueChange={(value) =>
              handleSelectChange(selectFilter.key, value)
            }
          >
            <SelectTrigger className="w-[200px]">
              <SelectValue placeholder={selectFilter.placeholder} />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                {selectFilter.options.map((option) => (
                  <SelectItem key={option.value} value={option.value}>
                    {option.label}
                  </SelectItem>
                ))}
              </SelectGroup>
            </SelectContent>
          </Select>
        ))}

        {filterOptions?.map((filter) => (
          <DataTableFacetedFilter
            key={filter.column}
            column={table.getColumn(filter.column)}
            title={filter.column}
            options={filter.options}
          />
        ))}

        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" className="ml-auto">
              Columns <ChevronDown className="ml-2 h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            {table
              .getAllColumns()
              .filter((column) => column.getCanHide())
              .map((column) => {
                return (
                  <DropdownMenuCheckboxItem
                    key={column.id}
                    className="capitalize"
                    checked={column.getIsVisible()}
                    onCheckedChange={(value) =>
                      column.toggleVisibility(!!value)
                    }
                  >
                    {column.id}
                  </DropdownMenuCheckboxItem>
                );
              })}
          </DropdownMenuContent>
        </DropdownMenu>
      </div>

      <div className="rounded-md border">
        <Table>
          <TableHeader className="bg-gray-50 h-[50px]">
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
            {table.getRowModel().rows?.length ? (
              table.getRowModel().rows.map((row) => (
                <TableRow
                  key={row.id}
                  data-state={row.getIsSelected() && "selected"}
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
          </TableBody>
        </Table>
      </div>
      <DataTablePagination table={table} />
    </div>
  );
}
