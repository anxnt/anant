import React, { useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'

export default function Navbar() {
  
  let location = useLocation();
  useEffect(() => { },
    [location]);

  return (
    <div style={{ display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "120px", marginLeft: "-45px" }}>

      <Link to='/connect'><button className="button1" style={{
        background: location.pathname === "/connect" ? "black" : "#F3F3F3",
        boxShadow: location.pathname === "/connect" ? "2px 2px 0px 1px #F3F3F3" : "2px 2px 0px 1px black",
        color: location.pathname === "/connect" ? "white" : "black"
      }}>
        connect </button> </Link>

      <Link to='/skills'><button className="button2" style={{
        background: location.pathname === "/skills" ? "black" : "#F3F3F3",
        boxShadow: location.pathname === "/skills" ? "2px 2px 0px 1px #F3F3F3" : "2px 2px 0px 1px black",
        color: location.pathname === "/skills" ? "white" : "black"
      }}>
        skills </button> </Link>

      <Link to='/'><button className="button3" style={{
        background: location.pathname === "/" ? "black" : "#F3F3F3",
        boxShadow: location.pathname === "/" ? "2px 2px 0px 1px #F3F3F3" : "2px 2px 0px 1px black",
        color: location.pathname === "/" ? "white" : "black"
      }}>

        pow </button> </Link>

    </div>
  )
}