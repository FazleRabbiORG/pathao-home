import React from "react";
import "./blog.css"
import BlogCard from "./BlogCard"

const Blog = () => {

    const blogData=[
      {
        categories:"পাঠাও ফুড",
        date:"জুন 6, 2021",
        title:"পাঠাও ফুড এ আপনার কার্ট করুন আপডেট",
      },
      {
        categories:"পাঠাও ফুড",
        date:"জুন 3, 2021",
        title:"ঢাকার মনমাতানো সব বার্গারের খোঁজে",
      },
      {
        categories:"পাঠাও কুরিয়ার",
        date:"জুন 1, 2021",
        title:"পাঠাও কুরিয়ার এখন আরও সাশ্রয়ী!",
      }
    ]

  return (
    <div className="blog">
      <div className="container">
        <div className=" d-flex  justify-content-between align-items-center">
          <div className=""><h3>ব্লগ থেকে</h3></div>
          <div className="">
            <a href="#" className="bannerBtn2 btn-solid">ব্লগে যান </a>
          </div>
        </div>
        <div className="row">
            {blogData.map(info => <BlogCard info={info}/>)}
        </div>
      </div>
    </div>
  );
};

export default Blog;
