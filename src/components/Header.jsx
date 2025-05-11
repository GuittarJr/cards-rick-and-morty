import logoImage from '../assets/RickAndMortyLogo.png';
export default function Header(){
    return(
        <header id='main-header'>
            <div id='brand'>
                <a href="#">
                    <img src={logoImage} alt="Logo Rick And Morty" />
                </a>
            </div>
            <nav id='navigation'>
                <menu id='main-nav'>
                    <li><a href="#">Personagens</a></li>
                    <li><a href="#">Lugares</a></li>
                    <li><a href="#">Episódios</a></li>
                </menu>
            </nav>
        </header>
    )
}