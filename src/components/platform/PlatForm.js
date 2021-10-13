import React from "react";
import { Nav, Tab } from "react-bootstrap";
import "./platform.css";
import PlatformDataCard from "./PlatformData";
const PlatForm = () => {
  const data1 = {
    
    title1:"জ্যাম থেকে বাঁচুন, সময় বাঁচান",
    title2:"আমরা আছি আপনার সাথে",
    title3:"সব সময় এভেইলেবল",
    description1:"অসহনীয় ট্রাফিক জ্যাম থেকে বাঁচার জন্য একমাত্র সমাধান পাঠাও বাইক!। সাশ্রয়ী মূল্যে সময় বাঁচিয়ে গন্তব্যস্থলে পৌঁছে যান সময়মতো।",
    description2:"আমাদের প্রত্যেকটি রাইড নিরাপদ এবং ইনস্যুরেন্স সার্ভিসের আওতাভুক্ত, যার কারনে আমাদের সাথে আপনার প্রতিটি রাইড হবে অনেক বেশি নিরাপদ।",
    description3:"ভোর সকাল কিংবা গভীর রাত, যেকোন সময়েই আমাদের প্রশিক্ষিত রাইডাররা প্রস্তুত আপনার নিরাপদ রাইড নিশ্চিত করতে",
    img:'https://pathao.com/bn/wp-content/uploads/sites/6/2018/12/Pathao-Parcel.png'
  };
  const data2 = {
    
    title1:"বেঁছে নিন আপনার পছন্দের অপশন",
    title2:"আরামদায়ক ও সাশ্রয়ী",
    title3:"ঝামেলামুক্ত এবং দ্রুত",
    description1:"বাজেট টাইট? ব্যবহার করুন পাঠাও কার লাইট ! এসি কারে ট্র্যাভেল করতে চান? ব্যবহার করুন পাঠাও কার প্লাস।",
    description2:"পাঠাও কার প্লাস আপনাকে দিচ্ছে আরামদায়ক এবং সাশ্রয়ী এসি গাড়িতে ট্র্যাভেল করার সুবিধা।",
    description3:"মাত্র কয়েকটি ক্লিক এর মাধ্যমে খুব দ্রুত কোন ঝামেলা ছাড়াই আপনি পেয়ে যাবেন আপনার কার রাইড।",
    img:'https://pathao.com/bn/wp-content/uploads/sites/6/2018/12/Bike-Ride.png'
  };
  const data3 = {
    
    title1:"ফাস্টেস্ট ফুড ডেলিভারি",
    title2:"হাজারো অপশন থেকে বেছে নিন",
    title3:"অবিশ্বাস্য ডিসকাউন্ট",
    description1:"অর্ডারকৃত ফুড ডেলিভারি পাবেন মাত্র ১ ঘণ্টারও কম সময়ে! আমরাই দিচ্ছি সবচেয়ে কম সময়ে ফুড ডেলিভারি এর নিশ্চয়তা।",
    description2:"ঢাকা এবং চট্টগ্রামের ৪০০০ এর বেশি রেস্টুরেন্ট পাঠাও ফুডে এভেইলেবল আছে। বেছে নিন আপনার পছন্দের রেস্টুরেন্ট এবং ফুড আইটেম।",
    description3:"রেস্টুরেন্ট এর সাথে পার্টনারশিপের মাধ্যমে যুক্ত হয়ে পাঠাও আপনাকে অফার করে সাশ্রয়ী মূল্যে অবিশ্বাস্য ফুড কম্বো!",
    img:"https://pathao.com/bn/wp-content/uploads/sites/6/2018/12/Pathao-Car.png"
  };
  const data4 = {
    title1:"অন ডিমান্ড ডেলিভারি",
    title2:"ভরসা রাখুন",
    title3:"ইমারজেন্সি? ডেলিভার করুন পার্সেল এর মাধ্যমে",
    description1:"আপনার চার্জার কিংবা চাবি বাসায় রেখে এসেছেন? পাঠাও পার্সেল ব্যবহার করে ডেলিভারি করুন আপনার প্রয়োজনীয় জিনিষ।",
    description2:"আপনার যেকোনো ধরনের জরুরী ডকুমেন্ট ডেলিভারির জন্য পাঠাও পার্সেল আছে আপনার বিশ্বস্ত সহযোগী হিসেবে।",
    description3:"কম সময়ে দ্রুততম পার্সেল ডেলিভারির জন্য একমাত্র সমাধান। আপনার প্রয়োজনীয়তাই আমাদের কাছে সবচেয়ে বেশি গুরুত্বপূর্ণ।",
    img:"https://pathao.com/bn/wp-content/uploads/sites/6/2018/12/Patha-food.png"
  };
  

  return (
    <div className="platform">
      <div className="title text-center mt-5 mb-5">
        <h2>পাঠাও প্ল্যাটফর্ম</h2>
        <p>পাঠাও সকল সুবিধা প্রদান করে শুধুমাত্র আপনার জন্য।</p>
      </div>
      <div className="container">
        <Tab.Container id="left-tabs-example" defaultActiveKey="first">
          <Nav variant="tabs" className="d-md-flex mt-3 mb-3 newstab">
            <Nav.Item className="col-md-3 ">
              <Nav.Link eventKey="first">
              <div className="d-flex justify-content-center align-items-center platformtab">

                <div className="m-2">
                  <img
                    className="img-fluid"
                    src="https://pathao.com/bn/wp-content/themes/webpathao/assets/images/menu/rides.png?v=26.4.20"
                    alt=""
                  />
                </div>
                <div className="m-2"><h4>বাইক</h4></div></div>
              </Nav.Link>
            </Nav.Item>
            <Nav.Item className="col-md-3">
              <Nav.Link className="" eventKey="second">
                <div className="d-flex justify-content-center align-items-center platformtab">
                  <div className="m-2">
                    <img
                      className="img-fluid"
                      src="https://pathao.com/bn/wp-content/themes/webpathao/assets/images/menu/cars.png?v=26.4.20"
                      alt=""
                    />
                  </div>
                  <div className="m-2">
                    <h4>কার</h4>
                  </div>
                </div>
              </Nav.Link>
            </Nav.Item>
            <Nav.Item className="col-md-3">
              <Nav.Link eventKey="third">
                <div className="d-flex justify-content-center align-items-center platformtab">
                  <div className="m-2">
                    <img
                      className="img-fluid"
                      src="https://pathao.com/bn/wp-content/themes/webpathao/assets/images/menu/cars.png?v=26.4.20"
                      alt=""
                    />
                  </div>
                  <div className="m-2"><h4>ফুড</h4></div>
                </div>
              </Nav.Link>
            </Nav.Item>
            <Nav.Item className="col-md-3">
              <Nav.Link eventKey="fourth">
              <div className="d-flex justify-content-center align-items-center platformtab">
                <div className="m-2">
                  <img
                    className="img-fluid"
                    src="https://pathao.com/bn/wp-content/themes/webpathao/assets/images/menu/cars.png?v=26.4.20"
                    alt=""
                  />
                </div>
                <div className="m-2"> <h4>পার্সেল</h4></div>
              </div>
              </Nav.Link>
            </Nav.Item>
          </Nav>
          <div className="p-4">
            <Tab.Content>
              <Tab.Pane eventKey="first">
                <PlatformDataCard data={data1} />
              </Tab.Pane>
              <Tab.Pane eventKey="second">
                <PlatformDataCard data={data2} />
              </Tab.Pane>
              <Tab.Pane eventKey="third">
                <PlatformDataCard data={data3} />
              </Tab.Pane>
              <Tab.Pane eventKey="fourth">
                <PlatformDataCard data={data4} />
              </Tab.Pane>
            </Tab.Content>
          </div>
        </Tab.Container>
      </div>
    </div>
  );
};

export default PlatForm;
