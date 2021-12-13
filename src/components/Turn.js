import icon_turn from "../assets/turn.png";

export default function Turn(props) {
    return(
        <div className="turn">
            <img src={icon_turn} className="icon-turn" onClick={() => ((props.side === "front") ? props.setSide("behind") : props.setSide("front"))}/>
        </div>
    );
}