export default function Flashcards() {
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