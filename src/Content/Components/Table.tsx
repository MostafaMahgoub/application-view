import React from "react";
import { Divider, Table } from "antd";
import CandidateCard from "./CandidateCard";
import jsonData from '../candidateData.json';

interface Candidate {
  name: string;
  country: string;
  education: string;
}

interface DataItem {
  key: string;
  Candidate: JSX.Element;
}

const columns = [
  {
    title: (
      <div className="flex flex-row">
        <span className="text-[#1D4ED8] text-sm font-semibold font-poppins leading-6 break-words">
          247 Candidates
        </span>
        <div className="flex-grow" />
        <span className="text-[#1D4ED8] text-sm font-medium font-poppins leading-6 break-words">
          Qualified
        </span>
        <Divider type="vertical" className="self-center" />
        <div className="flex gap-2">
          <span className="text-[#0B0B0B] text-sm font-normal font-poppins leading-6 break-words">
            Task
          </span>
          <div className="px-0.3 py-0.1 h-fit bg-gray-200 rounded-xl flex justify-center items-center self-center gap-10">
            <div className="text-gray-700 text-xs font-poppins font-medium break-words">
              25
            </div>
          </div>
        </div>
        <Divider type="vertical" className="self-center" />
        <div className="flex gap-2">
          <span className="text-[#0B0B0B] text-sm font-normal font-poppins leading-6 break-words">
            Disqualified
          </span>
          <div className="px-0.3 py-0.1 h-fit bg-gray-200 rounded-xl flex justify-center items-center self-center gap-10">
            <div className="text-gray-700 text-xs font-poppins font-medium break-words">
              25
            </div>
          </div>
        </div>
      </div>
    ),
    dataIndex: "Candidate",
    render: (Candidate: JSX.Element) => <a>{Candidate}</a>,
  },
];

const candidates: Candidate[] = jsonData;


const data: DataItem[] = candidates.map((candidate, index) => {
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
        columns={columns}
        dataSource={data}
        pagination={false}
      />
    </div>
  );
}

export default CandidatesTable;
