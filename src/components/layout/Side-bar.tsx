import MenuButton from "./Menu-button";

export default function SideBar() {
  return (
    <aside className="h-full col-span-2 bg-black grid grid-rows-6">
      <section className="row-span-1"></section>
      <section className="row-span-4 flex flex-col gap justify-center items-center">
        <MenuButton to="/" text="HOME" />
        <MenuButton to="/projects" text="PROJECTS" />
        <MenuButton to="/about" text="ABOUT" />
        <MenuButton to="/contact" text="CONTACT" />
      </section>
      <section className="row-span-1"></section>
    </aside>
  );
}
