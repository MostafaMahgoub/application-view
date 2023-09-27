import { Avatar , Tag } from "antd";

function CandidateCard() {
  return (
    <div className="flex flex-row gap-5">
      <Avatar className="align-middle bg-[#EDF4FF] text-[#D0E1FF] self-center" size="large">
        MR
      </Avatar>
      <div className="flex flex-col gap-2">
        <div className="text-black text-base font-poppins font-semibold break-words">
          Aaliyah Sanderson
        </div>
        <div className="text-black text-xs font-poppins font-medium break-words">
          Riyadh, Saudi Arabia
        </div>
        <div className="text-black text-xs font-poppins font-light break-words">
          Bachelor - Cambridge University (2023 - 2023)
        </div>
        <div className="flex flex-row gap-2">
        <div className="text-[#1D4ED8] text-xs font-poppins font-normal break-words">
  #top_candidate
</div>
<div className="text-[#1D4ED8] text-xs font-poppins font-normal break-words">
  #top_candidate
</div>
        </div>
        <div className="flex flex-row gap-2">
        <Tag bordered={false} className="rounded-xl bg-[#EDF4FF]">
        <div className="text-[#037092] text-xs font-poppins font-medium break-words">
  New York
</div>
      </Tag>
      <Tag bordered={false} className="rounded-xl bg-[#EDF4FF]">
        <div className="text-[#037092] text-xs font-poppins font-medium break-words">
  Marketing
</div>
      </Tag>
      <Tag bordered={false} className="rounded-xl bg-[#EDF4FF]">
        <div className="text-[#037092] text-xs font-poppins font-medium break-words">
  London
</div>
      </Tag>
      
        </div>
      </div>
    </div>
  );
}

export default CandidateCard;
