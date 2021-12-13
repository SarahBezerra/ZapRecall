import Level from "./Level";
import Turn from "./Turn";

export default function ResponseStatus(props) {
    return(
        <div className="body">
            <div className={`flashcard flashcard-center ${props.opcao}`}>
                <span className="question-behind">{props.cards[props.question].question}</span>
                <Level cards={props.cards} level={props.cards[props.question].level}/>
                <div className="answer"> {props.cards[props.question].answer} </div>
                <Turn setSide={props.setSide} side={props.side} setQuestion={props.setQuestion} question={props.question} cards={props.cards} setScreen={props.setScreen}/>
            </div>
        </div>
    );
}
