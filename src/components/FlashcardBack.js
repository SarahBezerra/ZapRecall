export default function FlashcardBack(props) {
    return(
        <div className="body">
            <div className="flashcard">
                <span className="question-behind">{props.cards[0].question}</span>
                <span className="level"> {`${props.cards[0].level}/8`} </span>
                <div className="answer"> {props.cards[0].answer} </div>
                <div className="opcoes-behind">
                    <div className="opcao opcao1" onClick={() => props.setScreen("proxCard")}>Aprendi{'\n'}agora</div>
                    <div className="opcao opcao2">Não{'\n'}lembrei</div>
                    <div className="opcao opcao3">Lembrei{'\n'}com{'\n'}esforço</div>
                    <div className="opcao opcao4">Zap!</div>
                </div>
            </div>
        </div>
    );
}