import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { useAlert } from "react-alert";
import axios from "axios";

function Contact() {
const navigate = useNavigate();
  const [first_name, setFirstname] = useState("");
  const [last_name, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [message, setMessage] = useState("");
   const validation = () => {
      if (first_name == "") {
        alert("Please enter your first name");
      }
      else if (last_name == "") {
         alert("Please enter your last name");
       }
       else if (email == "") {
        alert("Please enter your email");
      } else if (email !== "") {
        let reg = /^\w+([\.-]?\w+)@\w+([\.-]?\w+)(\.\w{2,3})+$/;
        if (reg.test(email) === false) {
          alert("invalid email");
        } else if (mobile == "") {
          alert("Please enter number");
        } else if (message == "") {
          alert("Please enter message");
        } else {
         alert("all done");
        }
      }
    };
        return(
        <body>
            <header>
            <nav className="navbar navbar-expand-lg">
               <div className="container">
                  <NavLink className="navbar-brand" to="/">
                     <img src="assets/img/Logomeraroommain.png"/>
                  </NavLink>
                  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                  <span className="navbar-toggler-icon"><i className="fa fa-bars" aria-hidden="true"></i></span>
                  </button>
                  <div className="collapse navbar-collapse" id="navbarSupportedContent">
                     <ul className="navbar-nav ml-auto mb-2 mb-lg-0">
                        <div className="top_li">
                           <img src="assets/img/Vector.png"/>
                           <div className="top_contant_li">
                              <p>Contact us</p>
                              <h6><span>Get help and support</span></h6>
                           </div>
                        </div>
                        <div className="top_li">
                           <img src="assets/img/apps1.png"/>
                           <div className="top_contant_li">
                              <p>Download Our App</p>
                              <h6><span>For Better experience</span></h6>
                           </div>
                        </div>
                        <div className="top_li">
                           <img src="assets/img/website1.png"/>
                           <div className="top_contant_li">
                              <p>List Your Property</p>
                              <h6><span>Join Us for Best Revenue</span></h6>
                           </div>
                        </div>
                        <div className="top_li">
                           <img src="assets/img/user1.png"/>
                           <div className="top_contant_li">
                              <p><NavLink to="/welcome">Login</NavLink><NavLink to="/signup">Sign Up</NavLink></p>
                              <h6><span>Get Credits and Bonus</span></h6>
                           </div>
                        </div>
                     </ul>
                  </div>
               </div>
            </nav>
      </header>
      <section className="top_contact_hadd">
         <div className="container">
            <div className="row">
               <div className="col-md-12">
                  <div className="contact_hedding">
                     <h6>Contact Us</h6>
                     <p>Any questions or remarks? Just write us a message!</p>
                  </div>
               </div>
            </div>
         </div>
      </section>
      <section className="py-5">
         <div className="container">
            <div className="row">
               <div className="col-md-6">
                  <div className="contact_det">
                     <h6>The standard Lorem Ipsum<br/> passage, used since the 1500s</h6>
                     <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                  </div>
               </div>
               <div className="col-md-6">
                  <div className="contact_img_box">
                     <img src="assets/img/5124558 1.png"/>
                  </div>
               </div>
            </div>
         </div>
      </section>
      <section className="py-5">
         <div className="container">
            <div className="contact_form">
            <div className="row">
               <div className="col-md-6 col-lg-4">
                  <div className="reach_us">
                     <h6>Reach Us</h6>
                     <ul>
                        <li><img src="assets/img/11Vector.png"/></li>
                        <li>Kelarai, Post Bondanthila,Kuntadaka
                        Karnataka 574194</li>
                     </ul>
                     <ul>
                        <li><img src="assets/img/Group-4772x.png"/></li>
                        <li>0824 227 2405</li>
                     </ul>
                     <ul>
                        <li><img src="assets/img/email11.png"/></li>
                        <li>info@meraroom.com</li>
                     </ul>
                     <img className="reach" src="assets/img/Group1027.png"/>
                  </div>
               </div>
               <div className="col-md-6 col-lg-8">
                  <div className="contact_fild_out">
                     <div className="row">
                        <div className="col-md-6">
                           <input type="text" name="first_name" className="First Name" placeholder="First Name" style={{color: "black"}} required=""/>
                        </div>
                        <div className="col-md-6">
                           <input type="text" name="last_name" className="Last Name" placeholder="Last Name" style={{color: "black"}} required=""/>
                        </div>
                        <div className="col-md-6">
                           <input type="text" name="email" className="email" placeholder="Email" style={{color: "black"}} required=""/>
                        </div>
                        <div className="col-md-6">
                           <input type="number" name="mobile" className="number" placeholder="Phone" style={{color: "black"}} required=""/>
                        </div>
                        <div className="col-md-12">
                           <textarea name="message" id="the-message" placeholder="Message" style={{color: "black"}} required=""></textarea>
                        </div>
                        <div className="col-md-6">
                           {/* <input type="submit" value="Send Message"/> */}
                           <button type="button" onClick={validation} className="Register_btn">Send Message</button>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
            </div>
         </div>
      </section>

      <footer className="footer mt-5">
         <div className="container">
            <div className="row">
               <div className="col-md-3">
                  <div className="hostel_foot">
                     <img src="assets/img/Logomeraroommain.png"/>
                  </div>
               </div>
               <div className="col-6 col-md-3">
                  <div className="Usefull_Links">
                     <h6>Usefull  Links</h6>
                     <ul>
                     <li><NavLink to="/welcome">Login</NavLink>
                  </li>
                  <li><NavLink to="/signup">Sign Up</NavLink></li>
                  <li><NavLink to="/faq">Faq</NavLink></li>
                  <li><NavLink to="/contact">Contact us</NavLink>
               </li>
               <li><NavLink to="/dashboard">Dashboard</NavLink>
               </li>
            </ul>
         </div>
      </div>
      <div className="col-6 col-md-3">
         <div className="Usefull_Links">
            <h6>Other Links</h6>
            <ul>
            <li><NavLink to="/why">Why</NavLink>
         </li>
         <li><NavLink to="/about">About</NavLink>
      </li>
      <li><NavLink to="/listproperty">List Property</NavLink></li>
      <li><NavLink to="/terms">Terms & Conditions</NavLink></li>
      <li><NavLink to="/privacy">Privacy Policy</NavLink></li>
   </ul>
</div>
</div>
<div className="col-md-3">
<div className="playstore">
   <h6>Download The App</h6>
   <img src="assets/img/Frame63.png"/>
</div>
</div>
</div>
<center className="pt-3">© 2022 - Mera Room | All rights reserved</center>
</div>
</footer>
        </body>
        );
    }
export default Contact;