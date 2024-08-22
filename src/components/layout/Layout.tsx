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

  const [displayMenu, setDisplayMenu] = useState<boolean>(true);
  const [displayDarkMode, setDisplayDarkMode] = useState<boolean>(true);

  const darkModeHandler = () => {
    setDisplayDarkMode(!displayDarkMode);
    document.body.classList.toggle("dark");
  };

  return (
    <div className="h-[100vh] w-[100vw] flex flex-col md:grid md:grid-cols-12 overflow-hidden">
      {displayMenu && (
        <SideMenu
          setDisplayMenu={setDisplayMenu}
          darkModeHandler={darkModeHandler}
          displayDarkMode={displayDarkMode}
        />
      )}
      <main
        className={`h-full md:h-[100vh] relative ${
          displayMenu ? "row-span-12 md:col-span-10" : "col-span-12"
        } overflow-y-auto overflow-x-hidden`}
      >
        {!displayMenu && (
          <div className="fixed right-2 w-fit p-4 text-lg flex justify-center gap-4">
            <button
              type="button"
              className="ml-1"
              onClick={() => setDisplayMenu(true)}
            >
              <FaIcon icon="fa-expand" />
            </button>
            <button type="button" onClick={() => darkModeHandler()}>
              <FaIcon icon={`${displayDarkMode ? "fa-sun" : "fa-moon"}`} />
            </button>
          </div>
        )}
        <Outlet />
      </main>
    </div>
  );
}
