import React from 'react'
import { NavLink, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import styles from './profile.css';

function Profile() {
  const [name, setName] = useState([])
  const [email, setEmail] = useState([])
  const [number, setNumber] = useState([])
  const [state, setState] = useState([])
  const [city, setCity] = useState([])
  const [address, setAddress] = useState([])
  const id = 0

  const fetchData = () => {
    fetch(`http://localhost/blog/public/api/profiles?id=${id}`)
      .then(response => {
        return response.json()
      })
      .then(data => {
        setName(data[id].name)
        setEmail(data[id].email)
        setNumber(data[id].number)
        setState(data[id].state)
        setCity(data[id].city)
        setAddress(data[id].address)
      })
  }

  useEffect(() => {
    fetchData()
  }, [])

  return (
    <div>
      <div className="card">
        <img src="assets/img/user11.png" style={{ width: "100%" }} />
        <h1>{name}</h1>
        <label>Email: {email}</label>
        <label>Phone Number: {number}</label>
        <label>State: {state}</label>
        <label>City: {city}</label>
        <label>Address: {address}</label>
        {/* <NavLink to="#"><i className="fa fa-dribbble"></i></NavLink>
        <NavLink to="#"><i className="fa fa-twitter"></i></NavLink> */}
        <NavLink to="#"><i className="fa fa-linkedin"></i></NavLink>
        <NavLink to="#"><i className="fa fa-facebook"></i></NavLink>
        <NavLink to="#"><button>Update Profile</button></NavLink>
      </div>
    </div>

  )
}

export default Profile;
