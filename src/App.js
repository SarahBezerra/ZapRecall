import { useState } from "react"
import Card from "./components/Card";

export default function App() {

    const [screen, setScreen] = useState("home");

    if(screen === "home") {
        return(
            <>
            <img  className="image_logo" src="./assets/logo.png" alt="logo zaprecall"/>
            <button className="button_start" onClick={() => setScreen("flashcard")}>
                Praticar React
                <img className="icon_next" src="./assets/next.png" alt="icon next"/>
            </button>
            </>
        );

    }else if(screen === "flashcard"){
        return(
            <>
            <header className="header">
                <img src="./assets/logo-mini.png" className="logo-mini"></img>
            </header>

            <div className="body">
                <Card />
            </div>
            </>
        );
    }
}