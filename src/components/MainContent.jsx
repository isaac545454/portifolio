import "../style/components/mainContent.sass"
import Aboult from "./aboltContainer"
import Tecnologias from "./tecContainer"
import Projetos from "./projetosContainer"

import React from 'react'

const MainContent = () => {
  return (
    <main id="main-content">
        <Aboult />
        <Tecnologias />
        <Projetos />
    </main>
  )
}

export default MainContent