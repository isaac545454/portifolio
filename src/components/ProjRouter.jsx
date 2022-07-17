import React from 'react'
import {Link} from "react-router-dom"

import Memoria from "../img/memoria.png"
import Cep from "../img/cep.png"
import Filmes from "../img/filmes.png"

import "../style/components/ProjRouter.sass"


const Projetos = [
    {
        name: "jogo da memoria",
        tecnologias: "react.js",
        img: Memoria,
        link: "https://react-memory-indol.vercel.app/"
    },
    {
        name: "buscador de cep",
        tecnologias: "react e axios",
        img: Cep,
        link: "https://busca-cep-six.vercel.app/"
    },
    {
        name: "movies_lib",
        tecnologias: "react-router e react-icons",
        img: Filmes,
        link: "https://movies-lib-delta.vercel.app/"
    },
        {
        name: "CRUD",
        tecnologias: "NodeJS, mongoDB e ejs",
        img: "https://tse4.mm.bing.net/th?id=OIP.I659EejrO74zJv-kkPt02wHaGD&pid=Api&P=0&w=205&h=168",
        link: "https://github.com/isaac545454/CRUD-node-ejs"
    },
    {
        name: "APIREST",
        tecnologias: "NodeJS E mongoDB",
        img: "https://tse1.mm.bing.net/th?id=OIP.-XTfY_-0H6GK8BczF3rP7QAAAA&pid=Api&P=0&w=284&h=204",
        link: "https://github.com/isaac545454/APIREST"
    },
    {
        name: "autenticação",
        tecnologias: "NodeJS, mongoDB, jwt e bcrypt",
        img: "https://tse2.mm.bing.net/th?id=OIP.RaLxV3JgtsV97WlJKXjlHQHaHa&pid=Api&P=0&w=156&h=156",
        link: "https://github.com/isaac545454/auth"
    }
]

const ProjRouter = () => {
 return(
    <div id="container-projetos" >
     
     <h1 id="title-projetos"><Link to="/">projetos</Link></h1>
        {Projetos.map((projeto)=>
           <a href={projeto.link}>
            <div className="card-projeto" key={projeto.name}>
               <img src={projeto.img} alt={projeto.name} />
                <h2>{projeto.name}</h2>
                <p>{projeto.tecnologias}</p>
            </div>
            </a>
        )}
    </div>
 )
  
}

export default ProjRouter
