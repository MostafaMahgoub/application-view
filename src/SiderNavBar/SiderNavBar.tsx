import React, { useState } from 'react';

function NavbarSider() {
  const [collapsed, setCollapsed] = useState(false);

  const onCollapse = (collapsed: boolean) => {
    setCollapsed(collapsed);
  };

  return (
    <nav
      className="bg-white h-screen w-16 flex flex-col items-center rounded-tr-2xl rounded-br-2xl shadow-xl transition-all duration-300 hover:w-64 hover:translate-x-4"
    >
      {/* Navbar content goes here */}
    </nav>
  );
}

export default NavbarSider;
