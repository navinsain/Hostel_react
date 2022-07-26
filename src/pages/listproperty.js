import React from "react";
import { NavLink } from "react-router-dom";

function Listproperty() {
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
                        <h6>List Your Property</h6>
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
                        <img src="assets/img/bwink_bld.png"/>
                     </div>
                  </div>
                  <div className="col-md-6">
                     <div className="contact_det">
                        <h6>The standard Lorem Ipsum<br/> passage, used since the 1500s</h6>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                           <br/> <br/>
                        At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.</p>
                     </div>
                  </div>
               </div>
            </div>
         </section>
         <section className="portfolio section">
            <div className="container">
               <div className="outer_port">
                  <div className="top-side">
                     <h4 className="title">Select Property category</h4>
                  </div>
                  
                  <div className="filters">
                     <ul>
                        <li className="cate active" data-filter=".gostel"><img src="assets/img/Ellipse-185.png"/><h6>Girls Hostel</h6></li>
                        <li className="cate" data-filter=".corporate"><img src="assets/img/Ellipse-186.png"/><h6>Boys Paying Guest</h6></li>
                        <li className="cate" data-filter=".personal"><img src="assets/img/Ellipse-187.png"/><h6>Boys
                        Hostel</h6></li>
                        <li className="cate" data-filter=".agency"><img src="assets/img/Ellipse-188.png"/><h6>Girls
                        Paying Guest</h6></li>
                        
                     </ul>
                  </div>
                  
                  <div className="container filters-content">
                     <div className="row grid">
                        <div className="col-sm-12">
                           <div className="row">
                              <div className="col-sm-6  gostel mb-3 item_form">
                                 <input type="text" name="name" placeholder="Mobile Number"/>
                              </div>
                              
                              
                              <div className="col-sm-6  gostel mb-3 item_form">
                                 <input type="text" name="name" placeholder="Name of Property"/>
                              </div>
                              
                              
                              <div className=" col-sm-6  gostel mb-3 item_form">
                                 <input type="text" name="name" placeholder="Name of Owner"/>
                              </div>
                              
                              
                              <div className="col-sm-6  gostel mb-3 item_form">
                                 <select id="citySelect" size="1">
                                    <option value="" disabled="" selected="">Select City </option>
                                    <option></option>
                                 </select>
                              </div>
                              
                              <div className="col-sm-6  gostel mb-3 item_form">
                                 <select id="citySelect" size="1">
                                    <option value="" disabled="" selected="">Select Property type</option>
                                    <option></option>
                                 </select>
                              </div>
                              <div className=" col-sm-6  gostel mb-3 item_form">
                                 <input type="text" name="name" placeholder="Add any specific area (optional)"/>
                              </div>
                              <div className=" col-sm-6  gostel mb-3 item_form">
                                 <input type="text" name="name" placeholder="Front desk number"/>
                              </div>
                              <div className="col-sm-6  gostel mb-3 item_form">
                                 <select id="citySelect" size="1">
                                    <option value="" disabled="" selected="">No. Of Rooms available</option>
                                    <option></option>
                                 </select>
                              </div>
                              <div className=" col-sm-12  gostel mb-3 item_form">
                                 <input type="text" name="name" placeholder="Property Address"/>
                              </div>
                              <div className=" col-sm-12  gostel mb-3">
                                 <div className="uplode">
                                    <input type="file" id="myFile" name="filename"/>
                                    <img src="assets/img/uplode.png"/>
                                    <p>Upload 2  property building Photo</p>
                                    
                                 </div>
                              </div>
                              <div className=" col-sm-12  gostel mb-3">
                                 <div className="uplode_submit">
                                    <button className="submit">submit</button>
                                 </div>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
            </section>
            <section className="testimonials">
               <div className="container">
                  <div className="title">
                     <h5>Testimonials</h5>
                     {/* <!-- <h2>What our clients say</h2> --> */}
                  </div>
                  <div className="owl-carousel owl-theme testi">
                     {/* <!-- Single Starts --> */}
                     <div className="item">
                        <div className="profile">
                           <img src="https://images.unsplash.com/photo-1521225099409-8e1efc95321d?ixlib=rb-1.2.1&auto=format&fit=crop&h=153&q=80" alt=""/>
                           <div className="information">
                              <div className="stars">
                                 <i className="fa fa-star"></i>
                                 <i className="fa fa-star"></i>
                                 <i className="fa fa-star"></i>
                                 <i className="fa fa-star"></i>
                                 <i className="fa fa-star"></i>
                              </div>
                              <p>Furkan Giray</p>
                              <span>Web Developer</span>
                           </div>
                        </div>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Expedita velit labore suscipit distinctio, officiis deserunt rem blanditiis ducimus. Voluptate quaerat assumenda qui veniam facilis doloribus maiores impedit ducimus cum accusamus.</p>
                        <div className="icon">
                           <i className="fa fa-quote-right" aria-hidden="true"></i>
                        </div>
                     </div>
                     {/* <!-- Single Ends --> */}
                     <div className="item">
                        <div className="profile">
                           <img src="https://images.unsplash.com/photo-1521225099409-8e1efc95321d?ixlib=rb-1.2.1&auto=format&fit=crop&h=153&q=80" alt=""/>
                           <div className="information">
                              <div className="stars">
                                 <i className="fa fa-star"></i>
                                 <i className="fa fa-star"></i>
                                 <i className="fa fa-star"></i>
                                 <i className="fa fa-star"></i>
                                 <i className="fa fa-star"></i>
                              </div>
                              <p>Furkan Giray</p>
                              <span>Web Developer</span>
                           </div>
                        </div>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Expedita velit labore suscipit distinctio, officiis deserunt rem blanditiis ducimus. Voluptate quaerat assumenda qui veniam facilis doloribus maiores impedit ducimus cum accusamus.</p>
                        <div className="icon">
                           <i className="fa fa-quote-right" aria-hidden="true"></i>
                        </div>
                     </div>
                     <div className="item">
                        <div className="profile">
                           <img src="https://images.unsplash.com/photo-1521225099409-8e1efc95321d?ixlib=rb-1.2.1&auto=format&fit=crop&h=153&q=80" alt=""/>
                           <div className="information">
                              <div className="stars">
                                 <i className="fa fa-star"></i>
                                 <i className="fa fa-star"></i>
                                 <i className="fa fa-star"></i>
                                 <i className="fa fa-star"></i>
                                 <i className="fa fa-star"></i>
                              </div>
                              <p>Furkan Giray</p>
                              <span>Web Developer</span>
                           </div>
                        </div>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Expedita velit labore suscipit distinctio, officiis deserunt rem blanditiis ducimus. Voluptate quaerat assumenda qui veniam facilis doloribus maiores impedit ducimus cum accusamus.</p>
                        <div className="icon">
                           <i className="fa fa-quote-right" aria-hidden="true"></i>
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
   <center className="pt-3">© 2022 - Mera Room | all rights reserved</center>
   </div>
   </footer>
   </body>
        );
    }
export default Listproperty;