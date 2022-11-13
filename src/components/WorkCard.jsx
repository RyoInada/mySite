export const WorkCard = (props) => {
  return (
    <div>
      <a className="workcard" href={props.url} target="_blank" rel="noreferrer">
        <img src={props.image} alt={props.title} className="workcard-image" />
        <div className="workcard-text">
          <div className="workcard-title">
            <h4>{props.title}</h4>
          </div>
          <p>Work as:{props.roll}</p>
          <p>URL:{props.url}</p>
        </div>
      </a>
    </div>
  );
};
