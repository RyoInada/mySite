import StarRotate from "../video/StarRotate.webm";
import StarRotateMp4 from "../video/StarRotater.mp4";

export const Maincover = () => {
  return (
    <div className="main-cover">
      <video className="cover-movie" muted="muted" autoPlay playsInline loop>
        <source src={StarRotate} type="video/webm" media="(min-width: 769px)" />
        <source
          src={StarRotateMp4}
          type="video/mp4"
          media="(max-width: 768px)"
          autoPlay
          playsInline
          loop
        />
      </video>
      <div className="overlay"></div>
    </div>
  );
};
