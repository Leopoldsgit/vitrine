import { useState } from 'preact/hooks'
const AsideHomepage = () => {

    const [prenomInput, setPrenomInput] = useState("");
    const [nomInput, setNomInput] = useState("");
    const [emailInput, setEmailInput] = useState("");              
    const [numeroInput, setNumeroInput] = useState("");
    const [messageInput, setMessageInput] = useState("");
    const arrayInfos = {firstname: prenomInput, lastname: nomInput, email: emailInput, number: numeroInput, message: messageInput};

    const handlePrenom = (event) => {
      setPrenomInput(event.target.value);
      console.log(prenomInput);
    };
    const handleNom = (event) => {
        setNomInput(event.target.value);
        console.log(nomInput);
    };
    const handleEmail= (event) => {
        setEmailInput(event.target.value);
        console.log(emailInput);
      };
      const handleNumero = (event) => {
          setNumeroInput(event.target.value);
          console.log(numeroInput);
      };
      const handleMessage = (event) => {
        setMessageInput(event.target.value);
        console.log(messageInput);
    };

    const handleSend = () => {
        console.log(arrayInfos);
    }



    return (
        <aside class="formulaire">
            <img src="./src/assets/travaux.jpg" class="formulaire-image" />
            <div class="formulaire-aside">
                <h2 class="formulaire-titre">Formulaire de contact</h2>
                <p class="formulaire-paragraphe">Vous pouvez me contacter via ce formulaire pour toute demande d'information ou de rappel</p>
                <span class="affichage-momentané-inputs">{prenomInput}, {nomInput}, {emailInput}, {numeroInput}, {messageInput}</span>
                <form class="form">
                    <fieldset>
                        <legend>Vos informations</legend>
                        <input id="form-prenom" cols="30" type="text" placeholder="prénom" onChange={handlePrenom}/>
                        <input id="form-nom" cols="30" type="text" placeholder="nom" onChange={handleNom}/>
                        <input id="form-email" cols="30" type="email" placeholder="mail" onChange={handleEmail}/>
                        <input id="form-number" cols="30" type="tel" placeholder="numéro" onChange={handleNumero}/>
                    </fieldset>
                    <label for="form-message">Votre message</label><textarea id="form-message" name="message" placeholder="message" onChange={handleMessage}></textarea>
                    <button id="form-buton" onClick={handleSend}>Envoyer</button>
                </form>
            </div>
        </aside>
    );
};

export default AsideHomepage;