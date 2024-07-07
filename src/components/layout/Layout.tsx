import SideMenu from "./Side-menu";
import { Outlet } from "react-router-dom";
import { useState, useEffect } from "react";
import FaIcon from "../basic-components/Fa-icon";
import { useLocation } from "react-router-dom";

export default function Layout() {
  const location = useLocation();

  useEffect(() => {
    // Add show animation for DOM elments with the hidden-animation class, so that they scroll in to the view port of the user
    const elmentInViewPortObserver: IntersectionObserver =
      new IntersectionObserver((domElements) => {
        domElements.forEach((element) => {
          if (element.isIntersecting) {
            // Element entered in the viewport
            element.target.classList.add("show-animation");
          }
        });
      });

    const hiddenDomElements: Element[] = Array.from(
      document.getElementsByClassName("hidden-animation")
    );
    hiddenDomElements.forEach((element) =>
      elmentInViewPortObserver.observe(element)
    );
  }, [location]);

  const [displayMenu, setDisplayMenu] = useState(true);

  return (
    <div className="h-[100vh] w-[100vw] grid grid-cols-12 overflow-hidden">
      {displayMenu && <SideMenu setDisplayMenu={setDisplayMenu} />}
      <main
        className={`relative ${
          displayMenu ? "col-span-10" : "col-span-12"
        } overflow-y-auto`}
      >
        {!displayMenu && (
          <button
            type="button"
            className="h-5 absolute mt-2 ml-2"
            onClick={() => setDisplayMenu(true)}
          >
            <FaIcon icon="fa-expand" />
          </button>
        )}
        <Outlet />
      </main>
    </div>
  );
}
