import React, {useState} from "react";
import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table";

const columnHelper = createColumnHelper();
const columns = [
  columnHelper.accessor("firstName", {
    id: "firstName",
    header: () => "First Name",
    cell: (info) => info.getValue(),
  }),
  columnHelper.accessor("lastName", {
    id: "lastName",
    header: () => "Last Name",
    cell: (info) => info.getValue(),
  }),
  columnHelper.accessor("cardNumber", {
    id: "cardNumber",
    header: () => "Card Number",
    cell: (info) => info.getValue(),
  }),
  columnHelper.accessor("expirationMonth", {
    id: "expirationMonth",
    header: () => "Month",
    cell: (info) => info.getValue(),
  }),
  columnHelper.accessor("expirationYear", {
    id: "expirationYear",
    header: () => "Year",
    cell: (info) => info.getValue(),
  }),
  columnHelper.accessor("cvc", {
    id: "cvcNumber",
    header: () => "CVC",
    cell: (info) => info.getValue(),
  }),
  columnHelper.accessor("provider", {
    id: "cardProvider",
    header: () => "Provider",
    cell: (info) => info.getValue(),
  }),
  columnHelper.accessor("dateSubmitted", {
    id: "createdAt",
    header: () => "Date Submitted",
    cell: (info) => info.getValue(),
  }),
];

const defaultData = [
  {
    _id: "649c6776f8a33137155c461e",
    firstName: "Arent",
    lastName: "Gertrude",
    cardProvider: "Bonjour",
    cardNumber: "3204812",
    expirationMonth: "11",
    expirationYear: "27",
    cvcNumber: "125",
    createdAt: "2023-06-28T17:01:42.630Z",
    updatedAt: "2023-06-28T17:01:42.630Z",
    __v: 0,
  },
];

const TableView = () => {
  const [userData, setUserData] = useState(...defaultData);
  const table = useReactTable({
    userData,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  //   console.log(userData);

  return (
    <div>
      <table>
        <thead>
          {table.getHeaderGroups().map((headerGroup) => (
            <tr key={headerGroup.id}>
              {headerGroup.headers.map((header) => (
                <th key={header.id}>
                  {header.isPlaceHolder
                    ? null
                    : flexRender(
                        header.column.columnDef.header,
                        header.getContext()
                      )}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody>
          {table.getRowModel().rows.map((row) => (
            <tr key={row.id}>
              {row.getVisibleCells().map((cell) => (
                <td key={cell.id}>
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TableView;
