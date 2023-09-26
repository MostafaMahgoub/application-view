import DropdownMenu from "./Components/Dropdown";


const Header = () => {
  return (
    <header className="mt-3">
      <h1 className="text-blue-600 text-2xl font-poppins font-semibold break-words">
  London Internship Program
</h1>
<p className="text-black text-xs font-poppins font-light break-words">
  London
</p>
<DropdownMenu />
    </header>
  );
};

export default Header;