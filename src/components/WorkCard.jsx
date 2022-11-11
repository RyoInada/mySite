export const WorkCard = (props) => {
  return (
    <div>
      <a className="workcard" href={props.url} target="_blank" rel="noreferrer">
        <div className="workcard-image">
          <img src={props.image} alt={props.title} />
        </div>
        <div className="workcard-text">
          <div className="workcard-title">
            <h4>{props.title}</h4>
          </div>
          <p>{props.description}</p>
          <p>Work as:{props.roll}</p>
          <p>Languages:{props.language}</p>
          <p>URL:{props.url}</p>
        </div>
      </a>
    </div>
  );
};
