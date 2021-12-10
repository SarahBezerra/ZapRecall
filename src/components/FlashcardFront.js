export default function FlashcardFront(props) {
    return(
        <div className="body">
            <div className="flashcard flashcard-front">
                <div className="level"> {`${props.cards[0].level}/8`} </div>
                <div className="question"> {props.cards[0].question} </div>
                <div className="turn"> <img src="./assets/turn.png" className="icon-turn" onClick={() => props.setSide("behind")}/></div>
            </div>
        </div>
    );
}