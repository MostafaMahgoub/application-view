import React from 'react';
import { Table } from 'antd';

interface DataItem {
  key: string;
  name: string;
}

const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
    render: (text: string) => <a>{text}</a>,
  },
];

const data: DataItem[] = [
  {
    key: '1',
    name: 'John Brown',
  },
  {
    key: '2',
    name: 'Jim Green',
  },
  {
    key: '3',
    name: 'Joe Black',
  },
];

const rowSelection = {
  onChange: (selectedRowKeys: React.Key[], selectedRows: DataItem[]) => {
    console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
  },
  getCheckboxProps: (record: DataItem) => ({
    disabled: record.name === 'Disabled User',
    name: record.name,
  }),
};

function CandidatesTable() {
  return (
    <div style={{ flex: 1 }}>
      <Table
        className="w-screen sm:w-full pr-0 sm:pr-8"
        rowSelection={{
          type: 'checkbox',
          ...rowSelection,
        }}
        columns={columns}
        dataSource={data}
      />
    </div>
  );
}

export default CandidatesTable;
