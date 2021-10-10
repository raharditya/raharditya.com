import React from "react";

export default function KknHeader() {
  return (
    <div className="featured-project relative rounded-xl transition duration-150 ease-in-out">
      <div className="overflow-hidden">
        <div className="featured-ss-container grid grid-cols-3">
          <div className="featured-col featured-col-1">
            {/* START */}
            <img
              src="/assets/featured/ss1.png"
              alt=""
              className="featured-ss"
            />
            <img
              src="/assets/featured/ss2.png"
              alt=""
              className="featured-ss"
            />

            {/* COPY */}
            <img
              src="/assets/featured/ss1.png"
              alt=""
              className="featured-ss"
            />
            <img
              src="/assets/featured/ss2.png"
              alt=""
              className="featured-ss"
            />
          </div>

          <div className="featured-col featured-col-2">
            {/* START */}
            <img
              src="/assets/featured/ss2.png"
              alt=""
              className="featured-ss"
            />
            <img
              src="/assets/featured/ss3.png"
              alt=""
              className="featured-ss"
            />

            {/* COPY */}
            <img
              src="/assets/featured/ss2.png"
              alt=""
              className="featured-ss"
            />
            <img
              src="/assets/featured/ss3.png"
              alt=""
              className="featured-ss"
            />
          </div>

          <div className="featured-col featured-col-3">
            {/* START */}
            <img
              src="/assets/featured/ss3.png"
              alt=""
              className="featured-ss"
            />
            <img
              src="/assets/featured/ss4.png"
              alt=""
              className="featured-ss"
            />

            {/* COPY */}
            <img
              src="/assets/featured/ss3.png"
              alt=""
              className="featured-ss"
            />
            <img
              src="/assets/featured/ss4.png"
              alt=""
              className="featured-ss"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
