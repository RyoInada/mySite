import CoverImage from "../images/cover-image2.webp";

export const Maincover = () => {
  return (
    <div
      className="main-cover"
      style={{ backgroundImage: `url(${CoverImage})` }}
    >
      <div className="overlay"></div>
    </div>
  );
};
