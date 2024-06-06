import './header.css'
import '../main.css'

function Header() {
    return (
        <header>
            <div className={"header-container"}>
                <span className={"header-container-item"}>🟦</span>
                <span className={"header-container-item profile-name"}>Gonzalo Lepetic</span>
                <span className={"header-container-item"}>/</span>
                <span className={"header-container-item"}>Software Engineer</span>
            </div>
            <div className={"header-container header-right"}>
                <span className={"header-container-item clickable-header-item"}>About me</span>
                <span className={"header-container-item clickable-header-item"}>Resume</span>
                <span className={"header-container-item clickable-header-item"}>Projects</span>
                <span className={"header-container-item clickable-header-item"}>Contact</span>
            </div>

        </header>
    );
}

export default Header;
