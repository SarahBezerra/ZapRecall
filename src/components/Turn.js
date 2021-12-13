export default function Turn(props) {
    return(
        <div className="turn">
            <img src="./assets/turn.png" className="icon-turn" onClick={() => ((props.side === "front") ? props.setSide("behind") : props.setSide("answered"))}/>
        </div>
    );
}