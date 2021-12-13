import Turn from "./Turn";

export default function FlashcardFront(props) {
    return(
        <div className="body">
            <div className="flashcard flashcard-front">
                <div className="level"> {`${props.cards[0].level}/${props.cards.length}`} </div>
                <div className="question"> {props.cards[0].question} </div>
                <Turn setSide={props.setSide} side={props.side} />
            </div>
        </div>
    );
}