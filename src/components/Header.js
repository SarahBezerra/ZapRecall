import logo_mini from "../assets/logo-mini.png"

export default function Header() {
    return(
        <header className="header">
            <img src={logo_mini} className="logo-mini" alt="logo zaprecall"></img>
        </header>
    );
}