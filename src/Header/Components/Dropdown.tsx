import { DownOutlined } from "@ant-design/icons";
import { Divider, Dropdown, Menu, Space, Typography } from "antd";
import { useState } from "react";

function DropdownMenu() {
const [selectedKey, setSelectedKey] = useState('')
  const items = [
    {
      key: "1",
      element: (
        <div className="flex flex-row justify-between">
          <p className="text-black text-base font-poppins font-normal leading-6 break-words">
            Applied
          </p>
          <div className=" px-2 py-1 h-fit bg-gray-200 rounded-xl flex justify-center items-center self-center gap-10">
            <div className="text-gray-700 text-xs font-poppins font-medium break-words">
              1745
            </div>
          </div>
        </div>
      ),
    },
    {
        key: "2",
        element: (
          <div className="flex flex-row justify-between">
            <p className="text-black text-base font-poppins font-normal leading-6 break-words">
              Shortlisted
            </p>
            <div className=" px-2 py-1 h-fit bg-gray-200 rounded-xl flex justify-center items-center self-center gap-10">
              <div className="text-gray-700 text-xs font-poppins font-medium break-words">
                453
              </div>
            </div>
          </div>
        ),
      },
      {
        key: "3",
        element: (
          <div className="flex flex-row justify-between">
            <p className="text-black text-base font-poppins font-normal leading-6 break-words">
              Technical Interview
            </p>
            <div className=" px-2 py-1 h-fit bg-gray-200 rounded-xl flex justify-center items-center self-center gap-10">
              <div className="text-gray-700 text-xs font-poppins font-medium break-words">
                123
              </div>
            </div>
          </div>
        ),
      },
      {
        key: "4",
        element: (
          <div className="flex flex-row justify-between">
            <p className="text-black text-base font-poppins font-normal leading-6 break-words">
              Opportunity Browsing
            </p>
            <div className=" px-2 py-1 h-fit bg-gray-200 rounded-xl flex justify-center items-center self-center gap-10">
              <div className="text-gray-700 text-xs font-poppins font-medium break-words">
                243
              </div>
            </div>
          </div>
        ),
      },
      {
        key: "5",
        element: (
          <div className="flex flex-row justify-between">
            <p className="text-black text-base font-poppins font-normal leading-6 break-words">
              Video Interview I
            </p>
            <div className=" px-2 py-1 h-fit bg-gray-200 rounded-xl flex justify-center items-center self-center gap-10">
              <div className="text-gray-700 text-xs font-poppins font-medium break-words">
                25
              </div>
            </div>
          </div>
        ),
      },
      {
        key: "6",
        element: (
          <div className="flex flex-row justify-between">
            <p className="text-black text-base font-poppins font-normal leading-6 break-words">
            Video Interview II
            </p>
            <div className=" px-2 py-1 h-fit bg-gray-200 rounded-xl flex justify-center items-center self-center gap-10">
              <div className="text-gray-700 text-xs font-poppins font-medium break-words">
                25
              </div>
            </div>
          </div>
        ),
      },
      {
        key: "7",
        element: (
          <div className="flex flex-row justify-between">
            <p className="text-black text-base font-poppins font-normal leading-6 break-words">
            Video Interview III
            </p>
            <div className=" px-2 py-1 h-fit bg-gray-200 rounded-xl flex justify-center items-center self-center gap-10">
              <div className="text-gray-700 text-xs font-poppins font-medium break-words">
                25
              </div>
            </div>
          </div>
        ),
      },
      {
        key: "8",
        element: (
          <div className="flex flex-row justify-between">
            <p className="text-black text-base font-poppins font-normal leading-6 break-words">
              Offer
            </p>
            <div className=" px-2 py-1 h-fit bg-gray-200 rounded-xl flex justify-center items-center self-center gap-10">
              <div className="text-gray-700 text-xs font-poppins font-medium break-words">
                25
              </div>
            </div>
          </div>
        ),
      },
      {
        key: "9",
        element: (
          <div className="flex flex-row justify-between">
            <p className="text-black text-base font-poppins font-normal leading-6 break-words">
              Withdrawn
            </p>
            <div className=" px-2 py-1 h-fit bg-gray-200 rounded-xl flex justify-center items-center self-center gap-10">
              <div className="text-gray-700 text-xs font-poppins font-medium break-words">
                25
              </div>
            </div>
          </div>
        ),
      },
  ];

  const handleMenuClick = (e : any) => {
    setSelectedKey(e.key);
  };

  const menu = (
    <Menu onClick={handleMenuClick}>
      {items.map((item) => (
        <Menu.Item key={item.key} className={selectedKey === item.key ? 'bg-blue-100' : ''}>
          {item.element}
        </Menu.Item>
      ))}
    </Menu>
  );

  return (
    <Dropdown overlay={menu}
    trigger={['hover']}>
      <Typography.Link>
        <Space className="bg-white rounded-xl pr-4 pl-4 h-8 w-60 flex justify-between shadow-lg hover:rounded-br-none">
          <p className={`text-blue-600 text-xs font-poppins font-bold leading-6 break-words ${selectedKey ? 'text-blue-600' : ''}`}>
            Opportunity Browsing
          </p>
          <DownOutlined className="text-xs" />
        </Space>
      </Typography.Link>
    </Dropdown>
  );
}

export default DropdownMenu;
