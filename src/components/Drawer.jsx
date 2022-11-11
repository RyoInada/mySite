import { FaGithub, FaInstagram } from "react-icons/fa";
import { Link } from "react-scroll";

export const Drawer = () => {
  const drawerTrigger = (e) => {
    e.currentTarget.classList.toggle("is-opened");
    e.currentTarget.nextElementSibling.classList.toggle("drawer-open");
    e.currentTarget.nextElementSibling.nextElementSibling.classList.toggle(
      "drawer-open"
    );
  };
  const drawerClose = () => {
    const button = document.querySelector(".is-opened");
    const drawer = document.querySelectorAll(".drawer-open");
    button.classList.remove("is-opened");
    drawer.forEach((elm) => {
      elm.classList.remove("drawer-open");
    });
  };
  return (
    <div id="drawer">
      <div className="js-drawer" onClick={drawerTrigger}>
        <span className="drawer-top"></span>
        <span className="drawer-middle"></span>
        <span className="drawer-bottom"></span>
      </div>
      <div className="js-drawer-content">
        <ul>
          <li>
            <Link to="about" smooth onClick={drawerClose}>
              About
            </Link>
          </li>
          <li>
            <Link to="skills" smooth onClick={drawerClose}>
              Skills
            </Link>
          </li>
          <li>
            <Link to="works" smooth onClick={drawerClose}>
              Works
            </Link>
          </li>
          <li>
            <Link to="contact" smooth onClick={drawerClose}>
              Contact
            </Link>
          </li>
        </ul>
        <ul className="social-icons">
          {/* <li className="icon-link">
            <a href="https://twitter.com/">
              <FaTwitter className="social-icon" size="2rem" />
            </a>
          </li> */}
          <li className="icon-link">
            <a href="https://github.com/">
              <FaGithub className="social-icon" size="2rem" />
            </a>
          </li>
          <li className="icon-link">
            <a href="https://instagram.com/">
              <FaInstagram className="social-icon" size="2rem" />
            </a>
          </li>
        </ul>
      </div>
      <div className="js-drawer-bg" onClick={drawerClose}></div>
    </div>
  );
};
