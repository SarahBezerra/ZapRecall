export default function Level(props) {
    return(
        <span className="level"> {`${props.cards[0].level}/${props.cards.length}`} </span>
    );
}