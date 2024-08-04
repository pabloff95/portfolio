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
    <aside className="h-[100vh] col-span-2 bg-secondary-background grid grid-rows-6">
      <section className="row-span-1">
        <div className="h-full font-impact text-2xl flex flex-col justify-center text-center">
          <Logo />
          <p>Web developer</p>
        </div>
      </section>
      <section className="row-span-4 flex flex-col gap justify-center items-center">
        <MenuButton to="/" text="HOME" />
        <MenuButton to="/projects" text="PROJECTS" />
        <MenuButton to="/about" text="ABOUT" />
        <MenuButton to="/contact" text="CONTACT" />
      </section>
      <section className="row-span-1 flex items-end">
        <div className="w-full p-4 flex justify-center gap-4">
          <button
            type="button"
            className="h-1"
            onClick={() => setDisplayMenu(false)}
          >
            <FaIcon icon="fa-compress" />
          </button>
          <button type="button" onClick={() => darkModeHandler()}>
            <FaIcon icon={`${displayDarkMode ? "fa-moon" : "fa-sun"}`} />
          </button>
        </div>
      </section>
    </aside>
  );
};

export default SideMenu;
