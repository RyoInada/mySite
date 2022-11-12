import CoverImage from "../images/cover-image2.jpg";

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
