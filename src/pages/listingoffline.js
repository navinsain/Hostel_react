import React from "react";
import { NavLink } from "react-router-dom";

function Listingoffline() {
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
      <section className="main_form11">
                  <div className="container">
            <div className="row mb-5 reducebottom" id="city_box">
               <img className="or_img" src="assets/img/or.png"/>
               <div className="col-sm-12 col-md-1 col-lg-1 centertext ">
                  <img className="maping" src="assets/img/Group.png"/>
               </div>
               <div className="col-sm-12 col-md-5 col-lg-5 pr-0 app">
                  <div id="app">
                     <div className="form-group">
                        <label>Search by location, cities</label>
                        <img className="cities_ican" src="assets/img/Group715.png"/>
                        <input type="search" id="city" v-model="location.city" className="form-control " placeholder="Enter area, nearby landmarks" />
                     </div>
                  </div>
               </div>
               <div className="col-sm-12 col-md-5 col-lg-5 pl-0 app">
                  <div id="app" className="bot">
                     <div className="form-group">
                        <label>Search by your institute</label>
                        <button type="button" className="institute" data-toggle="modal" data-target="#exampleModal02">
                        <img className="cities_ican1" src="assets/img/Group902.png"/>
                        <input type="search" id="location" v-model="location.city" className="form-control " placeholder="Allen, Motion, Resonace, Akash, Drishti IAS"/>
                        </button>
                        {/* <!-- Modal --> */}
                        <div className="modal fade" id="exampleModal02" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                           <div className="modal-dialog">
                              <div className="modal-content">
                                 <div className="modal-header" style={{border:'none'}}>
                                    <h5 className="modal-title" id="exampleModalLabel">Select<strong> Institute</strong></h5>
                                    <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                    </button>
                                 </div>
                                 <div className="outer_intitute">
                                    <div className="ican_inst">
                                       <img src="assets/img/123.png"/>
                                       <h6>Institute Name
                                       <p>Location of Institute</p></h6>
                                    </div>
                                    <div className="select_inti">
                                       <select id="citySelect" size="1" >
                                          <option value="disabled selected">Choose City</option>
                                          <option></option>
                                       </select>
                                    </div>
                                    <div className="proceed_inti">
                                       <NavLink to=""><button>Proceed</button></NavLink>
                                    </div>
                                 </div>
                                 <div className="outer_intitute ">
                                    <div className="ican_inst">
                                       <img src="assets/img/1234.png"/>
                                       <h6>Institute Name
                                       <p>Location of Institute</p></h6>
                                    </div>
                                    <div className="select_inti">
                                       <select id="citySelect" size="1" >
                                          <option value="Choose City"></option>
                                          <option></option>
                                       </select>
                                    </div>
                                    <div className="proceed_inti">
                                       <NavLink to=""><button>Proceed</button></NavLink>
                                    </div>
                                 </div>
                                 <div className="outer_intitute ">
                                    <div className="ican_inst">
                                       <img src="assets/img/12345.png"/>
                                       <h6>Institute Name
                                       <p>Location of Institute</p></h6>
                                    </div>
                                    <div className="select_inti">
                                       <select id="citySelect" size="1" >
                                          <option value="Choose City"></option>
                                          <option></option>
                                       </select>
                                    </div>
                                    <div className="proceed_inti">
                                       <NavLink to=""><button>Proceed</button></NavLink>
                                    </div>
                                 </div>
                                 <div className="outer_intitute">
                                    <div className="ican_inst">
                                       <img src="assets/img/123456.png"/>
                                       <h6>Institute Name
                                       <p>Location of Institute</p></h6>
                                    </div>
                                    <div className="select_inti">
                                       <select id="citySelect" size="1" >
                                          <option value="disabled selected">Choose City</option>
                                          <option></option>
                                       </select>
                                    </div>
                                    <div className="proceed_inti">
                                       <NavLink to=""><button>Proceed</button></NavLink>
                                    </div>
                                 </div>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </section>
      
      <section className="list_owl">
         <div className="owl-carousel owl-theme testi">
            {/* <!-- Single Starts --> */}
            <div className="item">
               <div className="Property_item">
                  <img src="assets/img/Rectangle 1436.png"/>
               </div>
            </div>
            {/* <!-- Single Ends --> */}
            <div className="item">
               <div className="Property_item">
                  <img src="assets/img/Rectangle 1437.png"/>
               </div>
            </div>
            <div className="item">
               <div className="Property_item">
                  <img src="assets/img/Rectangle 1438.png"/>
               </div>
            </div>
            <div className="item">
               <div className="Property_item">
                  <img src="assets/img/Rectangle 1439.png"/>
               </div>
            </div>
            
         </div>
      </section>
      <section className="Hostels">
         <div className="container">
            <div className="row">
               <div className="col-md-8 py-4">
                  <div className="outer_hostel_dettt">
                     <h6 className="G_Hostel">Ridhi Girl Hostel<i className="fa fa-heart" aria-hidden="true"></i></h6>
                     <h5 className="address_h"><i className="fa fa-map-marker" aria-hidden="true">
                     </i>Jaipur Rajasthan • <span> Girls Hostel </span></h5>
                     <h5 className="price_it">₹8000- ₹12000</h5>
                     <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
                     <p>
                     It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                  </div>
                  <hr/>
                  <div className="maoing">
                     <img src="assets/img/Rectangle1457.png"/>
                  </div>
                  <div className="amenities">
                     <div className="amenities_item">
                        <img src="assets/img/Ellipse-134.png"/>
                        <p>Study Table</p>
                     </div>
                     <div className="amenities_item">
                        <img src="assets/img/Ellipse-135.png"/>
                        <p>AC</p>
                     </div>
                     <div className="amenities_item">
                        <img src="assets/img/Ellipse-138.png"/>
                        <p>Bed</p>
                     </div>
                     <div className="amenities_item">
                        <img src="assets/img/Ellipse-136.png"/>
                        <p>Free Wifi</p>
                     </div>
                     <div className="amenities_item">
                        <img src="assets/img/Ellipse-137.png"/>
                        <p>Parking</p>
                     </div>
                  </div>
                  <hr/>
                  <div className="btns_biods">
                     <NavLink className="view_btn" to="/listingdetails">View Details</NavLink>
                     <NavLink className="view_btn" to="#bookarea">Book Now</NavLink>
                  </div>
                  <div className="Room_Details">
                     <h3>Room Details</h3>
                     <p>Room are designed to provide complete environment for a student all facilities are available</p>
                     
                     <div className="row">
                        <div className="col-md-6 py-2">
                           <div className="Room_Details_box">
                              <img src="assets/img/Rectangle1458.png"/>
                              <div className="Room_Details_cont">
                                 <img src="assets/img/Group942.png"/>
                                 <h6>Single Bed AC Room</h6>
                                 <p>₹10,000/-</p>
                              </div>
                           </div>
                        </div>
                        <div className="col-md-6 py-2">
                           <div className="Room_Details_box">
                              <img src="assets/img/Rectangle1460.png"/>
                              <div className="Room_Details_cont">
                                 <img src="assets/img/Group945.png"/>
                                 <h6>Double Bed AC Room</h6>
                                 <p>₹10,000/-</p>
                              </div>
                           </div>
                        </div>
                        <div className="col-md-6 py-2">
                           <div className="Room_Details_box">
                              <img src="assets/img/Rectangle1460.png"/>
                              <div className="Room_Details_cont">
                                 <img src="assets/img/Group945.png"/>
                                 <h6>Single Bed Cooler Room</h6>
                                 <p>₹10,000/-</p>
                              </div>
                           </div>
                        </div>
                        <div className="col-md-6 py-2">
                           <div className="Room_Details_box">
                              <img src="assets/img/Rectangle1459.png"/>
                              <div className="Room_Details_cont">
                                 <img src="assets/img/Group953.png"/>
                                 <h6>Double  Bed Cooler Room</h6>
                                 <p>₹10,000/-</p>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
               <div className="col-md-4 py-4">
                  <div className="booking_online" id="bookarea">
                     <div className="top_hedbtn">
                        <button className="book"><NavLink to="/listingdetails">Book Online</NavLink></button>
                        <button className="books active"><NavLink to="/listingoffline">Book Offline</NavLink></button>
                     </div>
                     <h3 className="book_Payment">Book with Payment</h3>
                     <div className="payment_det_box">
                        <div className="Register_Pay py-2">
                           <img src="assets/img/Group4911.png"/>
                           <input type="text" id="name" name="name" placeholder="Full Name" required=""/>
                        </div>
                        <div className="Register_Pay py-2">
                           
                           <input type="date" id="birthday" name="birthday"/>
                        </div>
                        <div className="Register_Pay py-2">
                           <img src="assets/img/Group4991.png"/>
                           <input type="text" id="name" name="name" placeholder="Number" required=""/>
                        </div>
                        <div className="row p-3">
                           
                           <div className="col-6 col-md-3 p-1">
                              <div className="badroom">
                                 <img src="assets/img/Group942.png"/>
                                 <p>Single Bed AC Room</p>
                              </div>
                           </div>
                           <div className="col-6  col-md-3 p-1">
                              <div className="badroom">
                                 <img src="assets/img/Group945.png"/>
                                 <p>Double Bed AC Room </p>
                              </div>
                           </div>
                           <div className="col-6 col-md-3 p-1">
                              <div className="badroom">
                                 <img src="assets/img/Group954.png"/>
                                 <p>Single Bed Cooler Room</p>
                              </div>
                           </div>
                           <div className="col-6 col-md-3 p-1">
                              <div className="badroom">
                                 <img src="assets/img/Group953.png"/>
                                 <p>Double Bed
                                 Cooler Room</p>
                              </div>
                           </div>
                        </div>
                        <div className="price_mon">
                           <button>Price - 10,000 / Month</button>
                        </div>
                     </div>
                     
                     <div className="books_box">
                        
                        <button type="button" className="" data-toggle="modal" data-target="#exampleModal01">
                        Pay and Book<img src="assets/img/Vectorss.png"/>
                        </button>
                        {/* <!-- Modal --> */}
                        <div className="modal fade" id="exampleModal01" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                           <div className="modal-dialog">
                              <div className="modal-content">
                                 <div className="modal-header" style={{border:'none'}}>
                                    <h5 className="modal-title" id="exampleModalLabel">Your booking has been <strong>confirmed</strong></h5>
                                    <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                    </button>
                                 </div>
                                 <div className="confirmed_pop">
                                    <img src="assets/img/Group_968.png"/>
                                    <strong>Ridhi Girl Hostel</strong>
                                    <p>Jaipur Rajasthan • Girls Hostel </p>
                                    <h6><strong>Visit Date: April 05 2022</strong></h6>
                                    <button>Back to home</button>
                                 </div>
                              </div>
                           </div>
                        </div>
                     </div>
                     
                  </div>
               </div>
               <div className="col-md-12">
                  <img className="banner_ab" src="assets/img/AdBanner.png"/>
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
export default Listingoffline;