import Level from "./Level";

export default function FlashcardBack(props) {

    return(
        <div className="body">
            <div className="flashcard">
                <div></div>
                <div className="question-behind">{props.cards[0].question}</div>
                <Level cards={props.cards}/>
                <div className="answer"> {props.cards[0].answer} </div>
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