import React from 'react'
import ReactDOM from 'react-dom/client'
import {  Routes, Route,  BrowserRouter} from 'react-router-dom'
import App from './App'
import ProjRouter from "./components/ProjRouter"
import "./style/main.sass"


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/projetos" element={<ProjRouter />} /> 

    </Routes>
    </BrowserRouter>
  </React.StrictMode>
)
