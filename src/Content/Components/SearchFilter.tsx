import { Input, Tooltip } from "antd";
import { SearchOutlined, InfoCircleOutlined } from "@ant-design/icons";
import Filter from "./Filter";

interface SearchFilterProps {
  searchText: string;
  onSearch: (e: React.ChangeEvent<HTMLInputElement>) => void;
}


function SearchFilter({ searchText, onSearch } : SearchFilterProps) {
  return (
    <div className="w-96 h-fit flex flex-col gap-5">
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
        value={searchText}
        onChange={onSearch}
      />
      <Filter />
    </div>
  );
}

export default SearchFilter;
