import React from "react";
import { NavLink } from "react-router-dom";

function Terms() {

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
                     <h6>Terms and conditions</h6>
                     <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                  </div>
               </div>
            </div>
         </div>
      </section>
      <section className="trems">
         <div className="container">
            <div className="row">
               <div className="top__trms_img py-5">
                  <img src="assets/img/Group724.png"/>
               </div>
            </div>
            <div className="row pb-5">
               <div  className="col-md-4">
                  <div className="General">
                     <h6>1. General Terms and Conditions
                     </h6>
                     <p>2. Acceptable Use Policy</p>
                     <p>3. Cancellation Policy</p>
                     <p>4. Privacy Policy</p>
                  </div>
               </div>
               <div className="col-md-8">
                  <div className="rights_trms">
                     <strong>The standard Lorem Ipsum passage, used since the 1500s?</strong>
                     <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.<br/>
                     But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful. </p>
                     <strong>Section 1.10.32 of "de Finibus Bonorum et Malorum", written by Cicero in 45 BC?</strong>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.<br/>
                     But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful. </p>

                     <strong>The standard Lorem Ipsum passage, used since the 1500s?</strong>
                     <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.<br/>
                     But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful. </p>
                     <strong>Section 1.10.32 of "de Finibus Bonorum et Malorum", written by Cicero in 45 BC?</strong>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.<br/>
                     But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful. </p>

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
export default Terms;