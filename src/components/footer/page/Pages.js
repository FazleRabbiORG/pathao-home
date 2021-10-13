import React from "react";
import "./pages.css"

const Pages = () => {
  return (
    <div className="row pages ">
      <div className="col-md-3">
        <div className="page-title">
          <h4 className="mb-4">প্লাটফর্ম</h4>
        </div>
        <div className="link">
          <ul>
            <li>পাঠাও বাইক</li>
            <li>পাঠাও কার</li>
            <li>পাঠাও ফুড</li>
            <li>
              পাঠাও শপ <span>নতুন</span>
            </li>
            <li>পাঠাও পার্সেল</li>
            <li>পাঠাও ক্যুরিয়ার</li>
            <li>পাঠাও হেলথ</li>
          </ul>
        </div>
      </div>
      <div className="col-md-3">
        <div className="page-title">
          <h4 className="mb-4">আয় করুন</h4>
        </div>
        <div className="link">
          <ul>
            <li>বাইক দিয়ে আয় করুন</li>
            <li>গাড়ি দিয়ে আয় করুন</li>
            <li>সাইকেল দিয়ে আয় করুন</li>
          </ul>
        </div>
      </div>
      <div className="col-md-3">
        <div className="page-title">
          <h4 className="mb-4">মার্চেন্ট</h4>
        </div>
        <div className="link">
          <ul>
            <li>কুরিয়ার মার্চেন্ট সাইন আপ</li>
            <li>কুরিয়ার মার্চেন্ট লগইন</li>
            <li>কার অ্যাডমিরাল লগইন</li>
            <li>রেস্তো মার্চেন্ট লগইন</li>
          </ul>
        </div>
      </div>
      <div className="col-md-3">
        <div className="page-title">
          <h4 className="mb-4">হেল্প</h4>
        </div>
        <div className="link">
          <ul>
            <li>ওয়াক-ইন-সাপোর্ট সেন্টার</li>
            <li>ইউজার হেল্প সেন্টার</li>
            <li>রাইডার হেল্প সেন্টার</li>
            <li>মার্চেন্ট হেল্প সেন্টার</li>
            <li>হেল্পলাইন ০৯৬৭৮১০০৮০০</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Pages;
