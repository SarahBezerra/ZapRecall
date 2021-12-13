import Level from "./Level";

export default function FlashcardBack(props) {

    return(
        <div className="body">
            <div className="flashcard">
                <div></div>
                <div className="question-behind">{props.cards[props.question].question}</div>
                <Level cards={props.cards} level={props.cards[props.question].level}/>
                <div className="answer"> {props.cards[props.question].answer} </div>
                <div className="opcoes-behind">
                    <div className="opcao opcao1" onClick={() => {props.setOpcao("neutral"); props.setSide("response_status")}} >Aprendi{'\n'}agora</div>
                    <div className="opcao opcao2" onClick={() => {props.setOpcao("incorrect"); props.setSide("response_status")}}>Não{'\n'}lembrei</div>
                    <div className="opcao opcao3" onClick={() => {props.setOpcao("effort"); props.setSide("response_status")}}>Lembrei{'\n'}com{'\n'}esforço</div>
                    <div className="opcao opcao4" onClick={() => {props.setOpcao("zap"); props.setSide("response_status")}}>Zap!</div>
                </div>
            </div>
        </div>
    );
}