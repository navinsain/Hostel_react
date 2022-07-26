import React from "react";
import { NavLink, useNavigate  } from "react-router-dom";
import { useEffect, useState } from "react";
import { useAlert } from "react-alert";
import axios from "axios";



function Welcome() {

    const navigate = useNavigate();
    const[email, setEmail]  = useState("");
    const[password, setPassword]  = useState("");

    const validation = () =>{
        if(email == ""){
            alert("Please Enter Email");
        }
        else if(password == ""){
          alert("Please Enter Password");
        }
        else {
            handleSignup();
          }
         };


         const handleSignup = () => {
           console.log("handle signup called");
           
           axios({
             method: "post",
             url: "http://localhost/blog/public/api/login",
             data: {
               email:email,
               password:password
              },
              // headers: { "content-type": "application/x-www-form-urlencoded" }
            })
            .then(
              function (response) {
                console.log("API Response -----", response.data);
                
                if (response.data.status == true) {
                  alert(response.data.message);
                  // navigate("/verify")
                } else if (response.data.status != true) {
                  // document.getElementById("demo").innerHTML = (response.data);
                  // alert(response.data);
                    navigate("/")
                  }
                }.bind(this)
              )
              .catch((error) => document.getElementById("demo1").innerHTML = (error.response.data.message));
              // .catch((error) => alert(error.response.data.message,'1111'));
              // .catch((error) => console.log(error.response.data.message,'1111'));
              // .catch((error) => console.log(error));
        
          // setEmail("")
          // setPassword("")
          };

          // useEffect(() => {
          //   localStorage.setItem('lists',JSON.stringify(email))
          // }, [email]);
        return (
            <div>
                <header className="welcome">
                    <div className="container">
                        <section className="weltextimg">
                            <div className="row">
                                <div className="col-md-6">
                                    <div className="indsideimg">
                                        <img src="assets/img/Logomeraroom.png" alt="logo" />
                                        <h3>Kharcha Kam</h3>
                                        <h4><span>Suvidha Jyada </span></h4>
                                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry.</p> 
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="right_text_wel">
                                        <NavLink to="/"><i className="fa fa-times" aria-hidden="true"></i></NavLink>
                                        <h1>Login / Signup  </h1>
                                        <div className="Login_Register_inner">
                                            <p>Please enter your phone number to continue</p>
                                            <form className="Register_number">
                                                <img src="assets/img/email1.png" alt="logo" />
                                                <input type="email" id="email" name="email"  value={navigate.email} onChange={(e) => {setEmail(e.target.value)  }} placeholder="Email" required />
                                                {/* <label id="demo" style={{color:"red"}}></label> */}
                                                <p></p>

                                                <img src="assets/img/lock.png" alt="logo" />
                                                <input type="password" id="password" name="password"  value={navigate.password} onChange={(e) => {setPassword(e.target.value)  }} placeholder="Password" required />
                                                <label  id="demo1" style={{color:"red"}}></label>
                                                <button className="Register_btn" type="button" onClick={validation}>Login</button>
                                                {/* <button className="Register_btn" onClick={validation}>Login</button> */}
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
export default Welcome;