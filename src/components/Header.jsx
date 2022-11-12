import ProfileImage from "../images/profile-image.png";
import { FaGithub, FaInstagram } from "react-icons/fa";

export const Header = () => {
  return (
    <header>
      <div className="container">
        <div className="display-table">
          <div className="display-table-contents">
            <div
              className="profile-thumb"
              style={{ backgroundImage: `url(${ProfileImage})` }}
            ></div>
            <h1 className="title-text">Ryo Inada</h1>
            <h3 className="title-text">Frontend Engineer,Creator</h3>
            <ul className="social-icons">
              <li className="icon-link">
                <a href="https://github.com/">
                  <FaGithub color="white" size="2rem" />
                </a>
              </li>
              <li className="icon-link">
                <a href="https://instagram.com/">
                  <FaInstagram color="white" size="2rem" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
};
