import MainContent from "./components/MainContent"
import Sidebar from "./components/Sidebar"
import "./style/components/app.sass"

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




export default App
