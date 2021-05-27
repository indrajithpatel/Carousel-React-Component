import "./Carousel.css";
function CarouselContent(props) {
  const { src, content } = props;
  return (
    <div className="carousel__content">
      <img src={src} alt="No text" />
      <p>{content}</p>
    </div>
  );
}

export default CarouselContent;
