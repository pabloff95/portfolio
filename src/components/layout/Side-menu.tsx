import MenuButton from "./Menu-button";
import FaIcon from "../basic-components/Fa-icon";
import Logo from "../basic-components/Logo";
import React from "react";

interface SideMenuProps {
  setDisplayMenu: React.Dispatch<React.SetStateAction<boolean>>;
  darkModeHandler: () => void;
  displayDarkMode: boolean;
}

const SideMenu: React.FC<SideMenuProps> = ({
  setDisplayMenu,
  darkModeHandler,
  displayDarkMode,
}) => {
  return (
    <aside className="flex justify-between md:col-span-2 md:grid md:grid-cols-1 md:grid-rows-6 md:h-[100vh] w-full md:w-auto bg-secondary-background">
      <section className="hidden min-[580px]:block md:row-span-1">
        <div className="h-full font-impact flex flex-col md:justify-center text-center pr-2 md:pr-0">
          <Logo />
          <p className="hidden lg:block text-[min(2vmax,1.35rem)]">
            Web developer
          </p>
        </div>
      </section>
      <section className="min-[580px]:col-span-10 md:row-span-4 flex grow md:flex-col sm:justify-center items-center">
        <MenuButton to="/" text="HOME" />
        <MenuButton to="/about" text="ABOUT" />
        <MenuButton to="/stack" text="STACK" />
        <MenuButton to="/projects" text="PROJECTS" />
        <MenuButton to="/contact" text="CONTACT" />
      </section>
      <section className="row-span-1 flex items-center md:items-end">
        <div className="w-full sm:p-4 flex justify-center text-xs sm:text-lg gap-4">
          <button
            type="button"
            className="hidden md:block h-1"
            onClick={() => setDisplayMenu(false)}
          >
            <FaIcon icon="fa-compress" />
          </button>
          <button type="button" onClick={() => darkModeHandler()}>
            <FaIcon icon={`${displayDarkMode ? "fa-sun" : "fa-moon"}`} />
          </button>
        </div>
      </section>
    </aside>
  );
};

export default SideMenu;
