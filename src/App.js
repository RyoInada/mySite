import "./App.css";
import { Header } from "./components/Header";
import { About } from "./components/About";
import { Skills } from "./components/Skills";
import { Works } from "./components/Works";
import { Contact } from "./components/Contact";
import { Drawer } from "./components/Drawer";
import { Darkmode } from "./components/Darkmode";
import { useEffect } from "react";
import { Maincover } from "./components/Maincover";

function App(props) {
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.innerWidth > 768) {
        const target = document.querySelector(".momentum-scroll");
        const targetHeight = target.clientHeight;
        const targetShadow = document.createElement("div");

        targetShadow.classList.add("momentum-shadow");
        target.before(targetShadow);
        targetShadow.style.height = `${targetHeight}px`;
        const momentumScroll = (target) => {
          target.classList.add("momentum-scroll-on");
          const currentPosition = 0 - window.pageYOffset;
          target.style.transform = `translate(0, ${currentPosition}px)`;
        };

        setTimeout(momentumScroll, 0, target);
      }
    });
    window.addEventListener("resize", () => {
      document.location.reload();
    });
  });
  return (
    <>
      <Maincover />
      <Drawer body={props.body} />
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
