export default function financialTableData() {
  return {
    columns: [
      { Header: "ID", accessor: "id", align: "left" },
      { Header: "Nama", accessor: "name", align: "left" },
      { Header: "Tanggal", accessor: "date", align: "center" },
      { Header: "Jumlah", accessor: "amount", align: "right" },
      { Header: "Status", accessor: "status", align: "center" },
    ],
    rows: [
      {
        id: 1,
        name: "John Doe",
        date: "2025-01-01",
        amount: "$1,000",
        status: "Paid",
      },
      {
        id: 2,
        name: "Jane Smith",
        date: "2025-01-02",
        amount: "$750",
        status: "Pending",
      },
      {
        id: 3,
        name: "Michael Brown",
        date: "2025-01-03",
        amount: "$1,250",
        status: "Overdue",
      },
      {
        id: 4,
        name: "Emily Johnson",
        date: "2025-01-04",
        amount: "$500",
        status: "Paid",
      },
    ],
  };
}
