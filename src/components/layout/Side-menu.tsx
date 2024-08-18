import MenuButton from "./Menu-button";
import FaIcon from "../basic-components/Fa-icon";
import Logo from "../basic-components/Logo";

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
    <aside className="row-span-1 md:col-span-2 grid grid-cols-6 md:grid-cols-1 md:grid-rows-6 md:h-[100vh] w-[100vw] md:w-auto bg-secondary-background">
      <section className="hidden min-[580px]:block row-span-1">
        <div className="h-full font-impact text-2xl flex flex-col justify-center text-center">
          <Logo />
          <p className="hidden lg:block">Web developer</p>
        </div>
      </section>
      <section className="col-span-5 min-[580px]:col-span-4 md:row-span-4 flex md:flex-col gap justify-center items-center">
        <MenuButton to="/" text="HOME" />
        <MenuButton to="/about" text="ABOUT" />
        <MenuButton to="/stack" text="STACK" />
        <MenuButton to="/projects" text="PROJECTS" />
        <MenuButton to="/contact" text="CONTACT" />
      </section>
      <section className="row-span-1 flex items-center md:items-end">
        <div className="w-full p-4 flex justify-center text-lg gap-4">
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
