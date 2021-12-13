import Turn from "./Turn";
import Level from "./Level";

export default function FlashcardFront(props) {
    return(
        <div className="body">
            <div className="flashcard flashcard-center">
                <Level cards={props.cards}/>
                <div className="question"> {props.cards[0].question} </div>
                <Turn setSide={props.setSide} side={props.side} />
            </div>
        </div>
    );
}