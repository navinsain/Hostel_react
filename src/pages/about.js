import React from "react";
import { NavLink } from "react-router-dom";

function About() {
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
                     <h6>About</h6>
                     <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                  </div>
               </div>
            </div>
         </div>
      </section>
      <section className="py-5">
         <div className="container">
            <div className="row">
               <div className="col-md-6">
                  <div className="ab_img_box">
                     <img src="assets/img/Rectangle1476.png"/>
                  </div>
               </div>
               <div className="col-md-6">
                  <div className="contact_det">
                     <h6>OUR STORY</h6>
                     <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                        <br/> <br/>
                     At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.</p>
                  </div>
               </div>
            </div>
         </div>
      </section>
      <section className="hostels_pg my-5">
         <div className="container">
            <center className="heding_map"><h6>India's leading chain of <span>Hostels and PG</span></h6>
            <p>More Destinations. More Ease. More Affordable.</p></center>
            <div className="owl-carousel owl-theme testi">
               {/* <!-- Single Starts --> */}
               <div className="item">
                  <div className="ahmedabad">
                     <img src="assets/img/Ellipse157.png"/>
                     <p>Ahmedabad</p>
                  </div>
               </div>
               {/* <!-- Single Ends --> */}
               <div className="item">
                  <div className="ahmedabad">
                     <img src="assets/img/Ellipse158.png"/>
                     <p>Visakhapatnam</p>
                  </div>
               </div>
               <div className="item">
                  <div className="ahmedabad">
                     <img src="assets/img/Ellipse159.png"/>
                     <p>Manipal</p>
                  </div>
               </div>
               <div className="item">
                  <div className="ahmedabad">
                     <img src="assets/img/Ellipse160.png"/>
                     <p>Gurgaon</p>
                  </div>
               </div>
               <div className="item">
                  <div className="ahmedabad">
                     <img src="assets/img/Ellipse161.png"/>
                     <p>Vijayawada</p>
                  </div>
               </div>
               <div className="item">
                  <div className="ahmedabad">
                     <img src="assets/img/Ellipse162.png"/>
                     <p>Jaipur</p>
                  </div>
               </div>
               
            </div>
         </div>
      </section>
      <section className="willhelp py-5">
         <div className="container">
            <div className="row">
               <div className="col-md-6">
                  <div className="findroom">
                     <h6>Come On, We Will Help You
                     Fing Your Truly PG or Hostel</h6>
                     <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                     <button className="finds"><NavLink to="">Find Room</NavLink></button>
                     <img src="assets/img/Rectangle1477.png"/>
                  </div>
               </div>
               <div className="col-md-6">
                  <div className="Benefits">
                     <h6>Benefits 1</h6>
                     <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. </p>
                  </div>
                  <div className="Benefits">
                     <h6>Benefits 2</h6>
                     <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. </p>
                  </div>
                  
                  <div className="Benefits">
                     <h6>Benefits 3</h6>
                     <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. </p>
                  </div>
                  
                  <div className="Benefits">
                     <h6>Benefits 4</h6>
                     <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. </p>
                  </div>
               </div>
            </div>
         </div>
   </section>
   <section className="mera_room_app py-5">
      <div className="container">
         <div className="row">
            
            <div className="col-md-6">
               <div className="roomde">
               <h6>Manage your property <br/>anytime, anywhere with<br/> Mera Room App</h6>
               <ul>
                  <li><img src="assets/img/1028.png"/>For maximising revenue</li>
                  <li><img src="assets/img/1028.png"/>To build online presence across channels</li>
                  <li><img src="assets/img/1028.png"/>To reach more guests & optimise experience</li>
                  <li><img src="assets/img/1028.png"/>For hassle-free operations</li>
                  <li><img src="assets/img/1028.png"/>To build a brand loved by both travellers & city dwellers</li>
               </ul>
               <img className="apps101" src="assets/img/Frame62.png"/>
            </div>
         </div>
         <div className="col-md-6">
            <div className="redd">
               <img src="assets/img/Phones1.png"/>
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
export default About;