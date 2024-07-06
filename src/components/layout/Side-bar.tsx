import MenuButton from "./Menu-button";
import FaIcon from "../basic-components/Fa-icon";
import ExternalLink from "../basic-components/External-link";
import Logo from "../basic-components/Logo";

export default function SideBar() {
  return (
    <aside className="h-full col-span-2 bg-black grid grid-rows-6">
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
}
