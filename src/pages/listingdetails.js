import React from "react";
import { NavLink } from "react-router-dom";

function Listingdetails() {
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
                           <p><NavLink to="#">Contact us</NavLink></p>
                           <h6><span>Get help and support</span></h6>
                        </div>
                     </div>
                     <div className="top_li">
                        <img src="assets/img/apps1.png"/>
                        <div className="top_contant_li">
                           <p><NavLink to="#">Download Our App</NavLink></p>
                           <h6><span>For Better experience</span></h6>
                        </div>
                     </div>
                     <div className="top_li">
                        <img src="assets/img/website1.png"/>
                        <div className="top_contant_li">
                           <p><NavLink to="#">List Your Property</NavLink></p>
                           <h6><span>Join Us for Best Revenue</span></h6>
                        </div>
                     </div>
                     <div className="top_li">
                        <img src="assets/img/user1.png"/>
                        <div className="top_contant_li">
                           <p><NavLink to="/welcome" className="rightspace">Login</NavLink><NavLink to="/signup">Sign Up</NavLink></p>
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
                                          <option value="" disabled selected>Choose City</option>
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
                                          <option value="" disabled selected>Choose City</option>
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
                                          <option value="" disabled selected>Choose City</option>
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
                                          <option value="" disabled selected>Choose City</option>
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
               <div className="col-md-8 py-4 margincss">
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
                     <NavLink className="view_btn active" to="/listingdetails">Check Mess Facility</NavLink>
                     <NavLink className="view_btn" to="/listingoffline">Check Room Details</NavLink>
                  </div>
                  <div className="Mess_Details">
                        <h3>Mess Details</h3>
                     <p>Our Facility is so good, We provide a hygenic environment for a student and also healthy food.</p>
                     <div className="row  mess-box ">
                        <div className="col-6 col-md-3">
                            <div className="Mess_ln">
                           <img src="assets/img/Ellipse-125.png"/>
                           <p>Breakfast Time</p>
                           <p>14:03 - 13:05</p>
                           </div>
                        </div>
                        
                        <div className="col-6 col-md-3">
                            <div className="Mess_ln">
                           <img src="assets/img/Ellipse-126.png"/>
                           <p>Lunch Time</p>
                           <p>17:04 - 13:08</p>
                        </div>
                        </div>
                        <div className="col-6 col-md-3">
                            <div className="Mess_ln">
                           <img src="assets/img/Ellipse-127.png"/>
                           <p>Tea Time</p>
                           <p>13:07 - 13:07</p>
                        </div>
                        </div>
                        
                        <div className="col-6 col-md-3">
                            <div className="Mess_ln">
                           <img src="assets/img/Ellipse-128.png"/>
                           <p>Dinner Time</p>
                           <p>16:04 - 16:04</p>
                        </div>
                        </div>
                        
                        <div className="col-6 col-md-3">
                            <div className="Mess_ln">
                           <img src="assets/img/Ellipse-125.png"/>
                           <p>Milk Time</p>
                           <p>13:06 - 13:08</p>
                        </div>
                     </div>
                  </div>
                  </div>
                  
                  
                  <div className="Mess_Photos">
                     <h3>Mess Photos</h3>
                     <div className="row Messphoto_box owl-carousel owl-theme ">
                        <div className="item">
                           <img className="Mess_Photos_img" src="assets/img/Rectangle1448.png"/>
                        </div>
                        <div className="item">
                           <img className="Mess_Photos_img" src="assets/img/Rectangle1449.png"/>
                        </div>
                        <div className="item">
                           <img className="Mess_Photos_img" src="assets/img/Rectangle1450.png"/>
                        </div>
                     </div>
                  </div>
                  
                  
               </div>
               <div className="col-md-4 py-4">
                  <div className="booking_online">
                     <div className="top_hedbtn">
                        <button className="book active"><NavLink to="/listingdetails">Book Online</NavLink></button>
                        <button className="book"><NavLink to="/listingoffline">Book Offline</NavLink></button>
                        
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
                     
                     <div className="final_amou">
                        <img src="assets/img/Group731.png"/>
                        <h6>Use your <strong>Wallet Balance</strong> <span>₹1233</span></h6>
                        <div className="checkbox_btn">
                           <label className="main" style={{paddingleft:'15px', marginbottom: '0'}}>
                              <input type="checkbox"/>
                              <span className="geekmark"></span>
                           </label>
                        </div>
                     </div>
                     <div className="fin_offers">
                        <img src="assets/img/Group734.png"/>
                        <h6><strong>Apply offers</strong> <br/><span>Select a discount code</span></h6>
                        {/* <!-- Button trigger modal --> */}
                        <button type="button" className="btn btn-primary offerbtn" data-toggle="modal" data-target="#exampleModal">
                        View offers
                        </button>
                        {/* <!-- Modal --> */}
                        <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                           <div className="modal-dialog">
                              <div className="modal-content">
                                 <div className="modal-header" style={{border:'none'}}>
                                    <h5 className="modal-title" id="exampleModalLabel">Apply Coupon</h5>
                                    <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                    </button>
                                 </div>
                                 <div className="modal-body">
                                    <div className="applybtns">
                                       <input type="text" name="code" placeholder="Enter Coupon Code"/>
                                       <button className="applys">Apply</button>
                                    </div>
                                 </div>
                                 <div className="modal_coupon">
                                    <h1>Available coupon List</h1>
                                    <div className="coupond py-2">
                                       <h6 className="cop_pr">10%<br/>OFF</h6>
                                       <h5>
                                       <p>The offer is valid for first <br/>time users only.<br/></p>
                                       <span>The offer is valid for first time users only.</span>
                                       </h5>
                                       <h3>Apply<br/>Now</h3>
                                    </div>
                                    <div className="coupond py-2">
                                       <h6 className="cop_pr">10%<br/>OFF</h6>
                                       <h5>
                                       <p>The offer is valid for first <br/>time users only.<br/></p>
                                       <span>The offer is valid for first time users only.</span>
                                       </h5>
                                       <h3>Apply<br/>Now</h3>
                                    </div>
                                    
                                    <div className="coupond py-2">
                                       <h6 className="cop_pr">10%<br/>OFF</h6>
                                       <h5>
                                       <p>The offer is valid for first <br/>time users only.<br/></p>
                                       <span>The offer is valid for first time users only.</span>
                                       </h5>
                                       <h3>Apply<br/>Now</h3>
                                    </div>
                                 </div>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
                  <div className="fin_pay  ">
                     
                     <div className="singalbds">
                        <img src="assets/img/Group1026.png"/>
                        <h6>Single Bed<br/><span>Air Conditioner Room</span></h6>
                     </div>
                     <div className="singalpya">
                        <p>Total</p>
                        <h6>₹10,000</h6>
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
            <div className="row">
               <div className="col-12">
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
         <div className="col-6  col-md-3">
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
export default Listingdetails;