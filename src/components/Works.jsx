import { WorkCard } from "./WorkCard";
import PigeonImage from "../images/pigeon.png";
import TimelessImage from "../images/timeless.png";
import ZokujinImage from "../images/zokujin.png";
import SprImage from "../images/spr.png";
import ColonyImage from "../images/colony.png";
import PvImage from "../images/pv.png";
import { Carousel } from "3d-react-carousal";

export const Works = () => {
  // const accordionTrigger = (e) => {
  //   e.currentTarget.classList.toggle("is-expanded");
  //   e.currentTarget.nextElementSibling.classList.toggle("accordion-open");
  // };
  let shopifySlide = [
    <WorkCard
      title="Pigeon"
      image={PigeonImage}
      roll="frontend engineer"
      url="https://shop.pigeon.co.jp/"
    />,
    <WorkCard
      title="Timeless comfort"
      image={TimelessImage}
      roll="frontend engineer"
      url="https://timelesscomfort.com/"
    />,
  ];
  let wordpressSlide = [
    <WorkCard
      title="Zokujin"
      image={ZokujinImage}
      roll="frontend engineer"
      url="https://zokujin.com/"
    />,
    <WorkCard
      title="DELUJO"
      image={SprImage}
      roll="frontend engineer"
      url="https://delujospr.com/"
    />,
  ];
  let otherSlide = [
    <WorkCard
      title="Colony Interactive"
      image={ColonyImage}
      roll="frontend engineer"
      url="https://recruit.colony-i.com/"
    />,
    <WorkCard
      title="PourVous"
      image={PvImage}
      roll="frontend engineer"
      url="https://www.pourvous.co.jp/corporate/"
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
          <Carousel slides={shopifySlide} />
        </div>
        <div className="heading">
          <h3>Wordpress</h3>
        </div>
        <div className="works-container">
          <Carousel slides={wordpressSlide} />
        </div>
        <div className="heading">
          <h3>Others</h3>
        </div>
        <div className="works-container">
          <Carousel slides={otherSlide} />
        </div>
      </div>
    </div>
  );
};
