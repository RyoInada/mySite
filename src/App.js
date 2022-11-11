import "./App.css";
import { Header } from "./components/Header";
import { About } from "./components/About";
import { Skills } from "./components/Skills";
import { Works } from "./components/Works";
import { Contact } from "./components/Contact";
import { Drawer } from "./components/Drawer";
import { Darkmode } from "./components/Darkmode";
import { useEffect } from "react";

function App(props) {
  useEffect(() => {
    if (window.innerWidth > 1024) {
      const target = document.querySelector(".momentum-scroll");
      const targetHeight = target.clientHeight;
      const targetShadow = document.createElement("div");
      const mainCoverOffset = (cs) => {
        const className = "." + cs;
        const offsetTarget = document.querySelector(className);
        offsetTarget.classList.add("is-offset");
        const currentPosition = window.pageYOffset;
        offsetTarget.style.backgroundPosition = `0 ${currentPosition}px`;
      };
      targetShadow.classList.add("momentum-shadow");
      target.before(targetShadow);
      targetShadow.style.height = `${targetHeight}px`;
      target.classList.add("momentum-scroll-on");
      const momentumScroll = (target) => {
        const currentPosition = 0 - window.pageYOffset;
        target.style.transform = `translate(0, ${currentPosition}px)`;
      };

      const binder = () => {
        momentumScroll(target);
        mainCoverOffset("main-cover");
      };
      window.addEventListener("scroll", () => {
        setTimeout(binder, 100);
      });
    }
  });
  return (
    <>
      <Drawer />
      <Darkmode body={props.body} />
      <div className="momentum-scroll">
        <Header />
        <About />
        <Skills />
        <Works />
        <Contact />
      </div>
    </>
  );
}

export default App;
