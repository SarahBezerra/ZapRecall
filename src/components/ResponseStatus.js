import Level from "./Level";
import Turn from "./Turn";

export default function ResponseStatus(props) {
    return(
        <div className="body">
            <div className={`flashcard flashcard-center ${props.opcao}`}>
                <span className="question-behind">{props.cards[0].question}</span>
                <Level cards={props.cards}/>
                <div className="answer"> {props.cards[0].answer} </div>
                <Turn setSide={props.setSide} side={props.side} />
            </div>
        </div>
    );
}
