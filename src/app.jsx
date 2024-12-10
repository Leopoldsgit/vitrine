import { useState } from 'preact/hooks'
import preactLogo from './assets/preact.svg'
import viteLogo from '/vite.svg'
import './app.scss'

export function App() {
 
  return (
    <>
  <header>
    <div><img src="" /></div>
    <nav class="">
      <ul>
        <li>
          Accueil 
        </li>
        <li>Services</li>
        <li>Projets</li>
        <li>A propos</li>
      </ul>
    </nav>
  </header>
  <main>
    <section>
      <h1>Bruno Heugas</h1>
      <h2>Maçonnerie</h2>
      <h3>Maçon avec X années dans le métier</h3>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur sint repudiandae, quod error in voluptatum
        magni ut fuga quam unde quidem eaque ducimus quas deleniti cumque beatae corporis tempore temporibus?</p>
        <button type="button" id="devis-buton">Devis Gratuit<img src="" /></button>
    </section>
    <button type="button" class="fixedButton">Contact</button>
    <section class="carousel">
      <img src="./src/assets/travaux.jpg" class="carroussel" alt="image de travaux" />
      <img src="./src/assets/piscine.jpg" class="default" alt="image d'une piscine" />
      <img src="./src/assets/maison.jpg" class="carroussel" alt="image d'une maison" />
    </section>
    <nav>
      <ul class="carr-nav">
        <li class="left"></li>
        <li class="center"></li>
        <li class="right"></li>
      </ul>
    </nav>
    <section>
      <h2>titre</h2>
      <p>Situé à Dax, je propose mes services en dallage, piscine, construction et bien d'autres!</p>
      <img class="image" src="./src/assets/piscine.jpg" />
    </section>
    <section>
      <h2>Services</h2>
      <p>jiskdnkdsnkfdsx</p>
    </section>
  </main>
    <aside class="formulaire">
      <img src="./src/assets/travaux.jpg" class="formulaire-image"/>
      <div class="formulaire-aside">
      <h2 class="formulaire-titre">Formulaire de contact</h2>
      <p class="formulaire-paragraphe">Vous pouvez me contacter via ce formulaire pour toute demande d'information ou de rappel</p>
      <form class="form">
        <fieldset>
          <legend>Vos informations</legend>
        <input id="form-prenom" cols="30" type="text" placeholder="prénom"/>
        <input id="form-nom" cols="30" type="text" placeholder="nom"/>
        <input  id="form-email" cols="30" type="email" placeholder="mail"/>
        <input id="form-number" cols="30" type="text" placeholder="numéro"/>
      </fieldset>
        <label for="form-message">Votre message</label><textarea id="form-message" name="message" placeholder="message"></textarea>
        <button id="form-buton">Envoyer</button>
      </form>
    </div>
  </aside>
  <footer>
   <address>dax</address>
  </footer>
    </>
  )
}
