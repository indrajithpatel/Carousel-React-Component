import React, { useEffect, useState } from "react";
import CarouselContent from "./CarouselContent";
import LeftArrow from "./LeftArrow";
import RightArrow from "./RightArrow";
import axios from "axios";

function Carousel() {
  const [state, setState] = useState([]);
  const [visibleItems, setVisibleItems] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(4);
  const ScrollToRight = () => {
    setCurrentIndex((previousState) => {
      return previousState + 4;
    });
    const start = currentIndex;
    const end = currentIndex + 4;
    const nextItems = state.slice(start, end);
    console.log(nextItems);
    setVisibleItems(nextItems);
  };

  const ScrollToLeft = () => {
    setCurrentIndex((previousState) => {
      return previousState - 4;
    });
    const end = currentIndex;
    const start = currentIndex - 4;
    const nextItems = state.slice(start, end);
    console.log(nextItems);
    setVisibleItems(nextItems);
  };

  useEffect(() => {
    axios.get("https://picsum.photos/v2/list").then((res) => {
      setState(res.data);
      const temp = res.data.slice(0, 4);
      console.log(temp);
      setVisibleItems(temp);
    });
  }, []);
  return (
    <div className="carousel">
      <LeftArrow onClick={ScrollToLeft} />
      <div className="carousel__container">
        {visibleItems.length > 0
          ? visibleItems.map((item) => {
              return (
                <CarouselContent
                  src={item.download_url}
                  content={item.author}
                  key={item.index}
                ></CarouselContent>
              );
            })
          : "Loading...."}
      </div>
      <RightArrow onClick={ScrollToRight} />
    </div>
  );
}

export default Carousel;
