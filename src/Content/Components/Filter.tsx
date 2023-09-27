import { useState } from "react";
import { Menu } from "antd";
import { ReactComponent as FileDocument } from "../assets/File_Document.svg";

interface MenuItem {
  key: any;
  icon?: JSX.Element;
  children?: MenuItem[];
  label: string;
  type?: string;
}

function getItem(
  label: any,
  key: string,
  icon?: JSX.Element,
  children?: MenuItem[],
  type?: string
): MenuItem {
  return {
    key,
    icon,
    children,
    label,
    type,
  };
}

const items: MenuItem[] = [
  getItem(
    <div className="flex flex-row justify-between items-center">
      <span className="text-black text-sm font-poppins font-medium leading-6 break-words">
        Filters
      </span>
      <span className="text-gray-900 text-xs font-poppins font-light leading-6 break-words">
        0 Selected
      </span>
    </div>,
    "sub0"
  ),
  getItem(
    "Personal Information",
    "sub1",
    <FileDocument width={16} height={16} />,
    []
  ),
  getItem("Education", "sub2", <FileDocument width={16} height={16} />, []),
  getItem(
    "Work Experience",
    "sub4",
    <FileDocument width={16} height={16} />,
    []
  ),
  getItem(
    "Activity Filter",
    "sub5",
    <FileDocument width={16} height={16} />,
    []
  ),
  getItem("Advanced Filter", "sub6", <FileDocument width={16} height={16} />),
];

const rootSubmenuKeys = ["sub0", "sub1", "sub2", "sub4", "sub5", "sub6"];

function Filter() {
  const [openKeys, setOpenKeys] = useState<string[]>(["sub1"]);

  const onOpenChange = (keys: string[]) => {
    const latestOpenKey = keys.find((key) => openKeys.indexOf(key) === -1);
    if (latestOpenKey && rootSubmenuKeys.indexOf(latestOpenKey) === -1) {
      setOpenKeys(keys);
    } else {
      setOpenKeys(latestOpenKey ? [latestOpenKey] : []);
    }
  };
  

  return (
    <Menu
      className="rounded"
      mode="inline"
      openKeys={openKeys}
      onOpenChange={onOpenChange}
      items={items}
    >
      {items.map((item) => (
        <Menu.Item key={item.key}>
          {item.icon}
          <span className="text-black text-base font-poppins font-normal leading-6 break-words">
            {item.label}
          </span>
        </Menu.Item>
      ))}
    </Menu>
  );
}

export default Filter;
