import { WorkCard } from "./WorkCard";
import ProfileImage from "../images/profile-image.png";
import { Carousel } from "3d-react-carousal";

export const Works = () => {
  // const accordionTrigger = (e) => {
  //   e.currentTarget.classList.toggle("is-expanded");
  //   e.currentTarget.nextElementSibling.classList.toggle("accordion-open");
  // };
  let shopifySlide = [
    <WorkCard
      title="Pigeon"
      image={ProfileImage}
      roll="frontend engineer"
      language="html/css/javascript/liquid"
      description="this is test"
      url="https//test.com"
    />,
    <WorkCard
      title="Timeless comfort"
      image={ProfileImage}
      roll="frontend engineer"
      language="html/css/javascript/liquid"
      description="this is test"
      url="https//test.com"
    />,
  ];
  let wordpressSlide = [
    <WorkCard
      title="Zokujin"
      image={ProfileImage}
      roll="frontend engineer"
      language="html/css/javascript/liquid"
      description="this is test"
      url="https//test.com"
    />,
    <WorkCard
      title="DELUJO"
      image={ProfileImage}
      roll="frontend engineer"
      language="html/css/javascript/liquid"
      description="this is test"
      url="https//test.com"
    />,
  ];
  let otherSlide = [
    <WorkCard
      title="Colony Interactive"
      image={ProfileImage}
      roll="frontend engineer"
      language="html/css/javascript/liquid"
      description="this is test"
      url="https//test.com"
    />,
    <WorkCard
      title="PourVous"
      image={ProfileImage}
      roll="frontend engineer"
      language="html/css/javascript/liquid"
      description="this is test"
      url="https//test.com"
    />,
  ];
  return (
    <div id="works">
      <div className="container">
        <div className="heading">
          <h2>Works</h2>
        </div>
        <div className="heading">
          <h3>Shopify</h3>
        </div>
        <div className="works-container">
          <Carousel slides={shopifySlide} autoplay={true} interval={5000} />
        </div>
        <div className="heading">
          <h3>Wordpress</h3>
        </div>
        <div className="works-container">
          <Carousel slides={wordpressSlide} autoplay={true} interval={5000} />
        </div>
        <div className="heading">
          <h3>Others</h3>
        </div>
        <div className="works-container">
          <Carousel slides={otherSlide} autoplay={true} interval={5000} />
        </div>
      </div>
    </div>
  );
};
