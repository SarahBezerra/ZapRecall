import Turn from "./Turn";
import Level from "./Level";

export default function FlashcardFront(props) {
    return(
        <div className="body">
            <div className="flashcard flashcard-center">
                <Level cards={props.cards} level={props.cards[props.question].level}/>
                <div className="question"> {props.cards[props.question].question} </div>
                <Turn setSide={props.setSide} side={props.side} setQuestion={props.setQuestion} question={props.question} cards={props.cards} setScreen={props.setScreen}/>
            </div>
        </div>
    );
}