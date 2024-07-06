import SideBar from "./Side-bar";
import { Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <div className="h-[100vh] w-[100vw] grid grid-cols-12 overflow-hidden">
      <SideBar />
      <main className="col-span-10 overflow-y-auto">
        <Outlet />
      </main>
    </div>
  );
}
