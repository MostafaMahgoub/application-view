import { useState } from "react";
import SearchFilter from "./Components/SearchFilter";
import CandidatesTable from "./Components/Table";


  


function Content() {
    const [searchText, setSearchText] = useState<string>("");
    const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchText(e.target.value);
      };

    return(
        <div className="flex flex-col sm:flex-row items-center sm:items-start gap-11 h-full">
        <SearchFilter searchText={searchText} onSearch={handleSearch} />
        <CandidatesTable searchText={searchText} />
        </div>
    )
}

export default Content;