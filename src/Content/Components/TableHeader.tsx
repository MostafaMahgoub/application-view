import { Divider } from "antd";


function TableHeader(){
    return(
        <div className="flex flex-col sm:flex-row">
        <span className="text-[#1D4ED8] text-sm font-semibold font-poppins leading-6 break-words">
          247 Candidates
        </span>
        <div className="flex-grow" />
        <div className="flex flex-row">
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
      </div>
    )
}
export default TableHeader;