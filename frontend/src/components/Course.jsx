import React from "react";
import data from "../../public/books.json";
import Cards from "./Cards";
import Slider from "react-slick";
import { Link } from "react-router-dom";

const Course = () => {
  const filterData = data.filter((item) => item.category === "paid");
  // console.log(filterData);

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

  return (
    <>
      <div className="text-black dark:border-white  dark:text-white dark:bg-slate-900">
        <div className="mx-10 md:mx-20">
          <h1 className="text-center pt-28 text-xl font-bold text-black dark:text-white dark:bg-slate-900">
            We're Delighted to have{" "}
            <span className="text-pink-500">here :)</span>
          </h1>
          <p className="text-center mt-4">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magnam
            repellendus asperiores totam, esse harum nemo placeat. Pariatur,
            totam magni animi et accusantium nemo? Blanditiis impedit, totam
            necessitatibus quae mollitia dolorem reiciendis similique modi, et
            consequuntur ea nesciunt veritatis animi dolore!
          </p>
          <div className="flex justify-center my-8">
            <Link to={"/"}>
              <button className="bg-pink-500 px-6 py-2 rounded-full text-black font-bold text-center dark:text-white">
                Back
              </button>
            </Link>
          </div>
          <div className="">
            <Slider {...settings}>
              {filterData.map((item) => (
                <Cards item={item} key={item.id} />
              ))}
            </Slider>
          </div>
        </div>
      </div>
    </>
  );
};

export default Course;
