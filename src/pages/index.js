import React from "react";
import { NavLink } from "react-router-dom";

// import React,{Component} from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';


// import OwlCarousel from 'react-owl-carousel';
// import 'owl.carousel/dist/assets/owl.carousel.css';
// import 'owl.carousel/dist/assets/owl.theme.default.css';

// import OwlCarousel from 'react-owl-carousel';
// import 'assets/css/owl.carousel.min.css';
// import 'assets/css/owl.theme.default.css';
// import './owl.css';

function Index() {
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
                     <div className="top_li li">
                     <NavLink to="/profile" className="rightspace"><img src="assets/img/user1.png"/></NavLink>
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
      <section className="main_slider">
         <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
            <div className="carousel-inner">
               <div className="carousel-item active">
                  <img className="d-block w-100" src="assets/img/BG.png" alt="First slide"/>
               </div>
               <div className="carousel-item">
                  <img className="d-block w-100" src="assets/img/BG.png" alt="Second slide"/>
               </div>
               <div className="carousel-item">
                  <img className="d-block w-100" src="assets/img/BG.png" alt="Third slide"/>
               </div>
            </div>
            <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
               <span className="carousel-control-prev-icon" aria-hidden="true"></span>
               <span className="sr-only">Previous</span>
            </a>
            <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
               <span className="carousel-control-next-icon" aria-hidden="true"></span>
               <span className="sr-only">Next</span>
            </a>
         </div>
      </section>
      <section className="main_form">
         <div className="container">
            <div className="row mb-5" id="city_box">
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
    
      <section className="product_slid">
         <div className="container">
            <h1 className="popu_title"><p>Popular <strong>Listings</strong></p> <NavLink to="/listing" className="allview"><span>View All</span></NavLink></h1>
            <ol className="carousel-indicators">
               <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
               <li data-target="#carouselExampleIndicators1" data-slide-to="1"></li>
               <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
            </ol> 
            <div id="promotional_slider">
               <div className="row promotionalslider_wrapper">
                  <div className="col-md-6">
                     <div className="promotionalslider_single">
                        <div className="outer_listings">
                           <div className="hostelcard">
                              <img src="assets/img/Rectangl1410.png"/>
                           </div>
                           <div className="hostel_contant">
                              <h6 className="Girl_Hostel"><p>Ridhi Girl Hostel</p><i className="fa fa-heart" aria-hidden="true"></i></h6>
                              <h5 className="pries"><i className="fa fa-map-marker" aria-hidden="true"></i><span><ul><li>Jaipur Rajasthan</li> <li>Girls Hostel</li></ul> </span></h5>
                              <h5>₹8000- ₹12000</h5>
                              <img src="assets/img/Group1002.png"/>
                              <div className="btns_bio">
                                 <NavLink className="view_btn" to="/listingdetails">View Details</NavLink>
                                 <NavLink className="view_btn" to="/listingoffline">Book Now</NavLink>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
                  <div className="col-md-6">
                     <div className="promotionalslider_single">
                        <div className="outer_listings">
                           <div className="hostelcard">
                              <img src="assets/img/Rectangl1410.png"/>
                           </div>
                           <div className="hostel_contant">
                              <h6 className="Girl_Hostel"><p>Ridhi Girl Hostel</p><i className="fa fa-heart-o" aria-hidden="true"></i></h6>
                              <h5 className="pries"><i className="fa fa-map-marker" aria-hidden="true"></i><span><ul><li>Jaipur Rajasthan</li> <li>Girls Hostel</li></ul> </span></h5>
                              <h5>₹8000- ₹12000</h5>
                              <img src="assets/img/Group1002.png"/>
                              <div className="btns_bio">
                                 <NavLink className="view_btn" to="/listingdetails">View Details</NavLink>
                                 <NavLink className="view_btn" to="/listingoffline">Book Now</NavLink>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
                  <div className="col-md-6">
                     <div className="promotionalslider_single">
                        <div className="outer_listings">
                           <div className="hostelcard">
                              <img src="assets/img/Rectangl1410.png"/>
                           </div>
                           <div className="hostel_contant">
                              <h6 className="Girl_Hostel"><p>Ridhi Girl Hostel</p><i className="fa fa-heart-o" aria-hidden="true"></i></h6>
                              <h5 className="pries"><i className="fa fa-map-marker" aria-hidden="true"></i><span><ul><li>Jaipur Rajasthan</li> <li>Girls Hostel</li></ul> </span></h5>
                              <h5>₹8000- ₹12000</h5>
                              <img src="assets/img/Group1002.png"/>
                              <div className="btns_bio">
                                 <NavLink className="view_btn" to="/listingdetails">View Details</NavLink>
                                 <NavLink className="view_btn" to="/listingoffline">Book Now</NavLink>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
                  <div className="col-md-6">
                     <div className="promotionalslider_single">
                        <div className="outer_listings">
                           <div className="hostelcard">
                              <img src="assets/img/Rectangl1410.png"/>
                           </div>
                           <div className="hostel_contant">
                              <h6 className="Girl_Hostel"><p>Ridhi Girl Hostel</p><i className="fa fa-heart" aria-hidden="true"></i></h6>
                              <h5 className="pries"><i className="fa fa-map-marker" aria-hidden="true"></i><span><ul><li>Jaipur Rajasthan</li> <li>Girls Hostel</li></ul> </span></h5>
                              <h5>₹8000- ₹12000</h5>
                              <img src="assets/img/Group1002.png"/>
                              <div className="btns_bio">
                                 <NavLink className="view_btn" to="/listingdetails">View Details</NavLink>
                                 <NavLink className="view_btn" to="/listingoffline">Book Now</NavLink>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
                  <div className="col-md-6">
                     <div className="promotionalslider_single">
                        <div className="outer_listings">
                           <div className="hostelcard">
                              <img src="assets/img/Rectangl1410.png"/>
                           </div>
                           <div className="hostel_contant">
                              <h6 className="Girl_Hostel"><p>Ridhi Girl Hostel</p><i className="fa fa-heart-o" aria-hidden="true"></i></h6>
                              <h5 className="pries"><i className="fa fa-map-marker" aria-hidden="true"></i><span><ul><li>Jaipur Rajasthan</li> <li>Girls Hostel</li></ul> </span></h5>
                              <h5>₹8000- ₹12000</h5>
                              <img src="assets/img/Group1002.png"/>
                              <div className="btns_bio">
                                 <NavLink className="view_btn" to="/listingdetails">View Details</NavLink>
                                 <NavLink className="view_btn" to="/listingoffline">Book Now</NavLink>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
                  <div className="col-md-6">
                     <div className="promotionalslider_single">
                        <div className="outer_listings">
                           <div className="hostelcard">
                              <img src="assets/img/Rectangl1410.png"/>
                           </div>
                           <div className="hostel_contant">
                              <h6 className="Girl_Hostel"><p>Ridhi Girl Hostel</p><i className="fa fa-heart" aria-hidden="true"></i></h6>
                              <h5 className="pries"><i className="fa fa-map-marker" aria-hidden="true"></i><span><ul><li>Jaipur Rajasthan</li> <li>Girls Hostel</li></ul> </span></h5>
                              <h5>₹8000- ₹12000</h5>
                              <img src="assets/img/Group1002.png"/>
                              <div className="btns_bio">
                                 <NavLink className="view_btn" to="/listingdetails">View Details</NavLink>
                                 <NavLink className="view_btn" to="/listingoffline">Book Now</NavLink>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
                  </div>
               </div>
            </div>
      </section>

    <section className="how_it_works py-5"> 
          <div className="container">
             <div className="row">
                 <div className="work_hedd">
                     <h3>How it works</h3>
                     <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                     Lorem Ipsum has been the industry's standard dummy text ever since the </p>
                 </div>
               </div>
              
                <div className="row mt-4">
                 <div className="col-md-3">
                     <div className="SearchHostel">
                     <img src="assets/img/Groupmina.png"/>
                     <h3>Search your Hostel & PG </h3>
                     <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                     Lorem Ipsum has been.</p>
                    </div>
                 </div>
                 
                 <div className="col-md-3">
                     <div className="SearchHostel">
                     <img src="assets/img/Group1006.png"/>
                     <h3>Select your Hostel & PG </h3>
                     <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                     Lorem Ipsum has been.</p>
                    </div>
                 </div>
                 
                 <div className="col-md-3">
                     <div className="SearchHostel">
                     <img src="assets/img/Groupdd.png"/>
                     <h3>Schedule your visit</h3>
                     <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                     Lorem Ipsum has been.</p>
                    </div>
                 </div>
                 
                 <div className="col-md-3">
                     <div className="SearchHostel">
                     <img src="assets/img/Masksgroup.png"/>
                     <h3>Make Payment After Visit</h3>
                     <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                     Lorem Ipsum has been.</p>
                    </div>
                 </div>
             </div>
            </div>
      </section>
      
      <section className="hostels_pg my-5 reducedown" id="MapVisit">
         
         <div className="container">
            <center className="heding_map"><h6>India's leading chain of <span>Hostels and PG</span></h6>
            <p>More Destinations. More Ease. More Affordable.</p></center>

            {/* <Carousel>
                <div>
                    <img src="assets/img/Ellipse157.png" />
                    <p className="legend">Legend 1</p>
                </div>
                <div>
                    <img src="assets/img/Ellipse157.png" />
                    <p className="legend">Legend 2</p>
                </div>
                <div>
                    <img src="assets/img/Ellipse157.png" />
                    <p className="legend">Legend 3</p>
                </div>
            </Carousel> */}

            {/* <OwlCarousel items={3}
          className="owl-theme" > */}
            <div className="owlCarousel owl-theme testi">
               <div className="item">
                  <div className="ahmedabad">
                     <img src={"assets/img/Ellipse157.png"}/>
                     <p>Ahmedabad</p>
                  </div>
               </div>
               <div className="item">
                  <div className="ahmedabad">
                     <img src={"assets/img/Ellipse158.png"}/>
                     <p>Visakhapatnam</p>
                  </div>
               </div>
               <div className="item">
                  <div className="ahmedabad">
                     <img src={"assets/img/Ellipse159.png"}/>
                     <p>Manipal</p>
                  </div>
               </div>
               <div className="item">
                  <div className="ahmedabad">
                     <img src={"assets/img/Ellipse160.png"}/>
                     <p>Gurgaon</p>
                  </div>
               </div>
               <div className="item">
                  <div className="ahmedabad">
                     <img src={"assets/img/Ellipse161.png"}/>
                     <p>Vijayawada</p>
                  </div>
               </div>
               <div className="item">
                  <div className="ahmedabad">
                     <img src={"assets/img/Ellipse162.png"}/>
                     <p>Jaipur</p>
                  </div>
               </div>
               
            </div>
         {/* </OwlCarousel> */}
         </div>
      </section>
      <section>
         <div className="container">
            <div className="row">
               <div className="col-md-12">
                  <center className="reffer_banner">
                  <img src="assets/img/Group1016.png"/>
                  </center>
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
                  <li><NavLink to="/category">Category</NavLink>
               </li>
                  <li><NavLink to="/post">Post</NavLink>
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
         <li><NavLink to="/tag">Tags</NavLink></li>
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
export default Index;