import React from 'react'
import SocialNetwork from "./SocialNetwork"
import Info from "./info"
import Avatar from "../img/port.jpg"
import "../style/components/sidebar.sass"
import Curriculo from "../img/curriculo.pdf"

const Sidebar = () => {
  return (
    <aside id="sidebar">
        <img src={Avatar} alt="isaac gomes" id="img" />
        <p className="title">full Stack</p>
        <SocialNetwork />
        <Info />
        
        <a href={Curriculo} className="btn" type="application/pdf" download="curriculo.pdf"> Download currículo</a>
    </aside>
  )
}

export default Sidebar