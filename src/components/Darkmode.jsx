import { FaSun, FaRegMoon } from "react-icons/fa";

export const Darkmode = (props) => {
  const darkmodeSwitch = (e) => {
    e.currentTarget.classList.toggle("is-dark");
    const docBody = props.body;
    docBody.classList.toggle("darkmode");
  };
  return (
    <div className="js-darkmode" onClick={darkmodeSwitch}>
      <div className="darkmode-toggle">
        <FaSun color="#18a0b8" size="0.7em" className="fa-sun" />
        <FaRegMoon color="#18a0b8" size="1.2rem" className="fa-regmoon" />
      </div>
    </div>
  );
};
