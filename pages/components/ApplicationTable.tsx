import React, { useEffect, useState } from "react";
import DataTable, { TableColumn, ExpanderComponentProps } from "react-data-table-component";
import CsvDownload from "react-json-to-csv";
import { useRouter } from "next/router";

import "react-data-table-component-extensions/dist/index.css";

interface Props {
  data: any;
  pending?: boolean;
}

//Reference: https://react-data-table-component.netlify.app/?path=/docs/api-typescript--page
interface DataRow {
  mobileNo: string;
  name: string;
  fatherName: string;
  disability: string;
  education: string;
  status: string;
}

export default function ApplicationTable(props: Props): JSX.Element {
  const [filteredApplications, setFilteredApplications] = useState([]);
  const { data, pending } = props;
  const router = useRouter();

  const columns: TableColumn<DataRow>[] = [
    {
      name: "Mobile no",
      selector: (row) => row.mobileNo,
      sortable: true,
    },
    {
      name: "Name",
      selector: (row) => row.name,
      sortable: true,
    },
    {
      name: "Disability",
      selector: (row) => row.disability,
      sortable: true,
    },
    {
      name: "Education",
      selector: (row) => row.education,
    },
    {
      name: "Type",
      selector: (row) => findApplicationTag(row).toString(),
    },
    {
      name: "Status",
      selector: (row) => findApplicationStatus(row).toString(),
    },
    {
      name: "",
      cell: (row: any) => <button onClick={() => viewApplication(row)}>View </button>,
      ignoreRowClick: true,
      button: true,
    },
  ];

  const findApplicationTag = (row: any) => {
    var temp = [];
    if ("jobApplication" in row) {
      temp.push("JOB");
    }
    return temp;
  };
  const findApplicationStatus = (row: any) => {
    var temp = [];
    if ("jobApplication" in row) {
      temp.push("JOB - " + row["jobApplication"]["status"]);
    }
    return temp;
  };

  const ExpandedComponent: React.FC<ExpanderComponentProps<DataRow>> = ({ data }) => {
    return <pre>{JSON.stringify(data, null, 2)}</pre>;
  };

  const viewApplication = (rowData: any) => {
    router.replace((router.query?.next ?? `/dashboard/application/${rowData.mobileNo}`) as string);
  };

  const tableData = {
    columns,
    data,
  };

  return (
    <div className="container">
      <hr />

      <CsvDownload data={data} className="btn btn-xs btn-warning">
        {" "}
        Export Csv{" "}
      </CsvDownload>
      <DataTable
        columns={columns}
        data={data}
        pagination
        defaultSortAsc={false}
        progressPending={pending}
        expandableRows
        expandableRowsComponent={ExpandedComponent}
        highlightOnHover
        noHeader
      />
    </div>
  );
}
