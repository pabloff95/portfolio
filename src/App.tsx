import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Layout from "./components/layout/Layout";
import { useEffect } from "react";

function App() {
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
  }, []);

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
