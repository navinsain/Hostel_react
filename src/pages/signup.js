import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
// import { useAlert } from "react-alert";
import axios from "axios";

// class Signup extends React.Component {
//    render() {
function Signup() {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [number, setNumber] = useState("");
  const [state, setState] = useState("");
  const [city, setCity] = useState("");
  const [address, setAddress] = useState("");

  // function saveUser() {
  //    console.warn({ name, email, city });
  //    let data = { name, email, city }
  //    fetch("http://localhost/hostel/public/api/signup", {
  //       method: 'POST',
  //       headers: {
  //          'Accept': 'application/json',
  //          'Content-type': 'application/json'
  //       },
  //       body: JSON.stringify(data)
  //    }).then((result) => {
  //       //   console.warn("result",result);
  //       result.json().then((resp) => {
  //          console.warn("resp", resp)
  //       })
  //    })
  //    setName("");
  //    setEmail("");
  //    setCity("");
  // }

  const validation = () => {
    if (name == "") {
      alert("Please enter your name");
    } else if (email == "") {
      alert("Please enter your email");
    } else if (email !== "") {
      let reg = /^\w+([\.-]?\w+)@\w+([\.-]?\w+)(\.\w{2,3})+$/;
      if (reg.test(email) === false) {
        alert("invalid email");
      }  else if (password == "") {
        alert("Please enter password");
      } else if (number == "") {
        alert("Please enter number");
      } else if (state == "") {
        alert("Please enter state");
      } else if (city == "") {
        alert("Please enter city name");
      } else if (address == "") {
        alert("Please enter address");
      } else {
        handleSignup();
      }
    }
  };

  const handleSignup = () => {
    console.log("handle signup called");

    axios({
      method: "post",
      url: "http://localhost/blog/public/api/register",
      data: {
        name: name,
        email: email,
        password: password,
        number: number,
        state: state,
        city: city,
        address: address,
      },
      // headers: { "content-type": "application/x-www-form-urlencoded" }
    })
      .then(
        function (response) {
          console.log("API Response -----", response.data);

          if (response.data) {
            alert(response.data);
            navigate("/welcome")
            // alert(response.data.message);
            // navigate("/verify")
          }
          // else if (response.data.status != true) {
          //   alert(response.data);
          //   // navigate("/welcome")
          //   // alert(response.data.message);
          // }
        }.bind(this)
      )
      .catch((error) => alert(error.response.data.message,'1111'));
      // .catch((error) => alert(error.response.data.message.email,'1111'));
      // .catch((error) => console.log(error.response.data.message.email,'1111'));

    // setName("");
    // setEmail("");
    // setPassword("");
    // setNumber("");
    // setState("");
    // setCity("");
    // setAddress("");
  };

 

  return (
    <body>
      <header className="welcome">
        <div className="container">
          <section className="weltextimg">
            <div className="row">
              <div className="col-md-6">
                <div className="indsideimg">
                  <img src="assets/img/Logomeraroom.png" />
                  <h3>Kharcha Kam</h3>
                  <h4>
                    <span>Suvidha Jyada </span>
                  </h4>
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry.
                  </p>
                </div>
              </div>
              <div className="col-md-6">
                <div className="right_text_wel">
                  <NavLink to="/">
                    <i className="fa fa-times" aria-hidden="true"></i>
                  </NavLink>
                  <h1>Signup </h1>
                  <div
                    className="Login_Register_inner"
                    style={{ MarginBottom: "15px" }}
                  >
                    <form
                      className="Register_sign py-2  "
                      style={{ MarginBottom: "15px" }}
                    >
                      <img src="assets/img/Group491.png" />
                      <input
                        type="text"
                        value={name}
                        onChange={(e) => {
                          setName(e.target.value);
                        }}
                        id="name"
                        name="name"
                        placeholder="Full Name"
                        required
                      />

                      <img src="assets/img/email1.png" />
                      <input
                        type="text"
                        value={email}
                        onChange={(e) => {
                          setEmail(e.target.value);
                        }}
                        id="Email"
                        name="email"
                        placeholder="Email"
                        required
                      />

                      <img src="assets/img/lock.png" />
                      <input
                        type="text"
                        value={password}
                        onChange={(e) => {
                          setPassword(e.target.value);
                        }}
                        id="Password"
                        name="password"
                        placeholder="Password"
                        required
                      />

                      <img src="assets/img/Group 477@2x.png" />
                      <input
                        type="number"
                        value={number}
                        onChange={(e) => {
                          setNumber(e.target.value);
                        }}
                        id="number"
                        name="number"
                        placeholder="Number"
                        required
                      />

                      <img src="assets/img/state.png"/>
                      <input
                        type="text"
                        value={state}
                        onChange={(e) => {
                          setState(e.target.value);
                        }}
                        id="state"
                        name="state"
                        placeholder="State"
                        required
                      />

                      <img src="assets/img/locationblack.png" />
                      <select
                        value={city}
                        onChange={(e) => {
                          setCity(e.target.value);
                        }}
                        name="city"
                        id="citySelect"
                        size="1"
                      >
                        <option>Choose City</option>
                        <option>Jaipur</option>
                        <option>Kota</option>
                        <option>Bundi</option>
                        <option>Ajmer</option>
                        <option>Nagour</option>
                        <option>Jaipur</option>
                      </select>

                      <img src="assets/img/address.png" />
                      <input
                        type="text"
                        value={address}
                        onChange={(e) => {
                          setAddress(e.target.value);
                        }}
                        id="address"
                        name="address"
                        placeholder="Enter Address"
                        required
                      />

                      <button
                      className="Register_btn"
                        type="button"
                        onClick={validation}
                      >
                        Proceed
                      </button>
                    </form>
                    {/* <NavLink to="/"><button className="Register_btn">Proceed</button></NavLink> */}
                    <p className="right_text_rig">
                      Back to{" "}
                      <NavLink to="/welcome">
                        <span>Login</span>
                      </NavLink>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </header>
    </body>
  );
}
export default Signup;
