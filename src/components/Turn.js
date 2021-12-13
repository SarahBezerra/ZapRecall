import icon_turn from "../assets/turn.png";

export default function Turn(props) {
    return(
        <div className="turn" data-identifier="arrow">
            <img src={icon_turn} className="icon-turn" alt="" onClick={() => changeCard(props.setSide, props.side, props.setQuestion, props.question, props.setScreen, props.cards)}/>
        </div>
    );
}

function changeCard(setSide, side, setQuestion, question, setScreen, cards) {
    if(side === "front"){
        setSide("behind");
    
    }else{
        setQuestion(question + 1);
        if(question < cards.length-1){
            setSide("front");
        }else{
            setScreen("game_over");
        }
    }
}