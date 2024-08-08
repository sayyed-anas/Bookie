import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React from "react";
import books from "../../public/books.json";
import Slider from "react-slick";
import Cards from "./Cards";

const FreeBook = () => {
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  const filterBook = books.filter((data) => data.category === "Free");
  // console.log(filterBook);
  return (
    <>
      <hr className="mb-10 md:hidden" />
      <div className="text-black dark:bg-slate-900 dark:text-white">
        <div className="px-4 md:px-20 dark:bg-slate-900 dark:text-white">
          <h2 className="font-bold text-xl text-center">
            Free Offered Courses
          </h2>
          <p className="text-center">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque
            delectus totam pariatur quos, saepe quibusdam, eveniet, veritatis
            vero sint quae illum ratione praesentium!
          </p>
        </div>

        <div className="slider-container mx-10 md:mx-20 my-10">
          <Slider {...settings}>
            {filterBook.map((item) => (
              <Cards item={item} key={item.id} />
            ))}
          </Slider>
        </div>
      </div>
    </>
  );
};

export default FreeBook;
