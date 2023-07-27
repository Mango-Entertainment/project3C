import { useState } from "react";
import useFetch from "../hooks/useFetch";
import {
  useReactTable,
  flexRender,
  getCoreRowModel,
  getSortedRowModel,
  getPaginationRowModel,
  getFilteredRowModel,
} from "@tanstack/react-table";
import Loading from "./Loading";
import SERVER_URL from "../utils/server_url.js";

const TableView = ({ columns }) => {
  const { data, loading } = useFetch(`${SERVER_URL}/api/userData`);

  const [sorting, setSorting] = useState([]);
  const [filter, setFilter] = useState("");

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    state: {
      sorting: sorting,
      globalFilter: filter,
    },
    onSortingChange: setSorting,
  });

  return loading ? (
    <Loading />
  ) : (
    <div className="w-full">
      <div>
        Filter:
        <input
          type="text"
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
          className="border ml-2"
        />
      </div>
      <table className="border-collapse border-spacing-0 w-full table border border-solid border-lightGrayViolet mt-2">
        <thead>
          {table.getHeaderGroups().map((headerGroup) => (
            <tr key={headerGroup.id} className="border border-b-gradient-a">
              {headerGroup.headers.map((header) => (
                <th
                  key={header.id}
                  onClick={header.column.getToggleSortingHandler()}
                  className="border p-2 table-cell text-left align-top"
                >
                  {header.isPlaceholder ? null : (
                    <div
                      className={`flex justify-between pr-2 
                    ${header.column.getCanSort() ? "cursor-pointer" : ""}
                    `}
                    >
                      <div>
                        {flexRender(
                          header.column.columnDef.header,
                          header.getContext()
                        )}
                      </div>
                      <div>
                        {header.column.getCanSort()
                          ? { asc: "↑", desc: "↓", false: "↕" }[
                              header.column.getIsSorted() ?? null
                            ]
                          : null}
                      </div>
                    </div>
                  )}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody>
          {table.getRowModel().rows.map((row) => (
            <tr key={row.id} className="odd:bg-[#eee] even:bg-[#fff]">
              {row.getVisibleCells().map((cell) => (
                <td
                  key={cell.id}
                  className=" p-2 table-cell text-left align-top"
                >
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
      <div className="w-full mt-2">
        <button
          className="bg-[#ccc] hover:bg-[#eee] font-bold py-2 px-2 lg:px-4 rounded border text-xs lg:text-base"
          onClick={() => table.setPageIndex(0)}
        >
          First Page
        </button>
        <button
          className="bg-[#ccc] hover:bg-[#eee] font-bold py-2 px-2 lg:px-4 rounded border text-xs lg:text-base ml-1 disabled:bg-[#ddd] disabled:text-[#999]"
          onClick={() => table.previousPage()}
          disabled={!table.getCanPreviousPage()}
        >
          Previous Page
        </button>
        <button
          className="bg-[#ccc] hover:bg-[#eee] font-bold py-2 px-2 lg:px-4 rounded border text-xs lg:text-base ml-1 disabled:bg-[#ddd] disabled:text-[#999]"
          onClick={() => table.nextPage()}
          disabled={!table.getCanNextPage()}
        >
          Next Page
        </button>
        <button
          className={
            "bg-[#ccc] hover:bg-[#eee] font-bold py-2 px-2 lg:px-4 rounded border text-xs lg:text-base ml-1"
          }
          onClick={() => table.setPageIndex(table.getPageCount() - 1)}
        >
          Last Page
        </button>
      </div>
    </div>
  );
};

export default TableView;
