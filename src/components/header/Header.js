import React from 'react'

function Header() {
  return (
    <div>
      <div style={{display:"flex", justifyContent:"space-between", background:"#ccc", color:"#000", height:80, fontSize:20,alignItems:"center", padding:20}}>
        <span>Home</span>
        <span>Tutor</span>
        <span>Contact</span>
        <span>Lessaons</span>
        <span>Programs</span>
      </div>
    </div>
  )
}

export default Header
