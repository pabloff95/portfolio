import SideBar from "./Side-bar";
import { Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <div className="h-full w-full grid grid-cols-12">
      <SideBar />
      <main className="col-span-10">
        <Outlet />
      </main>
    </div>
  );
}
