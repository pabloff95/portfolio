import SideMenu from "./Side-menu";
import { Outlet } from "react-router-dom";
import { useState } from "react";
import FaIcon from "../basic-components/Fa-icon";

export default function Layout() {
  const [displayMenu, setDisplayMenu] = useState(true);

  return (
    <div className="h-[100vh] w-[100vw] grid grid-cols-12 overflow-hidden">
      {displayMenu && <SideMenu setDisplayMenu={setDisplayMenu} />}
      <main
        className={`relative ${
          displayMenu ? "col-span-10" : "col-span-12"
        } overflow-y-auto`}
      >
        {!displayMenu && (
          <button
            type="button"
            className="h-5 absolute mt-2 ml-2"
            onClick={() => setDisplayMenu(true)}
          >
            <FaIcon icon="fa-expand" />
          </button>
        )}
        <Outlet />
      </main>
    </div>
  );
}
