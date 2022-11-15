import ProfileImage from "../images/profile-image.webp";
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
                <a
                  href="https://github.com/RyoInada"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FaGithub color="white" size="35px" />
                </a>
              </li>
              <li className="icon-link">
                <a
                  href="https://www.instagram.com/ryo_inada/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FaInstagram color="white" size="35px" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
};
