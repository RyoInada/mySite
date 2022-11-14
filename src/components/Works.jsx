import { WorkCard } from "./WorkCard";
import PigeonImage from "../images/pigeon.png";
import TimelessImage from "../images/timeless.png";
import ZokujinImage from "../images/zokujin.png";
import SprImage from "../images/spr.png";
import ColonyImage from "../images/colony.png";
import PvImage from "../images/pv.png";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/thumbs";
import "swiper/css/effect-cube";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { EffectCube, Pagination, Navigation } from "swiper";
export const Works = () => {
  // const accordionTrigger = (e) => {
  //   e.currentTarget.classList.toggle("is-expanded");
  //   e.currentTarget.nextElementSibling.classList.toggle("accordion-open");
  // };
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
          <Swiper
            effect={"cube"}
            loop={true}
            cubeEffect={{
              shadow: true,
              slideShadows: true,
              shadowOffset: 20,
              shadowScale: 0.94,
            }}
            navigation={true}
            pagination={{
              dynamicBullets: true,
              clickable: true,
            }}
            modules={[EffectCube, Pagination, Navigation]}
            className="mySwiper"
          >
            <SwiperSlide>
              <WorkCard
                title="Pigeon"
                image={PigeonImage}
                roll="frontend engineer"
                url="https://shop.pigeon.co.jp/"
              />
            </SwiperSlide>
            <SwiperSlide>
              <WorkCard
                title="Timeless Comfort"
                image={TimelessImage}
                roll="frontend engineer"
                url="https://timelesscomfort.com/"
              />
            </SwiperSlide>
          </Swiper>
        </div>
        <div className="heading">
          <h3>Wordpress/Others</h3>
        </div>
        <div className="works-container">
          <Swiper
            effect={"cube"}
            loop={true}
            cubeEffect={{
              shadow: true,
              slideShadows: true,
              shadowOffset: 20,
              shadowScale: 0.94,
            }}
            navigation={true}
            pagination={{
              dynamicBullets: true,
              clickable: true,
            }}
            modules={[EffectCube, Pagination, Navigation]}
            className="mySwiper"
          >
            <SwiperSlide>
              <WorkCard
                title="Zokujin"
                image={ZokujinImage}
                roll="frontend engineer"
                url="https://zokujin.com/"
              />
            </SwiperSlide>
            <SwiperSlide>
              <WorkCard
                title="Colony Interactive"
                image={ColonyImage}
                roll="frontend engineer"
                url="https://recruit.colony-i.com/"
              />
            </SwiperSlide>
            <SwiperSlide>
              <WorkCard
                title="DELUJO"
                image={SprImage}
                roll="frontend engineer"
                url="https://delujospr.com/"
              />
            </SwiperSlide>
            <SwiperSlide>
              <WorkCard
                title="PourVous"
                image={PvImage}
                roll="frontend engineer"
                url="https://www.pourvous.co.jp/corporate/"
              />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>
  );
};
