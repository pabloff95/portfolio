import SideBar from "./Side-bar";
import { Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <div>
      <SideBar />
      <Outlet />
    </div>
  );
}
