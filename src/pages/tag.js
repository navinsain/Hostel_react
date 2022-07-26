import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

function Tag() {
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [status, setStatus] = useState("");


  const validation = () => {
    if (title == "") {
      alert("Please enter title");
    } else if (content == "") {
      alert("Please enter content");
    }  else if (status == "") {
        alert("Please enter status");
      }  else {
        handleSignup();
      }
    
  };

  const handleSignup = () => {
    console.log("handle signup called");

    axios({
      method: "post",
      url: "http://localhost/blog/public/api/tag",
      data: {
        title: title,
        content: content,
        status: status,
      },
    })
      .then(
        function (response) {
          console.log("API Response -----", response.data);

          if (response.data) {
            alert(response.data);
          }

        }.bind(this)
      )
      .catch((error) => alert(error.response.data.message,'1111'));
      // .catch((error) => alert(error.response.data.message.email,'1111'));
      // .catch((error) => console.log(error.response.data.message.email,'1111'));

    setTitle("");
    setContent("");
    setStatus("");
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
                  <h1>Tag</h1>
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
                        value={title}
                        onChange={(e) => {
                          setTitle(e.target.value);
                        }}
                        id="title"
                        name="title"
                        placeholder="Title"
                        required
                      />

                      <img src="assets/img/email1.png" />
                      <input
                        type="content"
                        value={content}
                        onChange={(e) => {
                          setContent(e.target.value);
                        }}
                        id="Content"
                        name="content"
                        placeholder="Content"
                        required
                      />

                      <img src="assets/img/lock.png" />
                      <input
                        type="text"
                        value={status}
                        onChange={(e) => {
                          setStatus(e.target.value);
                        }}
                        id="status"
                        name="status"
                        placeholder="status"
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
export default Tag;