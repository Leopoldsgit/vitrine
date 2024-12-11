
const AsideHomepage = () => {
    return (
        <aside class="formulaire">
            <img src="./src/assets/travaux.jpg" class="formulaire-image" />
            <div class="formulaire-aside">
                <h2 class="formulaire-titre">Formulaire de contact</h2>
                <p class="formulaire-paragraphe">Vous pouvez me contacter via ce formulaire pour toute demande d'information ou de rappel</p>
                <form class="form">
                    <fieldset>
                        <legend>Vos informations</legend>
                        <input id="form-prenom" cols="30" type="text" placeholder="prénom" />
                        <input id="form-nom" cols="30" type="text" placeholder="nom" />
                        <input id="form-email" cols="30" type="email" placeholder="mail" />
                        <input id="form-number" cols="30" type="text" placeholder="numéro" />
                    </fieldset>
                    <label for="form-message">Votre message</label><textarea id="form-message" name="message" placeholder="message"></textarea>
                    <button id="form-buton">Envoyer</button>
                </form>
            </div>
        </aside>
    );
};

export default AsideHomepage;