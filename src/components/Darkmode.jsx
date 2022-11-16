import { FaSun, FaRegMoon } from "react-icons/fa";
import { useEffect } from "react";

export const Darkmode = (props) => {
  useEffect(() => {
    if (sessionStorage.getItem("is-dark") % 2 === 0) {
      const docBody = props.root;
      const toggle = document.querySelector(".js-darkmode");
      toggle.classList.add("is-dark");
      docBody.classList.add("darkmode");
    }
  });
  const darkmodeSwitch = (e) => {
    e.currentTarget.classList.toggle("is-dark");
    const docBody = props.root;
    docBody.classList.toggle("darkmode");
    sessionStorage["is-dark"] = Number(sessionStorage.getItem("is-dark")) + 1;
    if (window.innerWidth < 769) {
      document.location.reload();
    }
  };
  return (
    <div className="js-darkmode" onClick={darkmodeSwitch}>
      <div className="darkmode-toggle">
        <FaSun color="#18a0b8" size="25px" className="fa-sun" />
        <FaRegMoon color="#18a0b8" size="20px" className="fa-regmoon" />
      </div>
    </div>
  );
};
