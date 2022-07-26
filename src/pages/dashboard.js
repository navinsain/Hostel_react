import React from "react";
import { NavLink } from "react-router-dom";

function Dashboard() {
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
      {/* <!-- Demo header--> */}
      <section className="py-5 header">
         <div className="container">
            <div className="text-center mb-5 pb-5 text-white">
               <p className="font-italic">
                  <NavLink className="text-white" to="">
                     <u></u>
                  </NavLink>
               </p>
            </div>
               <div className="row">
                  <div className="col-md-3">
                     {/* <!-- Tabs nav --> */}
                     <div className="nav flex-column nav-pills nav-pills-custom" id="v-pills-tab" role="tablist" aria-orientation="vertical">
                        <NavLink className="nav-link mb-3 p-3 shadow active" id="v-pills-home-tab" data-toggle="pill" to="#v-pills-home" role="tab" aria-controls="v-pills-home" aria-selected="true">
                           <i className="fa fa-user-circle-o mr-2"></i>
                           <span className="font-weight-bold small text-uppercase">Profile</span></NavLink>
                           <NavLink className="nav-link mb-3 p-3 shadow" id="v-pills-bookings-tab" data-toggle="pill" to="#v-pills-bookings" role="tab" aria-controls="v-pills-bookings" aria-selected="false">
                              <i className="fa fa-calendar-minus-o mr-2"></i>
                              <span className="font-weight-bold small text-uppercase">My Bookings</span></NavLink>
                              <NavLink className="nav-link mb-3 p-3 shadow" id="v-pills-wallet-tab" data-toggle="pill" to="#v-pills-wallet" role="tab" aria-controls="v-pills-wallet" aria-selected="false">
                                 <i className="fa fa-google-wallet mr-2" aria-hidden="true"></i>
                                 <span className="font-weight-bold small text-uppercase">My Wallet</span></NavLink>
                                 <NavLink className="nav-link mb-3 p-3 shadow" id="v-pills-Wish-tab" data-toggle="pill" to="#v-pills-Wish" role="tab" aria-controls="v-pills-Wish" aria-selected="false">
                                    <i className="fa fa-heart mr-2" aria-hidden="true"></i>
                                    <span className="font-weight-bold small text-uppercase">Wish List</span></NavLink>
                                    <NavLink className="nav-link mb-3 p-3 shadow" id="v-pills-Help-tab" data-toggle="pill" to="#v-pills-Help" role="tab" aria-controls="v-pills-Help" aria-selected="false">
                                       <i className="fa fa-life-ring mr-2" aria-hidden="true"></i>
                                       <span className="font-weight-bold small text-uppercase">Help and Support</span></NavLink>
                                    </div>
                                 </div>
                                 <div className="col-md-9">
                                    {/* <!-- Tabs content --> */}
                                    <div className="tab-content" id="v-pills-tabContent">
                                       <div className="tab-pane fade  rounded bg-white show active p-3" id="v-pills-home" role="tabpanel" aria-labelledby="v-pills-home-tab">
                                          <div className="top_desh_hedd">
                                             <h5>My Profile</h5><button className="btn btn-success text-uppercase">update</button>
                                          </div>
                                          <div className="top_desh_body shadow mt-3">
                                             <div className="file_chouse">
                                                <img src="assets/img/Group638.png"/>
                                                <input type="file" id="myFile" name="filename"/>
                                             </div>
                                             <div className="row">
                                                <div className="col-12 col-md-6">
                                                   <div className="Register_Pay py-2">
                                                      <img src="assets/img/Group4991.png"/>
                                                      <input type="text" id="number" name="number" placeholder="Number" required=""/>
                                                   </div>
                                                </div>
                                                <div className="col-12 col-md-6">
                                                   <div className="Register_Pay py-2">
                                                      <img src="assets/img/email1.png"/>
                                                      <input type="text" id="Email" name="Email" placeholder="Email" required=""/>
                                                   </div>
                                                </div>
                                             </div>
                                          </div>
                                       </div>
                                       
                                       <div className="tab-pane fade  rounded bg-white p-3" id="v-pills-bookings" role="tabpanel" aria-labelledby="v-pills-bookings-tab">
                                          
                                       </div>
                                       <div className="tab-pane fade  rounded bg-white p-3" id="v-pills-wallet" role="tabpanel" aria-labelledby="v-pills-wallet-tab">
                                          <div className="top_desh_hedd">
                                             <h5>My Wallet</h5>
                                          </div>
                                          <div className="top_desh_body shadow mt-3">
                                             <div className="file_banner">
                                                <img src="assets/img/Rectangle-1497.png"/>
                                             </div>
                                             <div className="fillter_boxss">
                                                <h5>Transactions History</h5><img src="assets/img/Group-556.png"/>
                                             </div>
                                             <p className="Property_date">Today</p>
                                             <div className="transactions_list">
                                                <div className="outer_intitute">
                                                   <div className="ican_in">
                                                      <img src="assets/img/Group_586.png"/>
                                                      <h6>Room Rent</h6>
                                                   </div>
                                                   <div className="select_inti">
                                                      <p>23.05.19. 5:41 PM</p>
                                                   </div>
                                                   <div className="proceed_inti" style={{color:'rgba(223, 8, 40, 1)'}}>
                                                      <p>-₹500.45</p>
                                                   </div>
                                                </div>

                                                <div className="outer_intitute">
                                                   <div className="ican_in">
                                                      <img src="assets/img/Group_586.png"/>
                                                      <h6>Room Rent</h6>
                                                   </div>
                                                   <div className="select_inti">
                                                      <p>23.05.19. 5:41 PM</p>
                                                   </div>
                                                   <div className="proceed_inti" style={{color:'rgba(12, 188, 26, 1)'}}>
                                                      <p>-₹500.45</p>
                                                   </div>
                                                </div>

                                                <div className="outer_intitute">
                                                   <div className="ican_in">
                                                      <img src="assets/img/Group_586.png"/>
                                                      <h6>Room Rent</h6>
                                                   </div>
                                                   <div className="select_inti">
                                                      <p>23.05.19. 5:41 PM</p>
                                                   </div>
                                                   <div className="proceed_inti" style={{color:'rgba(223, 8, 40, 1)'}}>
                                                      <p>-₹500.45</p>
                                                   </div>
                                                </div>

                                             </div>
                                          </div>
                                          
                                       </div>
                                       <div className="tab-pane fade  rounded bg-white p-3" id="v-pills-Wish" role="tabpanel" aria-labelledby="v-pills-Wish-tab">
                                          
                                          
                                       </div>
                                       
                                       <div className="tab-pane fade  rounded bg-white p-3" id="v-pills-Help" role="tabpanel" aria-labelledby="v-pills-Help-tab">
                                          
                                          
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
export default Dashboard;