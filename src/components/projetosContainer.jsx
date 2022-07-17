import React from 'react'
import {Link} from "react-router-dom"


const projetosContainer = () => {
  return (
    <section className="projects-container">
        <h2>projetos</h2>
        <p>
             alguns dos meus projetos:<br />
             dessenvolvidos em: <br />
             react, node e mongoDB
        </p>
        <button class="btn"><Link to="/projetos">projetos</Link></button>
    </section>
  )
}

export default projetosContainer