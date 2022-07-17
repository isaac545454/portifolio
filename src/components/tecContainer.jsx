
import {
  DiHtml5,
  DiCss3,
  DiJsBadge,
  DiNodejsSmall,
  DiReact,
  DiSass,
  DiBootstrap
} from "react-icons/di";
import { SiTypescript } from "react-icons/si"
import "../style/components/tecContainer.sass"

const technologies = [
  { id: "html", name: "HTML5", icon: <DiHtml5 /> },
  { id: "css", name: "CSS3", icon: <DiCss3 /> },
  { id: "js", name: "JS", icon: <DiJsBadge /> },
  { id: "node", name: "Node.js", icon: <DiNodejsSmall /> },
  { id: "typescript", name: "TS", icon: <SiTypescript /> },
  { id: "react", name: "React", icon: <DiReact /> },
  { id: "sass", name: "Sass", icon: <DiSass /> },
  { id: "bootstrap", name: "Bootstrap", icon: <DiBootstrap /> }
];

const tecContainer = () => {
  return (
    <section className="tec-container">
        <h2>Tecnologias</h2>
        <div className="tec-grid">
            {technologies.map((tech)=>
              <div className="tec-card" id={tech.id} key={tech.id}>
                 {tech.icon}
                  <div className="tec-info">
                     <h3>{tech.name}</h3>
                  </div>
              </div>
            )}
        </div>
    </section>
  )
}

export default tecContainer