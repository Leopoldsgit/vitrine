import logo from '../assets/logo.png';
const HeaderHomepage = () => {

    return (
        <header>
            <div><img src={logo} className='logo'/></div>
            <nav class="">
                <ul>
                    <li>
                        <a href='home'>Accueil</a>
                    </li>
                    <li>
                        <a href="services">Services</a>
                    </li>
                    <li>
                        <a href="projets">Projets</a>
                    </li>
                    <li>
                        <a href="apropos">A propos</a>
                    </li>
                    <li>
                        <a href="contact">Contact</a>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default HeaderHomepage;