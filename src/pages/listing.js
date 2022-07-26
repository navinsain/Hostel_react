import React from "react";
import { NavLink } from "react-router-dom";

function Listing() {
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
            <div className="row" id="city_box">
               <img className="or_img" src="assets/img/or.png"/>
               <div className="col-sm-12 col-md-1 col-lg-1 centertext">
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
                  <div id="app">
                     <div className="form-group">
                        <label>Search by your institute</label>
                        <button type="button" className="institute" data-toggle="modal" data-target="#exampleModal02">
                        <img className="cities_ican1" src="assets/img/Group902.png"/>
                        <input type="search" id="location" v-model="location.city"className="form-control " placeholder="Allen, Motion, Resonace, Akash, Drishti IAS"/>
                        
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
      <section className="">
         <div className="container">
            <div className="row">
               <img id="filter_ican" src="assets/img/filter.png"/>
               <div className="col-md-3  p-0" id="left">

                  <div className="Filters">
                     <h6>Filters <span>Clear all</span></h6>
                     <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                  </div>
                  <div className="progresss">
                     <h6>Set Location</h6>
                     <div className="innarbar">
                        <div className="slidecontainer">
                           <input type="range" min="0"
                           max="20" value="10"
                           id="range"/>
                        </div>
                        <button className="progbtn">eg: 12km</button>
                     </div>
                  </div>
                  <div className="progresss">
                     <h6>Price</h6>
                     <div className="checkbox_btn">
                        <label className="main">Under <span>500</span>
                        <input type="checkbox"/>
                        <span className="geekmark"></span>
                     </label>
                     
                     <label className="main">Under  <span>10,000</span>
                     <input type="checkbox" checked="checked"/>
                     <span className="geekmark"></span>
                  </label>
                  
                  <label className="main">Under  <span>10,000 to 50,000</span>
                  <input type="checkbox"/>
                  <span className="geekmark"></span>
               </label>
            </div>
         </div>
         <div className="progresss">
            <h6>Select Your Need</h6>
            <div className="checkbox_btn">
               <label className="main"><span>Girls PG</span>
               <input type="checkbox"/>
               <span className="geekmark"></span>
            </label>
            
            <label className="main"><span>Boys PG</span>
            <input type="checkbox" checked="checked"/>
            <span className="geekmark"></span>
         </label>
         
         <label className="main"><span>Boys Hostel</span>
         <input type="checkbox"/>
         <span className="geekmark"></span>
      </label>
      <label className="main"><span>Girls Hostel</span>
      <input type="checkbox"/>
      <span className="geekmark"></span>
   </label>
</div>
</div>
<div className="progresss">
<h6>City</h6>
<div className="checkbox_btn">
   <label className="main"><span>City 1</span>
   <input type="checkbox"/>
   <span className="geekmark"></span>
</label>
<label className="main"><span>City 2</span>
<input type="checkbox" checked="checked"/>
<span className="geekmark"></span>
</label>
<label className="main"><span>City 3</span>
<input type="checkbox"/>
<span className="geekmark"></span>
</label>
<label className="main"><span>City 4</span>
<input type="checkbox"/>
<span className="geekmark"></span>
</label>
</div>
</div>
</div>
</div>
<div className="col-md-9">
<div className="top_ulbar">
<ul>
<li>35 Hostel & PG <span>in Hyderabad, India</span></li>
</ul>
<ul className="sort_by1">
<li>Sort By</li>
<li><select id="citySelect" size="1" >
<option value="" disabled selected>Popularity</option>
<option></option>
</select></li>
</ul>
</div>
<div className="row outer_pro_card mt-5 reducetop">
<div className="col-md-6">
<div className="carousel-container position-relative row">
<div id="myCarousel4" className="carousel slide" data-ride="carousel">
<div className="carousel-inner">
<div className="carousel-item active" data-slide-number="0">
   <img src="assets/img/Rectangle1410.png" data-type="image" data-toggle="lightbox" data-gallery="example-gallery"/>
</div>
<div className="carousel-item" data-slide-number="5">
   <img src="assets/img/Rectangle1410.png" data-type="image" data-toggle="lightbox" data-gallery="example-gallery"/>
</div>
<div className="carousel-item" data-slide-number="6">
   <img src="assets/img/Rectangle1410.png" data-type="image" data-toggle="lightbox" data-gallery="example-gallery"/>
</div>
<div className="carousel-item" data-slide-number="7">
   <img src="assets/img/Rectangle1410.png" data-type="image" data-toggle="lightbox" data-gallery="example-gallery"/>
</div>
<div className="carousel-item" data-slide-number="8">
   <img src="assets/img/Rectangle1410.png" data-type="image" data-toggle="lightbox" data-gallery="example-gallery"/>
</div>
<div className="carousel-item" data-slide-number="9">
   <img src="assets/img/Rectangle1410.png" data-type="image" data-toggle="lightbox" data-gallery="example-gallery"/>
</div>
</div>
{/* <!-- Carousel Navigation --> */}
<div id="carousel-thumbs" className="carousel slide" data-ride="carousel">
<div className="carousel-inner">
   <div className="carousel-item active">
      <div className="carousel_righ">
         <div id="carousel-selector-0" className=" selected" data-target="#myCarousel4" data-slide-to="0">
            <img src="assets/img/Rectangle1410.png" className="img-fluid" alt="..."/>
         </div>
         <div id="carousel-selector-1" className="thumb " data-target="#myCarousel4" data-slide-to="1">
            <img src="assets/img/Rectangle1410.png" className="img-fluid" alt="..."/>
         </div>
         <div id="carousel-selector-2" className="thum" data-target="#myCarousel4" data-slide-to="2">
            <img src="assets/img/Rectangle1410.png" className="img-fluid" alt="..."/>
         </div>
         <div id="carousel-selector-3" className="" data-target="#myCarousel4" data-slide-to="3">
            <img src="assets/img/Rectangle1410.png" className="img-fluid" alt="..."/>
         </div>
      </div>
   </div>
</div>
</div>
</div>
</div>
</div>
<div className="col-md-6">
<div className="hostel_contant">
<h6 className="Girl_Hostel"><p>Ridhi Girl Hostel</p><i className="fa fa-heart" aria-hidden="true"></i></h6>
<h5 className="pries"><i className="fa fa-map-marker" aria-hidden="true"></i><span><ul><li>Jaipur Rajasthan</li> <li>Girls Hostel</li></ul> </span></h5>
<h5>₹8000- ₹12000</h5>
<img src="assets/img/Group1002.png"/>

<div className="btns_bio">
<NavLink className="view_btn" to="/listingdetails">View Details</NavLink>
<NavLink className="book_now" to="/listingoffline">Book Now</NavLink>
</div>

</div>
</div>
</div>
<div className="row outer_pro_card mt-5 reducetop">
<div className="col-md-6">
<div className="carousel-container position-relative row">
<div id="myCarousel1" className="carousel slide" data-ride="carousel">
<div className="carousel-inner">
<div className="carousel-item active" data-slide-number="0">
   <img src="assets/img/Rectangle1410.png" data-type="image" data-toggle="lightbox" data-gallery="example-gallery"/>
</div>
<div className="carousel-item" data-slide-number="5">
   <img src="assets/img/Rectangle1410.png" data-type="image" data-toggle="lightbox" data-gallery="example-gallery"/>
</div>
<div className="carousel-item" data-slide-number="6">
   <img src="assets/img/Rectangle1410.png" data-type="image" data-toggle="lightbox" data-gallery="example-gallery"/>
</div>
<div className="carousel-item" data-slide-number="7">
   <img src="assets/img/Rectangle1410.png" data-type="image" data-toggle="lightbox" data-gallery="example-gallery"/>
</div>
<div className="carousel-item" data-slide-number="8">
   <img src="assets/img/Rectangle1410.png" data-type="image" data-toggle="lightbox" data-gallery="example-gallery"/>
</div>
<div className="carousel-item" data-slide-number="9">
   <img src="assets/img/Rectangle1410.png" data-type="image" data-toggle="lightbox" data-gallery="example-gallery"/>
</div>
</div>
{/* <!-- Carousel Navigation --> */}
<div id="carousel-thumbs" className="carousel slide" data-ride="carousel">
<div className="carousel-inner">
   <div className="carousel-item active">
      <div className="carousel_righ">
         <div id="carousel-selector-0" className=" selected" data-target="#myCarousel1" data-slide-to="0">
            <img src="assets/img/Rectangle1410.png" className="img-fluid" alt="..."/>
         </div>
         <div id="carousel-selector-1" className="thumb " data-target="#myCarousel1" data-slide-to="1">
            <img src="assets/img/Rectangle1410.png" className="img-fluid" alt="..."/>
         </div>
         <div id="carousel-selector-2" className="thum" data-target="#myCarousel1" data-slide-to="2">
            <img src="assets/img/Rectangle1410.png" className="img-fluid" alt="..."/>
         </div>
         <div id="carousel-selector-3" className="" data-target="#myCarousel1" data-slide-to="3">
            <img src="assets/img/Rectangle1410.png" className="img-fluid" alt="..."/>
         </div>
      </div>
   </div>
</div>
</div>
</div>
</div>
</div>
<div className="col-md-6">
<div className="hostel_contant">
<h6 className="Girl_Hostel"><p>Ridhi Girl Hostel</p><i className="fa fa-heart" aria-hidden="true"></i></h6>
<h5 className="pries"><i className="fa fa-map-marker" aria-hidden="true"></i><span><ul><li>Jaipur Rajasthan</li> <li>Girls Hostel</li></ul> </span></h5>
<h5>₹8000- ₹12000</h5>
<img src="assets/img/Group1002.png"/>
<div className="btns_bio">
<NavLink className="view_btn" to="/listingdetails">View Details</NavLink>
<NavLink className="book_now" to="/listingoffline">Book Now</NavLink>
</div>
</div>
</div>
</div>
<div className="row outer_pro_card mt-5 reducetop">
<div className="col-md-6">
<div className="carousel-container position-relative row">
<div id="myCarousel2" className="carousel slide" data-ride="carousel">
<div className="carousel-inner">
<div className="carousel-item active" data-slide-number="0">
   <img src="assets/img/Rectangle1410.png" data-type="image" data-toggle="lightbox" data-gallery="example-gallery"/>
</div>
<div className="carousel-item" data-slide-number="5">
   <img src="assets/img/Rectangle1410.png" data-type="image" data-toggle="lightbox" data-gallery="example-gallery"/>
</div>
<div className="carousel-item" data-slide-number="6">
   <img src="assets/img/Rectangle1410.png" data-type="image" data-toggle="lightbox" data-gallery="example-gallery"/>
</div>
<div className="carousel-item" data-slide-number="7">
   <img src="assets/img/Rectangle1410.png" data-type="image" data-toggle="lightbox" data-gallery="example-gallery"/>
</div>
<div className="carousel-item" data-slide-number="8">
   <img src="assets/img/Rectangle1410.png" data-type="image" data-toggle="lightbox" data-gallery="example-gallery"/>
</div>
<div className="carousel-item" data-slide-number="9">
   <img src="assets/img/Rectangle1410.png" data-type="image" data-toggle="lightbox" data-gallery="example-gallery"/>
</div>
</div>
{/* <!-- Carousel Navigation --> */}
<div id="carousel-thumbs" className="carousel slide" data-ride="carousel">
<div className="carousel-inner">
   <div className="carousel-item active">
      <div className="carousel_righ">
         <div id="carousel-selector-0" className=" selected" data-target="#myCarousel2" data-slide-to="0">
            <img src="assets/img/Rectangle1410.png" className="img-fluid" alt="..."/>
         </div>
         <div id="carousel-selector-1" className="thumb " data-target="#myCarousel2" data-slide-to="1">
            <img src="assets/img/Rectangle1410.png" className="img-fluid" alt="..."/>
         </div>
         <div id="carousel-selector-2" className="thum" data-target="#myCarousel2" data-slide-to="2">
            <img src="assets/img/Rectangle1410.png" className="img-fluid" alt="..."/>
         </div>
         <div id="carousel-selector-3" className="" data-target="#myCarousel2" data-slide-to="3">
            <img src="assets/img/Rectangle1410.png" className="img-fluid" alt="..."/>
         </div>
      </div>
   </div>
</div>
</div>
</div>
</div>
</div>
<div className="col-md-6">
<div className="hostel_contant">
<h6 className="Girl_Hostel"><p>Ridhi Girl Hostel</p><i className="fa fa-heart" aria-hidden="true"></i></h6>
<h5 className="pries"><i className="fa fa-map-marker" aria-hidden="true"></i><span><ul><li>Jaipur Rajasthan</li> <li>Girls Hostel</li></ul> </span></h5>
<h5>₹8000- ₹12000</h5>
<img src="assets/img/Group1002.png"/>
<div className="btns_bio">
<NavLink className="view_btn" to="/listingdetails">View Details</NavLink>
<NavLink className="book_now" to="/listingoffline">Book Now</NavLink>
</div>
</div>
</div>
</div>
<div className="row outer_pro_card mt-5 reducetop">
<div className="col-md-6">
<div className="carousel-container position-relative row">
<div id="myCarousel3" className="carousel slide" data-ride="carousel">
<div className="carousel-inner">
<div className="carousel-item active" data-slide-number="0">
   <img src="assets/img/Rectangle1410.png" data-type="image" data-toggle="lightbox" data-gallery="example-gallery"/>
</div>
<div className="carousel-item" data-slide-number="5">
   <img src="assets/img/Rectangle1410.png" data-type="image" data-toggle="lightbox" data-gallery="example-gallery"/>
</div>
<div className="carousel-item" data-slide-number="6">
   <img src="assets/img/Rectangle1410.png" data-type="image" data-toggle="lightbox" data-gallery="example-gallery"/>
</div>
<div className="carousel-item" data-slide-number="7">
   <img src="assets/img/Rectangle1410.png" data-type="image" data-toggle="lightbox" data-gallery="example-gallery"/>
</div>
<div className="carousel-item" data-slide-number="8">
   <img src="assets/img/Rectangle1410.png" data-type="image" data-toggle="lightbox" data-gallery="example-gallery"/>
</div>
<div className="carousel-item" data-slide-number="9">
   <img src="assets/img/Rectangle1410.png" data-type="image" data-toggle="lightbox" data-gallery="example-gallery"/>
</div>
</div>
{/* <!-- Carousel Navigation --> */}
<div id="carousel-thumbs" className="carousel slide" data-ride="carousel">
<div className="carousel-inner">
   <div className="carousel-item active">
      <div className="carousel_righ">
         <div id="carousel-selector-0" className=" selected" data-target="#myCarousel3" data-slide-to="0">
            <img src="assets/img/Rectangle1410.png" className="img-fluid" alt="..."/>
         </div>
         <div id="carousel-selector-1" className="thumb " data-target="#myCarousel3" data-slide-to="1">
            <img src="assets/img/Rectangle1410.png" className="img-fluid" alt="..."/>
         </div>
         <div id="carousel-selector-2" className="thum" data-target="#myCarousel3" data-slide-to="2">
            <img src="assets/img/Rectangle1410.png" className="img-fluid" alt="..."/>
         </div>
         <div id="carousel-selector-3" className="" data-target="#myCarousel3" data-slide-to="3">
            <img src="assets/img/Rectangle1410.png" className="img-fluid" alt="..."/>
         </div>
      </div>
   </div>
</div>
</div>
</div>
</div>
</div>
<div className="col-md-6">
<div className="hostel_contant">
<h6 className="Girl_Hostel"><p>Ridhi Girl Hostel</p><i className="fa fa-heart" aria-hidden="true"></i></h6>
<h5 className="pries"><i className="fa fa-map-marker" aria-hidden="true"></i><span><ul><li>Jaipur Rajasthan</li> <li>Girls Hostel</li></ul> </span></h5>
<h5>₹8000- ₹12000</h5>
<img src="assets/img/Group1002.png"/>
<div className="btns_bio">
<NavLink className="view_btn" to="/listingdetails">View Details</NavLink>
<NavLink className="book_now" to="/listingoffline">Book Now</NavLink>
</div>
</div>
</div>
</div>
<div className="row">
<div className="col-md-12">
<h6 className="centers">
<ul className="pagination">
<li><NavLink to="#" className="prev">Prev</NavLink></li>
<li className="pageNumber active"><NavLink to="#">1</NavLink></li>
<li className="pageNumber"><NavLink to="#">2</NavLink></li>
<li className="pageNumber"><NavLink to="#">3</NavLink></li>
<li className="pageNumber"><NavLink to="#">4</NavLink></li>
<li className="pageNumber"><NavLink to="#">5</NavLink></li>
<li className="pageNumber"><NavLink to="#">6</NavLink></li>
<li><NavLink to="#" className="next">Next</NavLink></li>
</ul>
</h6>
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
export default Listing;