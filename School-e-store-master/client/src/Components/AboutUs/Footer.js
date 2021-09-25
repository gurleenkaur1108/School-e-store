import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { useEffect, useState } from "react";
import "./styles.css";
import 'font-awesome/css/font-awesome.min.css';
import "bootstrap/dist/css/bootstrap.min.css";
import {
  Twitter,
  Facebook,
  Instagram,
} from "@material-ui/icons";
function Footer() {
    const[winWidth,setWidth]=useState(window.innerWidth);
    useEffect(() => {
       function handleResize() {
         setWidth(window.innerWidth);
   }
       window.addEventListener('resize', handleResize)
     });    
  return (
    <div style={{backgroundColor:"#0B0D17",color:"white",width:"100%"}}>
      <Row className="m-0">
      {winWidth<992&&<Col lg={3} md={12} sm={12} xs={12} className="footer-3"> 
         <b><h4>Stay up to date</h4></b>
         <input type="text" className="Inputstyle" onFocus={(e) => e.target.placeholder = ""} onBlur={(e) => e.target.placeholder = "Your email address"} placeholder="Your email address"></input>
         <i style={{marginTop:"40px"}} class="fab fa-telegram-plane"></i>
       </Col>}  
      {winWidth>575&&<Col lg={5} md={6} sm={6} xs={12} className="footer-1 m-0">
      Copyright © 2020 SchooleStore.<br/>
      All rights reserved<br/><br/>
          <a
            style={{ marginLeft: "6px", color: "white" }}
            role="button"
            href="#"
          >
            <Facebook fontSize="medium" />
          </a>
          <a
            style={{ marginLeft: "6px", color: "white" }}
            role="button"
            href="#"
          >
            <Twitter fontSize="medium" />
          </a>
          <a
            style={{ marginLeft: "6px", color: "white" }}
            role="button"
            href="#"
          >
            <Instagram fontSize="medium" />
          </a>
       </Col>}
       <Col lg={2} md={3} sm={3} xs={6} className="footer-2"> 
       <b><h4>Company</h4></b>
       <a href="#" className="Anchor-style">About us</a><br/> 
       <a href="#" className="Anchor-style">Blog</a> <br/>
       <a href="#" className="Anchor-style">Contact us</a> <br/>
       <a href="#" className="Anchor-style">Pricing</a> <br/>
       <a href="#" className="Anchor-style">Testimonials</a>
       </Col>
       <Col lg={2} md={3} sm={3} xs={6} className="footer-2"> 
       <b><h4>Support</h4></b>
       <a href="#" className="Anchor-style">Help center</a><br/> 
       <a href="#" className="Anchor-style">Terms of service</a> <br/>
       <a href="#" className="Anchor-style">Legal</a> <br/>
       <a href="#" className="Anchor-style">Privacy policy</a> <br/>
       <a href="#" className="Anchor-style">Status</a>
       </Col>
       {winWidth<576&&<Col lg={5} md={6} sm={6} xs={12} className="footer-1 m-0">
      Copyright © 2020 SchooleStore.<br/>
      All rights reserved<br/><br/>
          <a
            style={{ marginLeft: "6px", color: "white" }}
            role="button"
            href="#"
          >
            <Facebook fontSize="medium" />
          </a>
          <a
            style={{ marginLeft: "6px", color: "white" }}
            role="button"
            href="#"
          >
            <Twitter fontSize="medium" />
          </a>
          <a
            style={{ marginLeft: "6px", color: "white" }}
            role="button"
            href="#"
          >
            <Instagram fontSize="medium" />
          </a>
       </Col>}
       {winWidth>991&&<Col lg={3} md={12} sm={12} xs={12} className="footer-3"> 
         <b><h4>Stay up to date</h4></b>
         <input type="text" className="Inputstyle" onFocus={(e) => e.target.placeholder = ""} onBlur={(e) => e.target.placeholder = "Your email address"} placeholder="Your email address"></input>
         <i class="fab fa-telegram-plane"></i>   
       </Col>}  
        </Row>
    </div>
  );
}
export default Footer;