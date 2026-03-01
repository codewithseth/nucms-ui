const Slider = ({ image }) => {
  return (
    <div>
      <img src={image} alt="..." className="carousel-thumbnail w-full h-full object-cover" />
    </div>
  );
};

export default Slider;
