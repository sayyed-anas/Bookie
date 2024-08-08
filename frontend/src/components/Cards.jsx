import React from "react";

const Cards = () => {
  return (
    <>
      <div>
        <div className="card bg-base-100 max-w-96 shadow-xl mb-10">
          <figure>
            <img src="img/banner.png" alt="Shoes" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">
              Shoes!r
              <div className="badge badge-secondary">NEW</div>
            </h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
            <div className="card-actions justify-end">
              <div className="badge badge-outline">Fashion</div>
              <div className="badge badge-outline">Products</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cards;
