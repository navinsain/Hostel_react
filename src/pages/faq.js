import React from "react";
import { NavLink } from "react-router-dom";

function Faq() {
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
         <h6>FAQs</h6>
         <p>Any questions or remarks? Just write us a message!</p>
      </div>
   </div>
</div>
</div>
</section>

<section className="faq_dets py-5">
<div className="container">
<div className="col-md-12">
   <img className="faq_gropd" src="assets/img/012Group.png"/>
   <div className="faq_drop">

      
      <div className="container">
         <div className="question">
            My Pen loads infinitely or crashes the browser.
         </div>
         <div className="answercont">
            <div className="answer">
               It's likely an infinite loop in JavaScript that we could not catch. To fix, add ?turn_off_js=true to the end of the URL (on any page, like the Pen or Project editor, your Profile page, or the Dashboard) to temporarily turn off JavaScript. When you're ready to run the JavaScript again, remove ?turn_off_js=true and refresh the page.<br/>
            </div>
         </div>
      </div>
      
      <div className="container">
         <div className="question">
            How do I contact the creator of a Pen?
         </div>
         <div className="answercont">
            <div className="answer">
               You can leave a comment on any public Pen. Click the "Comments" link in the Pen editor view, or visit the Details page.<br/>
            </div>
         </div>
      </div>
      
      <div className="container">
         <div className="question">
            What version of [library] does CodePen use?
         </div>
         <div className="answercont">
            <div className="answer">
               We have our current list of library versions
               
            </div>
         </div>
      </div>
      
      <div className="container">
         <div className="question">
            What are forks?
         </div>
         <div className="answercont">
            <div className="answer">
               A fork is a complete copy of a Pen or Project that you can save to your own account and modify. Your forked copy comes with everything the original author wrote, including all of the code and any dependencies.<br/><br/>
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
export default Faq;