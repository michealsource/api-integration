import React from 'react'
import { Link } from 'react-router-dom'

function Sidebar() {
  return (
    <div>
      <div style={{display:"flex", justifyContent:"space-between", flexDirection:"column",  background:"#000", color:"#fff",  fontSize:20, width:200, height:500, padding:20}}>
        <Link to="/">Home</Link>
        <Link to="/about">Tutor</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/contact">Lessaons</Link>
        <Link to="/contact">Programs</Link>
      </div>
    </div>
  )
}

export default Sidebar
