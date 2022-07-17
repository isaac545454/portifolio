import React from 'react'
import "../style/components/info.sass"
import {AiFillPhone, AiOutlineMail, AiFillEnvironment } from "react-icons/ai"

const info = () => {
  return (
    <section id="information-container">
       <div className="info-card">
           <AiFillPhone id="phone-icon" />
           <div>
            <h3>telefone</h3>
            <p>(11) 99003-1907</p>
           </div>
       </div>
        <div className="info-card">
           <AiOutlineMail id="email-icon" />
           <div>
            <h3>E-mail</h3>
            <p>isaac.newton1221@gmail.com</p>
           </div>
       </div>
        <div className="info-card">
           <AiFillEnvironment id="pin-icon" />
           <div>
            <h3>localização</h3>
            <p>São Paulo, SP </p>
           </div>
       </div>
    </section>
  )
}

export default info