import { DownOutlined } from "@ant-design/icons";
import { Dropdown, Menu, Space, Typography } from "antd";
import React from "react";
import { useState } from "react";

interface MenuItemProps {
  itemKey: string;
  selectedKey: string;
  title: string;
  count: number;
}

const MenuItem = React.memo(({ itemKey, selectedKey, title, count }: MenuItemProps) => {
  return (
    <div className="flex flex-row justify-between">
      <p className={`text-base font-poppins font-normal leading-6 break-words ${selectedKey === itemKey ? "text-[#1D4ED8]" : "text-[#0B0B0B]"}`}>
        {title}
      </p>
      <div className={`px-2 py-1 h-fit bg-gray-200 rounded-xl flex justify-center items-center self-center gap-10 ${selectedKey === itemKey ? "bg-[#D1DDFF]" : "bg-gray-200"}`}>
        <div className={`text-xs font-poppins font-medium break-words ${selectedKey === itemKey ? "text-[#1D4ED8]" : "text-[#444444]"}`}>
          {count}
        </div>
      </div>
    </div>
  );
});

function DropdownMenu() {
  const [selectedKey, setSelectedKey] = useState("");
  const items = [
    { key: "1", title: "Applied", count: 1745 },
    { key: "2", title: "Shortlisted", count: 453 },
    { key: "3", title: "Technical Interview", count: 123 },
    { key: "4", title: "Opportunity Browsing", count: 243 },
    { key: "5", title: "Video Interview I", count: 25 },
    { key: "6", title: "Video Interview II", count: 25 },
    { key: "7", title: "Video Interview III", count: 25 },
    { key: "8", title: "Offer", count: 25 },
    { key: "9", title: "Withdrawn", count: 25 },
  ];

  const handleMenuClick = (e: any) => {
    setSelectedKey(e.key);
  };

  const menu = (
    <Menu onClick={handleMenuClick}>
      {items.map((item) => (
        <Menu.Item key={item.key} className={selectedKey === item.key ? "bg-[#EDF2FF]" : ""}>
          <MenuItem itemKey={item.key} selectedKey={selectedKey} title={item.title} count={item.count} />
        </Menu.Item>
      ))}
    </Menu>
  );

  return (
    <Dropdown overlay={menu} trigger={["hover"]}>
      <Typography.Link>
        <Space className="bg-white rounded-xl pr-4 pl-4 h-10 w-60 flex justify-between shadow-lg hover:rounded-br-none">
          <p className="text-blue-600 text-xs font-poppins font-bold leading-6 break-words">
            Opportunity Browsing
          </p>
          <DownOutlined className="text-xs" />
        </Space>
      </Typography.Link>
    </Dropdown>
  );
}

export default DropdownMenu;
