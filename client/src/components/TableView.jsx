import { useState } from "react";
import {
  useReactTable,
  flexRender,
  getCoreRowModel,
  getSortedRowModel,
  getPaginationRowModel,
  getFilteredRowModel,
} from "@tanstack/react-table";

const TableView = ({ data, columns }) => {
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

  return (
    <div className="flex justify-center">
      <div className="container">
        <div>
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
                        <div>
                          {flexRender(
                            header.column.columnDef.header,
                            header.getContext()
                          )}
                          {
                            { asc: "🔼", desc: "🔽" }[
                              header.column.getIsSorted() ?? null
                            ]
                          }
                        </div>
                      )}
                    </th>
                  ))}
                </tr>
              ))}
            </thead>
            <tbody>
              {table.getRowModel().rows.map((row) => (
                <tr key={row.id} className="odd:bg-[#ddd] even:bg-[#bbb]">
                  {row.getVisibleCells().map((cell) => (
                    <td
                      key={cell.id}
                      className="border p-2 table-cell text-left align-top"
                    >
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
          <div className="mt-2">
            <button
              className="bg-lightGrayViolet hover:bg-darkGrayViolet font-bold py-2 px-4 rounded border"
              onClick={() => table.setPageIndex(0)}
            >
              First Page
            </button>
            <button
              className="bg-lightGrayViolet hover:bg-darkGrayViolet font-bold py-2 px-4 rounded border ml-1  disabled:bg-grayText disabled:text-grayText"
              onClick={() => table.previousPage()}
              disabled={!table.getCanPreviousPage()}
            >
              Previous Page
            </button>
            <button
              className="bg-lightGrayViolet hover:bg-darkGrayViolet font-bold py-2 px-4 rounded border ml-1  disabled:bg-grayText disabled:text-grayText"
              onClick={() => table.nextPage()}
              disabled={!table.getCanNextPage()}
            >
              Next Page
            </button>
            <button
              className={
                "bg-lightGrayViolet hover:bg-darkGrayViolet font-bold py-2 px-4 rounded border ml-1"
              }
              onClick={() => table.setPageIndex(table.getPageCount() - 1)}
            >
              Last Page
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TableView;
