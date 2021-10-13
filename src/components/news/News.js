import React from "react";
import { Nav, Tab } from "react-bootstrap";
import "./news.css";
import NewsDataCard from "./NewsDataCard";
const News = () => {

    const data1 ={
        title:"Bangladesh’s version of Go-Jek raises over $10M in a round led by Go-Jek",
        descriptions:"The company began offering motorbike taxis on-demand and a logistics service, and it branched out into food delivery this year.",
    }
    const data2 ={
        title:"Beat the traffic mess with bike service app",
        descriptions:"It brings a hassle-free cheap ride at your doorstep. All you need to do is download the app and ask for a ride after pinpointing the location on Google map.",
    }
    const data3 ={
        title:"Faces of Entrepreneurship: Hussain Elius",
        descriptions:"Success is a limiting term to me. What I’d like to achieve is consistent innovation and improvement, both for myself and for Pathao.",
    }
    const data4 ={
        title:"Meet the fast-growing Go-Jek of Bangladesh",
        descriptions:"You launch a request on the app, hop on the back seat of a two-wheeler, and get dropped at your destination for a fixed price. It’s fast and convenient.",
    }
    const data5 ={
        title:"Building a mobile wallet for a cash-based economy: Pathao CEO",
        descriptions:"Hussain Elius of Pathao explains how his company is attempting to enter the e-transaction space by allowing customers to top their wallets up via its network of drivers.",
    }

  return (
    <div className="news">
        <div className="title text-center mt-2 mb-5"><h2>আমাদের নিয়ে লেখা হয়েছে</h2></div>
      <div className="container">
      <Tab.Container className="news" id="left-tabs-example" defaultActiveKey="first">
            <Nav variant="tabs" className="d-md-flex mt-3 mb-3 newstab">
              <Nav.Item className="col-md-2 ml-2 mr-2">
                <Nav.Link eventKey="first"><img className="img-fluid" src="https://pathao.com/bn/wp-content/uploads/sites/6/2019/01/TechCrunch.jpg" alt="" /></Nav.Link>
              </Nav.Item>
              <Nav.Item className="col-md-2 ml-2 mr-2">
                <Nav.Link eventKey="second"><img className="img-fluid" src="https://pathao.com/bn/wp-content/uploads/sites/6/2019/01/Daily-Star.jpg" alt="" /></Nav.Link>
              </Nav.Item>
              <Nav.Item className="col-md-2 ml-2 mr-2">
                <Nav.Link eventKey="third"><img className="img-fluid" src="https://pathao.com/bn/wp-content/uploads/sites/6/2019/01/Nasdq.jpg" alt="" /></Nav.Link>
              </Nav.Item>
              <Nav.Item className="col-md-2 ml-2 mr-2">
                <Nav.Link eventKey="fourth"><img className="img-fluid" src="https://pathao.com/bn/wp-content/uploads/sites/6/2019/01/TechinAsia.jpg" alt="" /></Nav.Link>
              </Nav.Item>
              <Nav.Item className="col-md-2 ml-2 mr-2">
                <Nav.Link eventKey="fifth"><img className="img-fluid" src="https://pathao.com/bn/wp-content/uploads/sites/6/2019/01/CNBC.jpg" alt="" /></Nav.Link>
              </Nav.Item>
            </Nav>
            <div className="p-4 border">
            <Tab.Content>
              <Tab.Pane eventKey="first">
                <NewsDataCard data={data1}/>
              </Tab.Pane>
              <Tab.Pane eventKey="second">
              <NewsDataCard data={data2}/>
              </Tab.Pane>
              <Tab.Pane eventKey="third">
              <NewsDataCard data={data3}/>
              </Tab.Pane>
              <Tab.Pane eventKey="fourth">
              <NewsDataCard data={data4}/>
              </Tab.Pane>
              <Tab.Pane eventKey="fifth">
              <NewsDataCard data={data5}/>
              </Tab.Pane>
            </Tab.Content>
            </div>
      </Tab.Container>
      </div>
    </div>
  );
};

export default News;
