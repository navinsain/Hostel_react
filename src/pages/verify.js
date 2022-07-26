import React from "react";
import { NavLink,useNavigate } from "react-router-dom";
import {  useState } from "react";
import axios from "axios";
function Verify () {
  const navigate = useNavigate();
  const [otp, setOtp] = useState("");
  const [otp1, setOtp1] = useState("");
  const [otp2, setOtp2] = useState("");
  const [otp3, setOtp3] = useState("");
  const [otp4, setOtp4] = useState();

  


  const validation = () => {
    if (otp == "") {
      alert("Please enter your OTP");
    } else if (otp1 == "") {
      alert("Please enter your OTP");
     
    } 
    else if (otp2 == "") {
      alert("Please enter your OTP");

    }   
      else if (otp3 == "") {
        alert("Please enter your OTP");

      }  else {
        setOtp4(otp,otp1)
        handleSignup();
      }  
  };

  const handleSignup = () => {
    console.log("handle signup called",otp+otp1+otp2+otp3);

    axios({
      method: "post",
      url: "https://meraroom.in/app/public/api/v1/vendor/register/otp-verify",
      data: {
        mobile:"1020304070",
        otp:otp+otp1+otp2+otp3
        
      },
      // headers: { "content-type": "application/x-www-form-urlencoded" }
    })
      .then(
        function (response) {
          console.log("API Response -----", response.data);

          if (response.data.status == true) {
            alert(response.data.message);
            navigate("/")
          } else if (response.data.status != true) {
            alert(response.data.message);
          }
        }.bind(this)
      )
      .catch((error) => console.log(error));

      setOtp("");
      setOtp1("");
      setOtp2("");
      setOtp3("");
  };
  
      return(
         <div>
           <header className="welcome">
         <div className="container"> 
            <section className="weltextimg">
               <div className="row">
                  <div className="col-md-6">
                     <div className="indsideimg">
                        <img src="assets/img/Logomeraroom.png" alt="logo"/>
                        <h3>Kharcha Kam</h3>
                        <h4><span>Suvidha Jyada </span></h4>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry.</p>
                     </div>
                  </div>
                  <div className="col-md-6">
                     <div className="right_text_wel">
                        <a href to="javascript:void"><i class="fa fa-times" aria-hidden="true"></i></a>
                        <h1>Login</h1>
                        <div className="Login_Register_inner">
                           <p>We have Sent an OTP your Mobile ********66</p>
                           <form
                      className="Register_sign py-2  "
                      style={{ MarginBottom: "15px" }}
                    >
                     <form class="Register_number otp">



                    
                      <input
                        type="text"
                        value={otp}
                        onChange={(e) => {
                          setOtp(e.target.value);
                        }}
                        id="name"
                        name="name"
                    
                        required maxlength="1"
                      />

                     
                      <input
                        type="text"
                        value={otp1}
                        onChange={(e) => {
                          setOtp1(e.target.value);
                        }}
                        id="Email"
                        name="email"
                      
                        required maxlength="1"
                      />

                    
                      <input
                        type="mobile"
                        value={otp2}
                        onChange={(e) => {
                          setOtp2(e.target.value);
                        }}
                        id="mobile"
                        name="mobile"
                      
                        required maxlength="1"
                      />

                      
                      <input
                        type="text"
                        value={otp3}
                        onChange={(e) => {
                          setOtp3(e.target.value);
                        }}
                        id="state"
                        name="state"
                       
                        required maxlength="1"
                      />
                       </form>

                     

                      <button
                        type="button"
                        onClick={validation}
                        className="Register_btn"
                      >
                        Proceed
                      </button>
                    </form>
                         
                           <p>Don't have an account? <NavLink to="/signup"><span>Register now</span></NavLink></p> 
                        </div>
                     </div>
                  </div>
               </div>
            </section>
         </div>
      </header>
         </div>
      )
   
}
export default Verify