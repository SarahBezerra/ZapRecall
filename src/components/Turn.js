import icon_turn from "../assets/turn.png";

export default function Turn(props) {
    return(
        <div className="turn">
            <img src={icon_turn} className="icon-turn" alt="" onClick={() => changeCard(props.setSide, props.side, props.setQuestion, props.question, props.cards)}/>
        </div>
    );
}

function changeCard(setSide, side, setQuestion, question, cards) {
    console.log(cards.length, question)

    if(side === "front"){
        setSide("behind");
    
    }else{
        setQuestion(question + 1);
        if(question < cards.length-1){
            setSide("front");
        }else{
            alert("fim");
        }
    }
}