import React from 'react'
import { NavLink, useNavigate  } from "react-router-dom";
import { useEffect, useState } from "react";
import { useAlert } from "react-alert";
import axios from "axios";
import styles from './profile.css';

function Profile() {
    const [profiles, setProfiles] = useState([])

    const fetchData = () => {
      fetch("http://localhost/blog/public/api/profiles")
        .then(response => {
          return response.json()
        })
        .then(data => {
            setProfiles(data)
        })
    }
  
    useEffect(() => {
      fetchData()
    }, [])
  
  return (
//     <div>
//       <div className="card">
//   <img src="assets/img/user11.png" alt="John" style={{width:"100%"}}/>
//   <h1>John Doe</h1>
//   <p className="title">CEO & Founder, Example</p>
//   <p>Harvard University</p>
//   <NavLink to="#"><i className="fa fa-dribbble"></i></NavLink>
//   <NavLink to="#"><i className="fa fa-twitter"></i></NavLink>
//   <NavLink to="#"><i className="fa fa-linkedin"></i></NavLink>
//   <NavLink to="#"><i className="fa fa-facebook"></i></NavLink>
//   <p><button>Contact</button></p>
// </div>
//     </div>

<div>
      {profiles.length > 0 && (
        <ul>
          {profiles.map(profile => (
            <li key={profile.id}>{profile.name}</li>
          ))}
        </ul>
      )}
    </div>
  )
}

export default Profile;
