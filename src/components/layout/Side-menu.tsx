import MenuButton from "./Menu-button";
import FaIcon from "../basic-components/Fa-icon";
import ExternalLink from "../basic-components/External-link";
import Logo from "../basic-components/Logo";

interface SideMenuProps {
  setDisplayMenu: React.Dispatch<React.SetStateAction<boolean>>;
}

const SideMenu: React.FC<SideMenuProps> = ({ setDisplayMenu }) => {
  return (
    <aside className="h-[100vh] col-span-2 bg-dark-bg grid grid-rows-6">
      <section className="row-span-1">
        <section className="h-fit w-full px-1 flex justify-start gap-4">
          <button
            type="button"
            className="h-full"
            onClick={() => setDisplayMenu(false)}
          >
            <FaIcon icon="fa-compress" />
          </button>
        </section>
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
      <section className="row-span-1">
        <div className="w-full h-full flex justify-center items-center gap-8">
          <div className="h-1/4">
            <ExternalLink url="https://github.com/pabloff95">
              <FaIcon icon="fa-brands fa-github" className="h-full" />
            </ExternalLink>
          </div>
          <div className="h-1/4">
            <ExternalLink url="https://linkedin.com/in/pablo-fdezfdez">
              <FaIcon icon="fa-brands fa-linkedin" className="h-full" />
            </ExternalLink>
          </div>
        </div>
      </section>
    </aside>
  );
};

export default SideMenu;
