import React from "react";
import { Table } from "antd";
import CandidateCard from "./CandidateCard";
import candidateData from '../candidateData.json';
import TableHeader from "./TableHeader";

interface Candidate {
  name: string;
  country: string;
  education: string;
}

interface DataItem {
  key: string;
  Candidate: JSX.Element;
}

interface TableColumns {
  title: JSX.Element;
  dataIndex: string;
  render: (Candidate: JSX.Element) => JSX.Element;
}

const tableColumns: TableColumns[] = [
  {
    title: <TableHeader />,
    dataIndex: "Candidate",
    render: (Candidate: JSX.Element) => <a>{Candidate}</a>,
  },
];

const candidates: Candidate[] = candidateData;

function mapCandidatesToDataItems(candidates: Candidate[]): DataItem[] {
  return candidates.map((candidate, index) => {
    return {
      key: String(index + 1),
      Candidate: (
        <CandidateCard
          name={candidate.name}
          country={candidate.country}
          education={candidate.education}
        />
      ),
    };
  });
}

const data: DataItem[] = mapCandidatesToDataItems(candidates);

const rowSelection = {
  onChange: (selectedRowKeys: React.Key[], selectedRows: DataItem[]) => {
    console.log(`selectedRowKeys: ${selectedRowKeys}`, "selectedRows: ", selectedRows);
  },
};

function CandidatesTable() {
  return (
    <div className="overflow-auto flex-1 h-full">
      <Table
        className="w-screen sm:w-full pr-0 sm:pr-8"
        rowSelection={{
          type: "checkbox",
          ...rowSelection,
        }}
        columns={tableColumns}
        dataSource={data}
        pagination={false}
      />
    </div>
  );
}

export default CandidatesTable;
