import { useState, useEffect } from 'preact/hooks'

import HeaderHomepage from './components/header.jsx'
import FooterHomepage from './components/footer.jsx'
import Projects from './components/pages/projects.jsx';
import Home from './components/pages/home.jsx';
import Services from './components/pages/services.jsx';
import About from './components/pages/about.jsx';
import Contact from './components/pages/contact.jsx';

import './components/app.scss';



export function App() {
  const [page, setPage] = useState("accueil");

  const url = document.location.href;
        // Supprimons l'éventuel dernier slash de l'URL
        let urlcourante = url.replace(/\/$/, "");
        // Gardons dans la variable queue_url uniquement la portion derrière le dernier slash de urlcourante
        const queue_url = urlcourante.substring(urlcourante.lastIndexOf("/") + 1);
       console.log(queue_url);
       setPage(queue_url);

  return (
    <>
      
      <HeaderHomepage page={page} updatePage={setPage}/>
      {page === "projets" ? <Projects /> : page === "services" ? <Services /> : page === "contact"? <Contact /> : page === "apropos"? <About /> : <Home />}
      
      <button type="button" class="fixedButton">Contact</button>
      
      <FooterHomepage />
    </>
  )
}
