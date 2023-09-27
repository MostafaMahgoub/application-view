import { Avatar } from "antd";
import { UserOutlined } from "@ant-design/icons";
import { ReactComponent as UserGroup } from "../SiderNavBar/assets/Users_Group.svg";
import { ReactComponent as Calendar } from "../SiderNavBar/assets/Calendar.svg";
import { ReactComponent as Communication } from "../SiderNavBar/assets/Communication.svg";
import { ReactComponent as Notebook } from "../SiderNavBar/assets/Notebook.svg";
import { ReactComponent as Heart } from "../SiderNavBar/assets/Heart.svg";
import { ReactComponent as FileDocument } from "../SiderNavBar/assets/File_Document.svg";
import { ReactComponent as Home } from "../SiderNavBar/assets/Home.svg";
import { ReactComponent as Settings } from "../SiderNavBar/assets/Settings.svg";

function MyHomeSvgIcon() {
  return (
    <svg
      width="19"
      height="19"
      viewBox="0 0 18 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="text-inherit"
    >
      <path
        d="M17 8.45222V8.45147C17 7.91764 16.9351 7.65058 16.8775 7.40205C16.7827 6.97275 16.6548 6.78432 16.5104 6.5717C16.3096 6.39581 15.9074 6.04395 15.5674 5.84395L11.1074 1.84395C10.3608 1.19066 9.98751 0.864064 9.56738 0.739821C9.19719 0.630346 8.80281 0.630346 8.43262 0.739821C8.01272 0.863996 7.63979 1.19031 6.894 1.84288L6.89278 1.84395L2.09277 6.04395L2.09182 6.04479C1.69032 6.39609 1.48944 6.57187 1.34521 6.78433C1.2173 6.97275 1.12255 7.18171 1.06497 7.40205C1 7.65069 1 7.91788 1 8.45222V14.0002C1 14.932 1 15.3979 1.15224 15.7654C1.35523 16.2555 1.74481 16.6449 2.23486 16.8479C2.60241 17.0001 3.06835 17.0001 4.00023 17.0001C4.93211 17.0001 5.39782 17.0001 5.76537 16.8479C6.25542 16.6449 6.64467 16.2555 6.84766 15.7654C6.9999 15.3979 7 14.932 7 14.0001V13.0001C7 11.8955 7.89543 11.0001 9 11.0001C10.1046 11.0001 11 11.8955 11 13.0001V14.0001C11 14.932 11 15.3979 11.1522 15.7654C11.3552 16.2555 11.7448 16.6449 12.2349 16.8479C12.6024 17.0001 13.0683 17.0001 14.0002 17.0001C14.9321 17.0001 15.3978 17.0001 15.7654 16.8479C16.2554 16.6449 16.6447 16.2555 16.8477 15.7654C16.9999 15.3979 17 14.932 17 14.0002Z"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      ></path>
    </svg>
  );
}

function NavbarSider() {
  const navLinks = [
    { icon: <Home />, label: "Dashboard", svg: Home },
    { icon: <UserGroup width={25} height={25} />, label: "User Group", svg: UserGroup },
    { icon: <Calendar width={25} height={25} />, label: "Calendar", svg: Calendar },
    { icon: <Communication width={25} height={25} />, label: "Communication", svg: Communication },
    { icon: <FileDocument width={25} height={25} />, label: "File Document", svg: FileDocument },
    { icon: <Notebook width={25} height={25} />, label: "Notebook", svg: Notebook },
    { icon: <Heart width={25} height={25} />, label: "Heart", svg: Heart },
  ];

  return (
    <nav className="bg-white h-screen w-16 flex flex-col items-center rounded-tr-2xl rounded-br-2xl shadow-xl transition-all duration-300 hover:w-64 hover:translate-x-4 group">
      <div className="flex flex-col items-center justify-between px-3 py-7 gap-3 sm:gap-5 h-full">
        <Avatar icon={<UserOutlined />} />

        {navLinks.map((link, index) => (
          <a
            key={index}
            className="flex h-12 w-full items-center justify-evenly rounded-lg px-3 text-black transition-all duration-100 ease-in-out hover:bg-[#E9EFFF] hover:text-primary-new hover:opacity-100 group-hover:justify-start group-hover:gap-5"
          >
            {link.icon}
            <span className="pointer-events-none font-poppins whitespace-nowrap hidden text-sm text-inherit opacity-0 transition-all duration-300 ease-in-out group-hover:block group-hover:pointer-events-auto group-hover:opacity-100 md:opacity-0">
              {link.label}
            </span>
          </a>
        ))}

        <div className="flex-grow hidden sm:block" />

        <a className="flex h-12 w-full items-center justify-evenly rounded-lg px-3 text-black transition-all duration-100 ease-in-out hover:bg-[#E9EFFF] hover:text-primary-new hover:opacity-100 group-hover:justify-start group-hover:gap-5">
          <Settings width={25} height={25} />
          <span className="pointer-events-none font-poppins whitespace-nowrap hidden text-sm text-inherit opacity-0 transition-all duration-300 ease-in-out group-hover:block group-hover:pointer-events-auto group-hover:opacity-100 md:opacity-0">
            Settings
          </span>
        </a>

        <Avatar className="align-middle bg-[#B1CDFD] text-[#D0E1FF]" size="small">
          MR
        </Avatar>
      </div>
    </nav>
  );
}

export default NavbarSider;
