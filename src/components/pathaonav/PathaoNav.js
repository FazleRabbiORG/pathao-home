import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { faGlobe } from "@fortawesome/free-solid-svg-icons";
import {
  Button,
  Container,
  Form,
  FormControl,
  Nav,
  Navbar,
  NavDropdown,
} from "react-bootstrap";
import NavCard from "./navcard/NavCard";
import "./pathaonav.css";

const PathaoNav = () => {
  const [show1, setShow1] = useState(false);
  const showDropdown1 = (e) => {
    setShow1(!show1);
  };
  const hideDropdown1 = (e) => {
    setShow1(false);
  };

  const [show2, setShow2] = useState(false);
  const showDropdown2 = (e) => {
    setShow2(!show2);
  };
  const hideDropdown2 = (e) => {
    setShow2(false);
  };
  const [show3, setShow3] = useState(false);
  const showDropdown3 = (e) => {
    setShow3(!show3);
  };
  const hideDropdown3 = (e) => {
    setShow3(false);
  };

  const [show4, setShow4] = useState(false);
  const showDropdown4 = (e) => {
    setShow4(!show4);
  };
  const hideDropdown4 = (e) => {
    setShow4(false);
  };

  const [show5, setShow5] = useState(false);
  const showDropdown5 = (e) => {
    setShow5(!show5);
  };
  const hideDropdown5 = (e) => {
    setShow5(false);
  };

  const navCardinfo1 = [
    {
      img: "https://pathao.com/bn/wp-content/themes/webpathao/assets/images/menu/rides.png?v=26.4.20",
      title: "গাড়ি দিয়ে আয় করুন",
      descriptions: "হয়ে যান বাইক রাইডার",
    },
    {
      img: "https://pathao.com/bn/wp-content/themes/webpathao/assets/images/menu/cars.png?v=26.4.20",
      title: "গাড়ি দিয়ে আয় করুন",
      descriptions: "হয়ে যান কার ক্যাপ্টেন",
    },
    {
      img: "https://pathao.com/bn/wp-content/themes/webpathao/assets/images/menu/cars.png?v=26.4.20",
      title: "গাড়ি দিয়ে আয় করুন",
      descriptions: "হয়ে যান কার ক্যাপ্টেন",
    },
  ];
  const navCardinfo2 = [
    {
      img: "https://pathao.com/bn/wp-content/themes/webpathao/assets/images/menu/rides.png?v=26.4.20",
      title: "গাড়ি দিয়ে আয় করুন",
      descriptions: "হয়ে যান বাইক রাইডার",
    },
    {
      img: "https://pathao.com/bn/wp-content/themes/webpathao/assets/images/menu/cars.png?v=26.4.20",
      title: "গাড়ি দিয়ে আয় করুন",
      descriptions: "হয়ে যান কার ক্যাপ্টেন",
    },
    {
      img: "https://pathao.com/bn/wp-content/themes/webpathao/assets/images/menu/cars.png?v=26.4.20",
      title: "গাড়ি দিয়ে আয় করুন",
      descriptions: "হয়ে যান কার ক্যাপ্টেন",
    },
    {
      img: "https://pathao.com/bn/wp-content/themes/webpathao/assets/images/menu/cars.png?v=26.4.20",
      title: "গাড়ি দিয়ে আয় করুন",
      descriptions: "হয়ে যান কার ক্যাপ্টেন",
    },
    {
      img: "https://pathao.com/bn/wp-content/themes/webpathao/assets/images/menu/cars.png?v=26.4.20",
      title: "গাড়ি দিয়ে আয় করুন",
      descriptions: "হয়ে যান কার ক্যাপ্টেন",
    },
    {
      img: "https://pathao.com/bn/wp-content/themes/webpathao/assets/images/menu/cars.png?v=26.4.20",
      title: "গাড়ি দিয়ে আয় করুন",
      descriptions: "হয়ে যান কার ক্যাপ্টেন",
    },
  ];
  return (
    <Navbar className="pathaonav m-0 p-0" bg="white" expand="lg">
      <Container fluid className="container">
        <Navbar.Brand href="#">
          <img
            src="https://pathao.com/bn/wp-content/uploads/sites/6/2019/02/Pathao_Logo-.svg"
            alt=""
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav className="me-auto " style={{ maxHeight: "100px" }} navbarScroll>
            <NavDropdown
              show={show1}
              onMouseEnter={showDropdown1}
              onMouseLeave={hideDropdown1}
              className="p-nav-dropdown navitems"
              title="আয় করুন"
              id="navbarScrollingDropdown"
            >
              <div>
                {navCardinfo1.map((info) => (
                  <NavDropdown.Item href="#">
                    <NavCard info={info} />
                  </NavDropdown.Item>
                ))}
              </div>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">
                ড্রাইভ অ্যাপ ডাউনলোড করুন
              </NavDropdown.Item>
            </NavDropdown>
            <NavDropdown
              show={show2}
              onMouseEnter={showDropdown2}
              onMouseLeave={hideDropdown2}
              className="p-nav-dropdown navitems"
              title="সার্ভিসসমূহ"
              id="navbarScrollingDropdown"
            >
              <div className="nav2">
                {navCardinfo2.map((info) => (
                  <NavDropdown.Item className="" href="#">
                    <NavCard info={info} />
                  </NavDropdown.Item>
                ))}
              </div>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#">
                <div className="row">
                  <div className="col-md-6">
                    <h6>ইউজার অ্যাপ ডাউনলোড করুন</h6>
                    <img
                      src="https://pathao.com/bn/wp-content/uploads/sites/6/2019/02/Google-Play-nb.png"
                      alt=""
                    />
                    <img
                      src="https://pathao.com/bn/wp-content/uploads/sites/6/2019/02/App-Store-nb.png"
                      alt=""
                    />
                  </div>
                  <div className="col-md-6">
                    <h5>ড্রাইভ অ্যাপ ডাউনলোড করুন</h5>
                    <img
                      src="https://pathao.com/bn/wp-content/uploads/sites/6/2019/02/Google-Play-nb.png"
                      alt=""
                    />
                  </div>
                </div>
              </NavDropdown.Item>
            </NavDropdown>
            <NavDropdown
              show={show3}
              onMouseEnter={showDropdown3}
              onMouseLeave={hideDropdown3}
              className="p-nav-dropdown navitems"
              title="হেল্প"
              id="navbarScrollingDropdown"
            >
              <NavDropdown.Item href="#">
                <span>ইউজার হেল্প সেন্টার</span>
              </NavDropdown.Item>
              <NavDropdown.Item href="#">
                <span>রাইডার/ক্যাপ্টেন হেল্প সেন্টার</span>
              </NavDropdown.Item>
              <NavDropdown.Item href="#">
                <span>মার্চেন্ট হেল্প সেন্টার</span>
              </NavDropdown.Item>
              <NavDropdown.Item href="#">
                <span>ওয়াক-ইন-সাপোর্ট সেন্টার (WIS)</span>
              </NavDropdown.Item>
              <NavDropdown.Item href="#">
                <span>ইউজার হেকিভাবে পাঠাও জয়েন করব</span>
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#">
                <span>সাপোর্টে মেসেজ দিন</span>
              </NavDropdown.Item>
              <NavDropdown.Divider />

              <NavDropdown.Item href="#">
                <span>হেল্পলাইন ০৯৬৭৮১০০৮০০</span>
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#">ব্লগ</Nav.Link>
            <Nav.Link href="#">COVID-19 পদক্ষেপ</Nav.Link>
            <NavDropdown
              show={show4}
              onMouseEnter={showDropdown4}
              onMouseLeave={hideDropdown4}
              className="p-nav-dropdown navitems"
              title="আরো ◉"
              id="navbarScrollingDropdown"
            >
              <NavDropdown.Item href="#">
                <span>ইউজার হেল্প সেন্টার</span>
              </NavDropdown.Item>
              <NavDropdown.Item href="#">
                <span>রাইডার/ক্যাপ্টেন হেল্প সেন্টার</span>
              </NavDropdown.Item>
              <NavDropdown.Item href="#">
                <span>মার্চেন্ট হেল্প সেন্টার</span>
              </NavDropdown.Item>
              <NavDropdown.Item href="#">
                <span>ওয়াক-ইন-সাপোর্ট সেন্টার (WIS)</span>
              </NavDropdown.Item>
              <NavDropdown.Item href="#">
                <span>ইউজার হেকিভাবে পাঠাও জয়েন করব</span>
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#">
                <span>সাপোর্টে মেসেজ দিন</span>
              </NavDropdown.Item>
              <NavDropdown.Divider />

              <NavDropdown.Item href="#">
                <span>হেল্পলাইন ০৯৬৭৮১০০৮০০</span>
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <div className="ml-auto text-secondary">
            <NavDropdown
              show={show5}
              onMouseEnter={showDropdown5}
              onMouseLeave={hideDropdown5}
              className="p-nav-dropdown navitems"
              title="বাংলা"
              id="navbarScrollingDropdown"
              align={{ lg: "end" }}
            >
              <NavDropdown.Item href="#">
                <span>বাংলা</span>
              </NavDropdown.Item>
              <NavDropdown.Item href="#">
                <span>English</span>
              </NavDropdown.Item>
            </NavDropdown>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default PathaoNav;
