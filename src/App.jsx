import MainContent from "./components/MainContent"
import Sidebar from "./components/Sidebar"
import "./style/components/app.sass"
import ScrollReveal from 'ScrollReveal'
import {Link } from "react-router-dom"

function App() {


  return (
    <div id="portifolio">
        <h1 id="titulo"><Link to="/">ISAAC GOMES</Link></h1>
       
            <Sidebar />
            <MainContent />
      
        
    </div>
  )
}


const sr = ScrollReveal()
sr.reveal("#titulo", {
    duration: 5000
})


export default App
