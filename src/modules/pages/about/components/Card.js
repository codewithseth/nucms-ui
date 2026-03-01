const Card = ({ number, title, description, image }) => {
  return (
    <div className="card xs:mb-4">
      <div className="image-card">
        <img className="w-56 float-right" src={image} alt="logo" />
      </div>
      <div className="push"></div>
      <div className="context-card">
        <h1>
          {number}
          <br />
          {title}
        </h1>
        <p className="mt-2" id="desc">
          {description}
        </p>
      </div>
    </div>
  );
};

export default Card;
