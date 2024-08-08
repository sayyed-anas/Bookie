import React from "react";

const Banner = () => {
  return (
    <>
      <div className="main px-4 md:px-20 flex flex-col-reverse text-black dark:text-white dark:border-white md:flex-row pt-10">
        <div className="left w-full md:w-1/2 space-y-6 md:my-36">
          <h1 className="text-4xl font-bold text-center md:text-start">
            Hello, welcome here to learn something{" "}
            <span className="text-pink-600">new everyday!!!</span>
          </h1>
          <p className="text-center md:text-start">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit
            aliquam, ipsa quis ducimus unde beatae. Non, illum nihil dignissimos
            enim ab, quis at porro distinctio mollitia, quidem officia iure
            deleniti consequatur animi eligendi. Sit?
          </p>

          <label className="input input-bordered flex items-center gap-2 dark:bg-slate-900 dark:text-white dark:border-white ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              fill="currentColor"
              className="h-4 w-4 opacity-70 dark:invert-0"
            >
              <path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
              <path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
            </svg>
            <input type="text" className="grow" placeholder="Email" />
          </label>
          <div className="flex justify-center md:justify-start">
            <button className="btn btn-secondary bg-pink-600 hover:bg-transparent text-white hover:dark:text-white mb-6 md:mb-0">
              Secondary
            </button>
          </div>
        </div>
        <div className="right w-full md:w-1/2 flex items-center justify-end my-10 md:my-0 ">
          <img className="w-6/4 " src="img/banner.png" alt="" />
        </div>
      </div>
    </>
  );
};

export default Banner;
