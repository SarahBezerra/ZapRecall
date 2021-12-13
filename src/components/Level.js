export default function Level(props) {
    return(
        <span className="level"> {`${props.level}/${props.cards.length}`} </span>
    );
}