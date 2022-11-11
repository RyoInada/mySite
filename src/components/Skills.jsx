import Circle from "react-circle";
import {
  FaNodeJs,
  FaReact,
  FaSass,
  FaWordpress,
  FaShopify,
} from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";

export const Skills = () => {
  return (
    <div id="skills">
      <div className="container">
        <div className="heading">
          <h2>Skills</h2>
        </div>
        <div className="heading">
          <h3>Languages</h3>
        </div>
        <div className="skills-container">
          <div className="skill-item">
            <p className="description">
              <strong>HTML</strong>
            </p>
            <Circle animate progress="100" />
          </div>
          <div className="skill-item">
            <p className="description">
              <strong>CSS</strong>
            </p>
            <Circle animate progress="80" />
          </div>
          <div className="skill-item">
            <p className="description">
              <strong>JavaScript</strong>
            </p>
            <Circle animate progress="80" />
          </div>
          <div className="skill-item">
            <p className="description">
              <strong>PHP</strong>
            </p>
            <Circle animate progress="40" />
          </div>
          <div className="skill-item">
            <p className="description">
              <strong>liquid</strong>
            </p>
            <Circle animate progress="90" />
          </div>
        </div>
        <div className="heading">
          <h3>Frameworks</h3>
        </div>
        <div className="skills-container">
          <div className="skill-item">
            <FaNodeJs className="social-icon" size="4rem" />
            <p className="description">
              <strong>Node.js</strong>
            </p>
          </div>
          <div className="skill-item">
            <FaReact className="social-icon" size="4rem" />
            <p className="description">
              <strong>React.js</strong>
            </p>
          </div>
          <div className="skill-item">
            <FaSass className="social-icon" size="4rem" />
            <p className="description">
              <strong>Scss/Sass</strong>
            </p>
          </div>
          <div className="skill-item">
            <SiTailwindcss className="social-icon" size="4rem" />
            <p className="description">
              <strong>Tailwind.css</strong>
            </p>
          </div>
        </div>
        <div className="heading">
          <h3>CMS/Platform</h3>
        </div>
        <div className="skills-container">
          <div className="skill-item">
            <FaShopify className="social-icon" size="4rem" />
            <p className="description">
              <strong>Shopify</strong>
            </p>
          </div>
          <div className="skill-item">
            <FaWordpress className="social-icon" size="4rem" />
            <p className="description">
              <strong>Wordpress</strong>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
