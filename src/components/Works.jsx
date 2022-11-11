import { WorkCard } from "./WorkCard";
import ProfileImage from "../images/profile-image.png";

export const Works = () => {
  const accordionTrigger = (e) => {
    e.currentTarget.classList.toggle("is-expanded");
    e.currentTarget.nextElementSibling.classList.toggle("accordion-open");
  };
  return (
    <div id="works">
      <div className="container">
        <div className="heading">
          <h2>Works</h2>
        </div>
        <ul>
          <li className="js-accordion-parent" onClick={accordionTrigger}>
            Shopify sites
          </li>
          <li className="js-accordion-children">
            <WorkCard
              title="test"
              image={ProfileImage}
              roll="frontend engineer"
              language="html/css/javascript/liquid"
              description="this is test"
              url="https//test.com"
            />
          </li>
          <li className="js-accordion-parent" onClick={accordionTrigger}>
            Wordpress sites
          </li>
          <li className="js-accordion-children"></li>
          <li className="js-accordion-parent" onClick={accordionTrigger}>
            Others
          </li>
          <li className="js-accordion-children"></li>
        </ul>
      </div>
    </div>
  );
};
