import { Link } from "react-router-dom";

export default function SideBar() {
  return (
    <aside className="h-full col-span-2 bg-black grid grid-rows-6">
      <section className="row-span-1"></section>
      <section className="row-span-4 flex flex-col gap-12 justify-center items-center">
        <Link to="/">Home</Link>
        <Link to="/projects">Projects</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
      </section>
      <section className="row-span-1"></section>
    </aside>
  );
}
