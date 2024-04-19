import React from 'react';
import Logo from "../logo";
import NavItems from "./navItems";

function Navbar() {
    return (
      <div className="min-h-16 w-full max-w-screen-2xl flex flex-row items-center lg:pl-12 lg:pr-12 justify-between">

<div>
    <Logo/>
</div>

          <NavItems/>
      </div>
    );
}

export default Navbar;