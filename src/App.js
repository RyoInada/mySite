import "./App.css";
import { Header } from "./components/Header";
import { About } from "./components/About";
import { Skills } from "./components/Skills";
import { Works } from "./components/Works";
import { Contact } from "./components/Contact";
import { Drawer } from "./components/Drawer";
import { Darkmode } from "./components/Darkmode";

function App(props) {
  return (
    <>
      <Drawer />
      <div className="momentum-scroll">
        <Darkmode body={props.body} />
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
