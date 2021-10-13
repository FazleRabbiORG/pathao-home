import React from "react";
import "./blogcard.css";

const BlogCard = ({info}) => {
  return (
    <div className="col-md-4 ">
      <div className="blogcard">
        <img
          src="https://pathao.com/bn/wp-content/uploads/sites/6/2021/06/AddToCart_Blog-348x224.png"
          alt=""
        />
        <div className="card-content">
          <span>{info.categories}</span> <span className="dot"></span>
          <span>{info.date}</span>
          <h4 className="mt-3 mb-3">{info.title}</h4>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
