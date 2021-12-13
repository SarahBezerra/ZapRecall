import logo_zaprecall from "../assets/logo.png";
import icon_next from "../assets/next.png";

export default function Home(props) {
    return(
        <>
        <img  className="image_logo" src={logo_zaprecall} alt="logo zaprecall"/>
        <button className="button_start" onClick={() => props.setScreen("flashcard")}>
            Praticar React
            <img className="icon_next" src={icon_next} alt="icon next"/>
        </button>
        </>
    );
}