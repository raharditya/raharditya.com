import Slider from "react-slick";
import StackItem from "../StackItem";
import { useState } from "react";

function Stack(props) {
  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const [category, setCategory] = useState(0);

  return (
    <div className="section-stack text-center pt-12 pb-16">
      <div className="md:container md:mx-auto">
        <h2 className="section-title title-white text-left mb-4 font-bold text-5xl px-6">
          My Tech
          <br />
          Stacks
        </h2>

        <div className="flex pl-6">
          <h3
            className={`mr-4 text-blue-100 ${
              category === 0 ? "font-bold" : " text-defocused"
            }`}
            onClick={() => setCategory(0)}
            key={1}
          >
            Front-end
          </h3>
          <h3
            className={`mr-4 text-gray-200 ${
              category === 1 ? "font-bold" : " text-defocused"
            }`}
            onClick={() => setCategory(1)}
            key={2}
          >
            Back-end
          </h3>
          <h3
            className={`mr-4 text-gray-200 ${
              category === 2 ? "font-bold" : " text-defocused"
            }`}
            onClick={() => setCategory(2)}
            key={3}
          >
            UI/UX Design
          </h3>
        </div>

        <div className="mt-8 overflow-hidden w-full">
          {category === 0 ? (
            <Slider {...settings}>
              <StackItem />
              <StackItem />
              <StackItem />
            </Slider>
          ) : category === 1 ? (
            <Slider {...settings}>
              <StackItem />
              <StackItem />
            </Slider>
          ) : (
            <Slider {...settings}>
              <StackItem />
            </Slider>
          )}
        </div>

        <h2 className="section-title title-white mb-4 mt-16 font-bold text-3xl px-6">
          Featured
        </h2>

        <div className="grid md:gap-4 grid-cols-2 grid-rows-3 md:grid-rows-4 md:grid-cols-3 px-6">
          <div className="bg-gray-200 h-32 md:h-48 md:col-start-1 col-end-2 row-start-1 row-end-2 md:rounded-lg">
            1
          </div>
          <div className="bg-gray-400 h-32 md:h-48 md:col-start-1 col-end-2 row-start-2 row-end-3 md:rounded-lg">
            2
          </div>
          <div className="bg-gray-100 h-32 md:h-full md:col-start-2 col-end-4 row-start-1 row-end-3 md:rounded-lg">
            3
          </div>
          <div className="bg-gray-200 h-32 md:h-full md:col-start-1 col-end-3 row-start-3 row-end-5 md:rounded-lg">
            4
          </div>
          <div className="bg-gray-600 h-32 md:h-48 md:col-start-3 col-end-4 row-start-3 row-end-4 md:rounded-lg">
            5
          </div>
          <div className="bg-gray-400 h-32 md:h-48 md:col-start-3 col-end-4 row-start-4 row-end-5 md:rounded-lg">
            6
          </div>
        </div>
      </div>
    </div>
  );
}

export default Stack;
