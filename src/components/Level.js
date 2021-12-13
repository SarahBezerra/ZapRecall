export default function Level(props) {
    return(
        <span className="level" data-identifier="counter"> {`${props.level}/${props.cards.length}`} </span>
    );
}