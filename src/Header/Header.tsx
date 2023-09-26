import DropdownMenu from "./Components/Dropdown";
import SquareButton from "./Components/FloatButton";
import { ReactComponent as Mail } from "./assets/Mail.svg";
import { ReactComponent as CP } from "./assets/CP.svg";
import { ReactComponent as UserCheck } from "./assets/User_Check.svg";
import { ReactComponent as UserClose } from "./assets/User_Close.svg";
import { ReactComponent as UserVoice } from "./assets/User_Voice.svg";
import DropdownButton from "./Components/DropdownButton";
import { Divider } from 'antd';

function Header() {
  return (
    <header className="mt-3 flex flex-col h-fit items-center gap-10 w-full mr-9 sm:flex-row sm:gap-20">
      <div>
      <h1 className="text-blue-600 text-2xl font-poppins font-semibold break-words">
        London Internship Program
      </h1>
      <p className="text-black text-xs font-poppins font-light break-words">
        London
      </p>
      </div>
      <div className="grow" />
      <DropdownMenu />
      <div className="grow" />
      <div className="flex flex-row gap-3">
      <SquareButton icon={<CP width={25} height={25} />} />
      <SquareButton icon={<UserClose width={25} height={25} />} />
      <SquareButton icon={<UserCheck width={25} height={25} />} />
      <SquareButton icon={<UserVoice width={25} height={25} />} />
      <SquareButton icon={<Mail width={25} height={25} />} />
      <Divider type="vertical" className="h-auto" />
      <DropdownButton />
      </div>
    </header>
  );
}

export default Header;
