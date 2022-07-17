import React from 'react'
import { FaLinkedinIn, FaGithub, FaInstagram} from "react-icons/fa"
import "../style/components/SocialNetwork.sass"


const socialNetworks = [
  { name: "linkedin", icon: <FaLinkedinIn />, link: "https://www.linkedin.com/in/isaac-gomes-287b46220/" },
  { name: "github", icon: <FaGithub />, link: "https://github.com/isaac545454"},
  { name: "instagram", icon: <FaInstagram />, link: "https://www.instagram.com/isaac_matos16/" },
];

const SocialNetwork = () => {
  return (
    <section id="social-networks">
       {socialNetworks.map((net)=>
       <a href={net.link} className="social-btn" id={net.name} key={net.name}>
        {net.icon}
       </a>

       )}
    </section>
  )
}

export default SocialNetwork