import { useState } from "react"

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
            <header className="topo">
                <img src="./assets/logo-mini.png" className="logo-mini"></img>
            </header>

            <div className="corpo">
                <div className="flashcard">
                    <div className="level">1/8</div>
                    <div className="question">Pergunta</div>
                    <div className="turn"><img src="./assets/turn.png" className="icon-turn"></img></div>
                </div>
            </div>
            </>
        );
    }
}