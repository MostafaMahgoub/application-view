import SearchFilter from "./Components/SearchFilter";
import CandidatesTable from "./Components/Table";




function Content() {
    return(
        <div className="flex flex-col sm:flex-row items-center sm:items-start gap-11 h-full">
        <SearchFilter />
        <CandidatesTable />
        </div>
    )
}

export default Content;