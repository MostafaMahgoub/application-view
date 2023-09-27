import { Avatar, Tag } from "antd";

interface TextProps {
  children: React.ReactNode;
}

function TextBase({ children }: TextProps) {
  return (
    <div className="text-black text-base font-poppins font-semibold break-words">
      {children}
    </div>
  );
}

function TextSmall({ children }: TextProps) {
  return (
    <div className="text-black text-xs font-poppins font-medium break-words">
      {children}
    </div>
  );
}

function TextSmallLight({ children }: TextProps) {
  return (
    <div className="text-black text-xs font-poppins font-light break-words">
      {children}
    </div>
  );
}

function TextSmallNormal({ children }: TextProps) {
  return (
    <div className="text-[#1D4ED8] text-xs font-poppins font-normal break-words">
      {children}
    </div>
  );
}

function TagCard({ children }: TextProps) {
  return (
    <Tag bordered={false} className="rounded-xl bg-[#EDF4FF]">
      <div className="text-[#037092] text-xs font-poppins font-medium break-words">
        {children}
      </div>
    </Tag>
  );
}

interface CandidateCardProps {
    name: string;
    country: string; 
    education: string;
  }


function CandidateCard({ name , country ,education }: CandidateCardProps) {
  return (
    <div className="flex flex-row gap-8">
      <Avatar
        className="align-middle bg-[#EDF4FF] text-[#D0E1FF] self-center"
        size="large"
      >
        MR
      </Avatar>
      <div className="flex flex-col gap-2">
        <TextBase>{name}</TextBase>
        <TextSmall>{country}</TextSmall>
        <TextSmallLight>
        {education}
        </TextSmallLight>
        <div className="flex flex-row gap-2">
          <TextSmallNormal>#top_candidate</TextSmallNormal>
          <TextSmallNormal>#top_candidate</TextSmallNormal>
        </div>
        <div className="flex flex-row gap-2">
          <TagCard>New York</TagCard>
          <TagCard>Marketing</TagCard>
          <TagCard>London</TagCard>
        </div>
      </div>
    </div>
  );
}

export default CandidateCard;
