import { Input, Tooltip } from "antd";
import { SearchOutlined, InfoCircleOutlined } from "@ant-design/icons";

function SearchFilter() {
  return (
    <div className="w-80 h-fit">
      <Input
        className="h-10 border-0"
        placeholder="Serach by name, edu, exp or #tag"
        prefix={<SearchOutlined className="text-[#9AA6AC]" />}
        suffix={
          <Tooltip title="Extra information">
            <InfoCircleOutlined
              style={{
                color: "rgba(0,0,0,.45)",
              }}
            />
          </Tooltip>
        }
      />
    </div>
  );
}

export default SearchFilter;
